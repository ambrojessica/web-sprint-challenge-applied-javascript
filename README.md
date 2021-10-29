# Applied JavaScript Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Applied JavaScript**. During this sprint, you studied **DOM and components**. In your challenge this week, you will demonstrate your mastery of these skills by creating **an online Lambda newspaper**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge.

## Project Set Up

- [ ] Fork and clone the repo. Delete your old fork from Github first if you are repeating this Unit.
- [ ] Open the assignment in Canvas and click on the "Set up git" option.
- [ ] Push your first commit: `git commit --allow-empty -m "first commit" && git push`.
- [ ] Check to see that Codegrade has accepted your git submission.

## Project Instructions

### Introduction

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page.

In meeting the minimum viable product (MVP) specifications listed below, your project should look similar to the image linked below:

[Lambda Times](https://tk-assets.lambdaschool.com/cac4803c-6e8f-4846-be0e-b20d82a34a73_lambda-times.png)

### Instructions

- [ ] Navigate to the root of the project with your command line.
- [ ] Run `npm install` to download the dependencies listed in the `package.json` file.
- [ ] Run `npm start` to compile the project and serve it.
- [ ] Navigate Chrome to `http://localhost:3000`
- [ ] In a separate terminal, run `npm test` to run tests.

**Steps Required for MVP:**

- [ ] Steps 1 and 2 are explained inside the `src/components/header.js` file.
- [ ] Steps 3 and 4 are explained inside the `src/components/tabs.js` file.
- [ ] Steps 5 and 6 are explained inside the `src/components/card.js` file.

**Important Notes:**

- Please **do not move or rename existing files** or folders.
- If your development server stops "auto reloading", manually kill it with `CTRL+C` and restart it.
- Do not change the `package.json` file except to install libraries with NPM (Axios is _already_ in the `package.json`).
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Submission format

- [ ] Submit via Codegrade by committing and pushing any new changes to the *main* branch.
- [ ] Check Codegrade  for automated feedback.
- [ ] Check Codegrade in the days following the Sprint Challenge for reviewer feedback.
- [ ] Any changes pushed after the deadline will not receive any feedback.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. What is the DOM?
The DOM is an acronym for Document Object Model, this is the structure of a web page, this starts at the document of the page and goes through the html, styling and content which can also be identified as nodes. We can use the DOM to manipulate or add things to our document by using JavaScript.

2. What is an event?
Events are when we use JavaScript to let the developer know when there has been a change in the site. Events can be used when the user clicks on something in the application, or if the user has low battery we can use events and let them know. Events can sometimes use functions however the function will not work unless something triggers it.  

3. What is an event listener?
An event listener is used when something triggers it. We can add an event listener, this will wait until the user does something or until something triggers it and it then follows a function (not always) and executes what the web developer wants it to do. However, you can also remove an event listener if you would like. If we read the syntax it starts with your element, addEventListener, then the event that you want to happen, followed by the function if there is one.

4. Why would we convert a NodeList into an Array?
Sometimes we cannot access what is in a NodeList however if we convert it into an array we can then access the array and put it to use. Nodelists are a bunch of nodes that are able to get into the DOM and manipulate it, but it is best to convert and use arrays because they can hold more values and it is easier to use. 

5. What is a component?
A component is what we are trying to display in our web page. We use components for HTML, CSS and tie it with JavaScript. We use components to add or delete HTML and CSS, we can do this by using JavaScript, this will tie all of our elements together and get us clean code.
