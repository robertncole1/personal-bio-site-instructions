# Personal Bio Site 1: HTML & CSS || Using JS to Print Projects to the page

## Requirements

### Use Git/Github branching
1. Branch by feature
1. Commit by significant change - or before you accidentally (on purpose) spill moonshine on your computer.

### Create The Shell for Your Bio Site
1. Create 3 files: index.html, main.css, and projects.js.
1. Use the HTML boilerplate below to create the shell of your personal bio site.
1. Fill in the HTML where it instructs you to do so.
1. Link your JS and CSS correctly in your HTML.
1. Give your bio site some basic styling; this doesn't have to be perfect - you'll have 6 months to iterate on it!
```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- TODO: Insert a title for your page -->
</head>

<body>
  <!-- Navigation -->
  <nav>
    <!-- TODO: Insert some sort of H1-H6 with your name here -->
    <ul id="navLinks">
      <li><a id="navToBio">Bio</a></li>
      <li><a id="navToTechnologies">Technologies</a></li>
      <li><a id="navToProjects">Projects</a></li>
    </ul>
  </nav>
  <!-- End Navigation -->

  <!-- Primary View -->
  <div class="fullPage" id="bioPage">
    <!-- TODO: Fill in bio info here: What is your background? Why do you want to go into development? What do you love about development? -->
  </div>
  <div class="fullPage" id="technologiesPage">
    <!-- TODO: Start an UL of all of the tools and technologies you've started learning so far. (You'll beef this page up later). -->
  </div>
  <div class="fullPage" id="projectsPage"></div>
  <!-- End Primary View -->

  <!-- Footer -->
  <footer class="page-footer">
    <!-- TODO: Fill in contact info here: Include things like email, LinkedIn, Twitter and GitHub links. -->
  </footer>
  <!-- End Footer -->
</body>
</html>
```


### Projects Page
1. Create an array called `projects`; this array should hold a bunch of objects that will represent projects you complete throughout this course that you will want to include in your portfolio.
2. Each object in the array should have the following properties:
```js
{
  title: "Cool Project", 
  screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
  description: "This is the best project",
  technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
  available: true,
  url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
}
```
5. Create two functions:
	* writeToDom:  this function should accept a string and print it to a div with an id of my-projects
	* createProjectCards: this function should loop through the projects array and build up the html that you have on your projects page.  It should call the writeToDom function for each project.
6.  The last line of this file should be: ```createProjectCards();```
