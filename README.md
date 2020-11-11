# Client-Side Web Development Course - Campus Experience

Welcome to the Developers Institute Campus Experience. Today we will be going through a typical day in the life of a student. Work through the material below, with guidance from an instructor and your student buddy.

## Set up your development environment

If you are joining us from your own home remotely, make sure you have the following things set up on your computer:

- [Google Chrome](https://www.google.com/chrome/) installed. This is a nice modern browser with great developer tools.
- [VS Code](https://code.visualstudio.com/) downloaded and installed
- The [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) installed in VS Code
  - Watch [Tutorial: Installing Live Server extension in VS Code](https://www.loom.com/share/7349cabe8ec04c56889915f2d5534649)

## HTML, CSS and JavaScript: The Big Picture

- Watch [Welcome to the web!](https://www.khanacademy.org/computing/hour-of-code/hour-of-code-lessons/hour-of-html/v/making-webpages-intro) on Khan Academy. Only watch the first video in this series for now.
- Watch the following video series on YouTube that gives an overview of the web, HTML, CSS, and JavaScript
  - [What is "The Web" and how does it work? | Web Demystified, Episode 0](https://youtu.be/O_GWbkXIqEY) (3m30s)
  - [What's HTML and how does it work? | Web Demystified, Episode 1](https://youtu.be/PORRrz3Y8Vc) (7m15s)
  - [What is CSS and how does it style web pages? | Web Demystified, Episode 2](https://youtu.be/Y02yI1OfZjI) (7min)
  - [What is JavaScript and how does it work? | Web Demystified, Episode 3](https://youtu.be/09XmbByy6Sk) (6min)

---

## Part A: Introduction to HTML

HTML elements, tags, and attributes are the fundamental blocks of HTML and the main tools you will use for displaying content on your web pages.

Remember, HTML is all about the meaning of the content, whereas Cascading Style Sheets (CSS) is used to style content, and JavaScript for scripting and adding interactivity. If the human body can be seen as a webpage then the bones would be the HTML, the CSS would the skin and JavaScript would be the muscles.

### Learning goals

- Be able to identify and describe HTML elements, tags, attributes, and content.
- Write an HTML page that includes headings, paragraphs strong and emphasized text

### Self directed Learning

- Watch [Intro to HTML](https://www.loom.com/share/7676d3dfc4bf4005b82633cf8963b5a9) (28mins)
- Complete [HTML Basics](https://www.khanacademy.org/computing/hour-of-code/hour-of-code-lessons/hour-of-html/pt/html-basics) on Khan Academy.
  - Start with _HTML Basics_, and finish on _Challenge: You can learn text tags_

### HTML Exercise: My first webpage

- Visit [My first webpage](https://github.com/Developers-Institute/01-exercise-my-first-html-page) on GitHub, download the code and open it in VS Code.
  - Watch the [Instructions on downloading code from GitHub](https://www.loom.com/share/92ebfbcca8be4f3ca6c4d89d95443d7e?sharedAppSource=personal_library) tutorial video
  - If you need help, or have finished, get in touch with your instructor or student buddy to review your code together

---

## Part B: HTML Lists

### Learning goals

- Explain the difference between an ordered and unordered list
- Write a bullet list in HTML
- Write a numbered list in HTML
- Explain what the following elements are: `<ul>`, `<ol>` and `<li>`

### Self-directed learning

- Watch [HTML: Lists](https://www.khanacademy.org/computing/hour-of-code/hour-of-code-lessons/hour-of-html/pt/html-lists) on Khan Academy
- Complete [Challenge: Wishlist](https://www.khanacademy.org/computing/hour-of-code/hour-of-code-lessons/hour-of-html/pc/challenge-your-learning-list) on Khan Academy

### HTML Exercise: 'How to Eat Sushi' HTML page with lists

- Visit ['How to Eat Sushi' HTML page with lists](https://github.com/Developers-Institute/01-exercise-html-lists) on GitHub, [download the code](https://www.loom.com/share/92ebfbcca8be4f3ca6c4d89d95443d7e?sharedAppSource=personal_library) and open it in VS Code.
  - If you need help, or have finished, get in touch with your instructor or student buddy to review your code together

<!--
### Beginner students

Your chatbot has been loaded with some of our logic to handle the reply logic, so you can focus on styling the chatbot 🤖

The CSS styles can be edited in `Chatbot/static/css/style.css`, saved & the page styles will re-load.

1. Close the first live server (click `Port: 5501`) at bottom-right corner of VSCode.
2. Open Chatbot HTML file: Right-click on `Chatbot/index.html` and select `Open with Live Server`
3. Open `style.css`, not the one from exercise A but the one under Chatbot folder.
4. Style the body background color in the existing `body` rule-set by inserting `background: #ffffff` but instead of white (`#ffffff`) pick a color from https://coolors.co/
5. Change the colour of the text for the chat messages. They have `class="chat-item"` in the HTML, so will be styled with a rule-set like `.chat-item { color: #000000 }` but instead of black (#000000) pick another colour. Note you have to use `color` not `colour`.
6. Try replace the robot image with another image you find online.

### Intermediate/Advanced students - Must have JavaScript experience

In Part C you'll be writing some logic for a chatbot 🤖 to reply to user input. You may skip or leave the styling until last and focus on the chatbot reply logic.

Your code will need to go in the `Chatbot/static/js/chatbot.js` file.

1. Close the first live server (click Port: 5501) at bottom-right corner of VSCode.
2. Open Chatbot HTML file: Right-click on `Chatbot/index.html` and select `Open with Live Server`
3. In `chatbot.js` there are functions already written to handle the form submit and render the chat to the page. You need to write the code to attach the form submit handler to the form element.

   - Add the code for this at the bottom of the page.
   - Check the form `id` in the `index.html` file. There should be only one form in the document.
   - First you'll need to get a reference to the form element, then use the `.addEventListener` method to set the 'submit' event.

   If you've attached the submit handler correctly, you should be able to chat with the bot!

   You should also notice that the bot doesn't reply properly. You will need to implement the chat logic in the `botReply` function.

4. Find the `botReply` function in `chatbot.js`. You'll see it takes in a single parameter `msg`. That value will be the last input the user typed in. In the `botReply` function add an empty variable named `reply`.
5. Currently `botReply` always returns the string 'Error unknown ...' regardless of the user input. Update the `return` statement to return the `reply` variable.
6. Write the `botReply` logic to take the `msg` parameter and set the value of the `reply` variable based on something the user entered. It's up to you how to implement it, and what text to use for the replies.
   - You could use if/else or switch statements or a combination of the two.
   - You could just return a random string every time.
   - The function should be able to return at least three different replies.
   - You will need to use your `string-method-fu` here!

You can update the rest of the page and CSS as you see fit

Celebrate again!! 🎉🎉🎉 You've finished your third exercise!! -->
