# Client-Side Web Development Course - Day in the life

Beginner and intermediate client-side development challenges.

## Morning Meeting

We'll go through
- basics of what is involved when you visit a webpage
- tools we & the whole industry use
- the basics of HTML and CSS

Slideshow: https://docs.google.com/presentation/d/13uqWRk190Ergdy61iCDBQ9guoCJkbSnT_aH2gZeBkQY/edit#slide=id.g64bc3b77e4_0_109

### Video - HTML, CSS and JavaScript: The Big Picture

There's a succinct video on `HTML, CSS and JavaScript: The Big Picture` to get an overview understanding of the core parts of the web - from https://app.pluralsight.com/library/courses/html-css-javascript-big-picture/table-of-contents. Even more advanced web developers will likely learn something here as it goes into the history.

 * Course Overview
 * Why You Should Care About How the Web Works
 * Displaying the Web with HTML

### Challenge Brief

Today we'll be diving into HTML documents and CSS styling basics,
then create a chatbot.

## Resources / Self-directed learning

- HTML elements, tags, and attributes are the fundamental blocks for building web pages. This section will cover the basics of HTML so you can write your first webpage.

- W3C HTML elements tutorial: https://www.w3schools.com/html/html_elements.asp

- Need some colour ideas? Check out https://coolors.co/ or http://colormind.io/

- W3C CSS intro: https://www.w3schools.com/css/css_intro.asp

- HTML Validator: https://validator.w3.org/#validate_by_input

- ARIA Recommendation: https://www.w3.org/TR/wai-aria-1.1/

- Next, head over to the W3C HTML tutorials site:
  - https://www.w3schools.com/html/html_elements.asp
  - Browse over the Basic tutorial to at least Paragraphs tutorials, and the formatting tutorial. We'll cover styling in more depth in the CSS classes later in the course.

- Then, test your knowledge you've just learnt:
  - https://www.w3schools.com/html/exercise.asp

- Give these exercises a go (use the menu on the left of the page):
  - HTML Attributes
  - HTML Headings
  - HTML Paragraphs
  - HTML Formatting


## Challenge Part A - Basics of HTML & CSS

For this challenge section, you will need to use the starter website that's been set up in the `Basics` folder.

1. Open up vscode and open the `WDD01 Day in the life` workspace from the Recent section.

2. See the files panel on the left - double-click the `Basics/index.html` file - this is where your HTML will go.

3. Right-click on `Basics/index.html` and select `Open with Live Server`:

   - Now the HTML document can be edited in `Basics/index.html`, saved & the page content will re-load.

   - The CSS styles can be edited in `Basics/static/css/style.css`, saved & the page styles will re-load.

   - Now we're ready to go!

4. Update the `<title>` on line number 7:

    - Select the `Challenge` text in in between the `<title>` tags.

    - Change the text to `My First Website`.

    - Save the changes in the `index.html` document. You should see the webpage update the title text in the web browser tab.

    - <img src="Basics/static/img/title_challenge.png" alt="Challenge Title" width="600">

    - <img src="Basics/static/img/title_MFW.png" alt="My First Website Title" width="600">

5. Update the `<h1>` heading with the text `Hello, World!`:

    - Select the `Basics` text in between the `<h1>` and `</h1>` tags on line 17.

    - Change the text to `Hello, World!`.

    - Remember to save the file after making code updates to see the changes in the web browser.

6. Add some styling to the heading by adding a CSS style class to the heading element:

    - In the `<h1>` `class` attribute, put `main-heading` between the quotes.

     - The heading should now be larger and brighter!

7. Give the website a background image.

    - In the `style.css` stylesheet, find the `.background` style rule.

    - Paste the following between the parenthesis:

        ```
        background-image: url('/Basics/static/img/background.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        ```

    - If all goes well, you should have a "dark themed" website now.

8. Back in the website `index.html` file, add a paragraph element under the heading.

    - Below the `main-heading` element, add a paragraph element `<p>  </p>`

    - Add some text to between the `<p>` tags. Just make up a story about the background image.

9.  Style the paragraph `<p>` element.

    - Add a `class` attribute to the `<p>` element.

    - Give the `class` attribute a value of `main-paragraph`.

    - In the `style.css` file add a new style rule called `.main-paragraph`.

    - In the `.main-paragraph` style rule add a `color:` property. Try using different colours names (or hex values). *Note: the CSS property must be spelt `color`.*

10. Be amazed at your glorious website!


## Challenge Part B - Advanced HTML

The assignment is to create two separate HTML files and link them together with HTML link elements.

1. Close the first live server (click  Port: 5501) at bottom-right corner of VSCode.
2. In the `AdvancedHtml` folder create an index HTML file.
    - `index.html` file.
    - There should be a empty `author.html` document in the folder too.
