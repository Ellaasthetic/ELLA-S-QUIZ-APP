Quiz app
Building this quiz imvolved the following process:

•	I took on the challenge of building a quiz app using HTML, CSS and JavaScript, in an effort to better my understanding of JavaScript concepts and my web development abilities. I wanted to develop my knowledge of these technologies and get some real-world experience through this project.

•	In the process of building the quiz app, I employed a combination of HTML, CSS and JavaScript to create an interactive and engaging user interface. I started by creating and styling the home page of the quiz app. The homepage consists of a few links for game and high scores pages. Utilized CSS properties like flexbox and buttons. 

•	After creating and styling the home page, I created the game page and displayed static question and answer information. I utilized JavaScript array objects, forEach loop, splice, event listener, to display the static questions and answers.

•	I added a new feature to display feedback for correct and incorrect answers, detecting whether answer is correct or not. I learnt how to apply classList to JavaScript, and I also used set-timeout to give delay.

•	To display the user’s score and current question number, I created a head’s up display (HUD). This updates questions and scores and keeps track of it.

•	I took the HUD one step further by creating a visual progress bar to track the user’s progress through questions.

•	After creating the progress bar to track user’s progress, I proceeded to creating and styling the end page. This end page will display user’s achieved score by providing a form for saving scores and links to play again or return to homepage. Saving of user’s score was achieved by using local storage to get the scores.

•	I created a new html and JavaScript file to display high scores gotten from local storage to users.

•	I proceeded to remove the hard coded questions by moving it into a Json file, in other fetch questions externally from Open Trivia DB. 

•	After moving the hard coded questions into a Json file, I made a remote API call to get a list of questions from Open Trivia database. I did this by copying and pasting the API URL inside the fetch function, afterwards, I converted the generated questions into the format of my quiz app using map to iterate through.

•	To prevent displaying dummy text or a blank screen upon loading the questions, I created a spinning loader, using W3school create a CSS loader.
