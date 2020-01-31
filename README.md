# WDD01 Day in the life

Beginner and intermediate client-side development challenges.

## Morning Meeting

We'll go through
- basics of what is involved when you visit a webpage
- tools we & the whole industry use
- the basics of HTML and CSS

Slideshow: https://docs.google.com/presentation/d/13uqWRk190Ergdy61iCDBQ9guoCJkbSnT_aH2gZeBkQY/edit#slide=id.g64bc3b77e4_0_109

### Video - HTML, CSS and JavaScript: The Big Picture

We'll watch a succinct video together on `HTML, CSS and JavaScript: The Big Picture` to get an overview understanding of the core parts of the web - from https://app.pluralsight.com/library/courses/html-css-javascript-big-picture/table-of-contents

 * Course Overview
 * Why You Should Care About How the Web Works
 * Displaying the Web with HTML

### Challenge Brief

Today we'll be diving into HTML documents and CSS styling basics,
then create a chatbot.

## Resources / Self-directed learning

- W3C HTML elements tutorial: https://www.w3schools.com/html/html_elements.asp
- Colour pickers: https://coolors.co/ or http://colormind.io/

## Challenge Part A - Basics of HTML & CSS

For this challenge section, you will need to use the starter website that's been set up in the `Chatbot` folder.

1. Open up vscode and open the `WDD01 Day in the life` workspace from the Recent section.
2. See the files panel on the left - double-click the `Basics/index.html` file - this is where your HTML will go.
3. Right-click on `Basics/index.html` and open with live server

   Now the HTML document can be edited in `Basics/index.html`, saved & the page content will re-load.

   The CSS styles can be edited in `Basics/static/css/style.css`, saved & the page styles will re-load.

   Now we're ready to go!

4.

## Challenge Part B - Chatbot 🤖

For this challenge section, you will need to use the starter website that's been set up in the `/Chatbot` folder.

Your code will need to go in the `Chatbot/static/js/chatbot.js` file.


### Beginner students

Your chatbot has been loaded with some of our logic to handle the reply logic, so you can focus on styling the chatbot 🤖

### Intermediate students

In Part B you'll be writing some logic for a chatbot 🤖 to reply to user input. You may skip or leave the  styling until last and focus on the chatbot reply logic.

1. In `chatbot.js` there are functions already written to handle the form submit and render the chat to the page. You need to write the code to attach the form submit handler to the form element.
    * Add the code for this at the bottom of the page.
    * Check the form `id` in the `index.html` file. There should be only one form in the document.
    * First you'll need to get a reference to the form element, then use the `.addEventListener` method to set the 'submit' event.

    If you've attached the submit handler correctly, you should be able to chat with the bot!

    You should also notice that the bot doesn't reply properly. You will need to implement the chat logic in the `botReply` function.

2. Find the `botReply` function in `chatbot.js`. You'll see it takes in a single parameter `msg`. That value will be the last input the user typed in. In the `botReply` function add an empty variable named `reply`.
3. Currently `botReply` always returns the string 'Error unknown ...' regardless of the user input. Update the `return` statement to return the `reply` variable.
4. Write the `botReply` logic to take the `msg` parameter and set the value of the `reply` variable based on something the user entered. It's up to you how to implement it, and what text to use for the replies.
    * You could use if/else or switch statements or a combination of the two.
    * You could just return a random string every time.
    * The function should be able to return at least three different replies.
    * You will need to use your `string-method-fu` here!

You can update the rest of the page and CSS as you see fit. Just make sure to keep any existing elements and element attributes (for testing purposes ...).