3. Open new HTML file with live server: Right-click on `Chatbot/index.html` and select `Open with Live Server`
4. In the `index.html` file, add the `<!DOCTYPE>`, `<html>`, `<head>`, `<body>` elements.
5. In the body element of `index.html` add a `<h1>` element with content of your choice.
    - See the `author.html` file for a reminder of the basic HTML elements.
    - The heading should be about a topic you could write about in the web page.
    - Give the `<h1>` element an `id="topic-heading"` attribute
6. Under the `<h1>` element, add a unordered list with 3 list items.
    - The list items contents should be `Home`, `Author`, `Logout`
    - The list items should each have an anchor element with `href` attributes.
    - There should be an anchor element within each list item
        - E.g. `<li><a href="http://foobar.com">A Page Link</a></li>`
7. Link the `Home` list item to the `<h1>` element using the `id` as the target.
    - E.g. `href="#topic-heading"`
    - When clicked this should take the user to the top of the heading.
8. Link the `Author` list item to `author.html`.
9. Link the `Logout` list item to `https://www.developers.ac.nz`
    - Add a `target="_blank"` attribute to the link anchor element.
    - Also add the `noopener` and `noreferrer` attributes to the link anchor element.
10. Add a paragraph element under the `<h1>` element and write a short blurb about the topic you put in the `<h1>` heading.
11. In the `author.html` document add a list with a single list item in the `<header>` element (under the heading element).
12. Link the single list item back to the `index.html` page.
    - E.g. `href="index.html"`
13. Replace `Your Name` in the `author.html` document with your name.
14. Write a short blurb about yourself in the `<p>` element.
15. Try out the links on both pages and make sure they work correctly!!

Celebrate again!! 🎉🎉🎉 You've finished your second challenge!!


## Challenge Part C - Chatbot 🤖

For this challenge section, you will need to use the starter website that's been set up in the `/Chatbot` folder.

### Beginner students

Your chatbot has been loaded with some of our logic to handle the reply logic, so you can focus on styling the chatbot 🤖

The CSS styles can be edited in `Chatbot/static/css/style.css`, saved & the page styles will re-load.

1. Close the first live server (click  `Port: 5501`) at bottom-right corner of VSCode.
2. Open Chatbot HTML file: Right-click on `Chatbot/index.html` and select `Open with Live Server`
3. Open `style.css`, not the one from challenge A but the one under Chatbot folder.
4. Style the body background color in the existing `body` rule-set by inserting `background: #ffffff` but instead of white (`#ffffff`) pick a color from https://coolors.co/
5. Change the colour of the text for the chat messages. They have `class="chat-item"` in the HTML, so will be styled with a rule-set like `.chat-item { color: #000000 }` but instead of black (#000000) pick another colour. Note you have to use `color` not `colour`.
6. Try replace the robot image with another image you find online.

### Intermediate/Advanced students - Must have JavaScript experience

In Part C you'll be writing some logic for a chatbot 🤖 to reply to user input. You may skip or leave the  styling until last and focus on the chatbot reply logic.

Your code will need to go in the `Chatbot/static/js/chatbot.js` file.


1. Close the first live server (click  Port: 5501) at bottom-right corner of VSCode.
2. Open Chatbot HTML file: Right-click on `Chatbot/index.html` and select `Open with Live Server`
3. In `chatbot.js` there are functions already written to handle the form submit and render the chat to the page. You need to write the code to attach the form submit handler to the form element.
    * Add the code for this at the bottom of the page.
    * Check the form `id` in the `index.html` file. There should be only one form in the document.
    * First you'll need to get a reference to the form element, then use the `.addEventListener` method to set the 'submit' event.

    If you've attached the submit handler correctly, you should be able to chat with the bot!

    You should also notice that the bot doesn't reply properly. You will need to implement the chat logic in the `botReply` function.

4. Find the `botReply` function in `chatbot.js`. You'll see it takes in a single parameter `msg`. That value will be the last input the user typed in. In the `botReply` function add an empty variable named `reply`.
5. Currently `botReply` always returns the string 'Error unknown ...' regardless of the user input. Update the `return` statement to return the `reply` variable.
6. Write the `botReply` logic to take the `msg` parameter and set the value of the `reply` variable based on something the user entered. It's up to you how to implement it, and what text to use for the replies.
    * You could use if/else or switch statements or a combination of the two.
    * You could just return a random string every time.
    * The function should be able to return at least three different replies.
    * You will need to use your `string-method-fu` here!

You can update the rest of the page and CSS as you see fit

Celebrate again!! 🎉🎉🎉 You've finished your third challenge!!
