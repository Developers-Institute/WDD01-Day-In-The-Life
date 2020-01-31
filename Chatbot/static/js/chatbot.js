// array to track the chat messages
const chatLog = [];

let userName;

// chat message object constructor
function ChatMessage(user, msg, bot) {
  this.user = user;
  this.msg = msg;
  this.bot = bot;
  this.timestamp = new Date();
};

/**
 * 
 * FIX THIS!
 */
const botReply = (msg) => {
  let reply;
  const words = msg.replace('?', ' ?').toLowerCase().split(' ');
  const isQuestion = msg.indexOf('?') >= 0;
  let responses = [];

  if (!msg) {
    if (!userName) {
      responses = ["Gotta speak up.. what was your name?", "How rude.. What is your name?"];
    } else {
      responses = ['What? You gotta speak up', 'Huh?'];
    }

  } else if (isQuestion) {
    if (words[0] == 'should' || words[0] == 'can') {
      responses = ['Yes', 'No', 'Not sure', 'Maybe', `What do you think, ${userName}?`, 'The choice is obvious'];
    } else if (words[0] == 'when') {
      responses = ['Today', 'Tomorrow', 'This week', 'Next week', 'This month', 'Next month', 'In a long time!', 'Never!'];
    } else if (words[0] == 'why') {
      responses = ['Because', "It's always been like that", "My master made it so"];
    }

    responses.push("I don't know");
    responses.push("What kind of question is that?");
  
  } else if (words[0] == 'hi' || words[0] == 'hello') {
    responses = [
      `What can I help you with, ${userName}?`,
      `How can I help?`
    ];

  } else if (!userName) {
    userName = msg;
    responses = [`Hi, ${userName}!`];

  } else {
    responses = [
      'Huh?',
      'Why?',
      "You're not making any sense!",
      "That's nice",
      "HAHA"
    ];
  }

  const randomChoice = Math.round( Math.random() * (responses.length - 1) );
  reply = responses[ randomChoice ];

  return reply;
};

//
const renderChatbox = () => {
  // get a reference to the chatbox element
  const chatboxEl = document.getElementById('chatbox');

  // copy the latest set of messages, then reverses the new
  // array and takes the first 10 elements
  const recentMessages = [...chatLog].reverse().slice(0,20);
  /**
   * this one liner statment would be equivalent to:
   * var recentMessages = chatLog.slice();
   * recentMessages.reverse();
   * var last20RecentMessages = recentMessages.slice(0,20);
   */

  // markup to display
  let chatboxHTML = '';

  // create a chat item div element
  for (let message of recentMessages) {
    let userType = (message.bot) ? 'bot' : 'user';
    let markup = `
      <div class="chat-item chat-item-${userType}">${message.msg}</div>
    `;
    chatboxHTML += markup;
  }
  
  // set the inner HTML
  chatboxEl.innerHTML = chatboxHTML;
};

// form submit handler
const handleChatSubmit = (event) => {
  // get reference to the chat input
  const chatInput = document.getElementById('chat-input');

  // get the chat form input value
  const chatValue = chatInput.value;
  // clear the input ready for the next message
  chatInput.value = '';

  // push the user message to the chat log
  chatLog.push(new ChatMessage('user', chatValue, false));
  // push the bot reply to the chat log
  chatLog.push(new ChatMessage('bot', botReply(chatValue), true));

  // render the chatbox
  renderChatbox();

  event.preventDefault();
};

// attach the submit event handler to the form here ...
const form = document.getElementById("chat-form");
form.addEventListener('submit', handleChatSubmit);

// Add the first question to the chat log
chatLog.push(new ChatMessage('bot', "Hi, human ... what's your name?", true));
renderChatbox();