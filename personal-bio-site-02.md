# Personal Bio Site 2: Making your Personal Bio Site a Single Page Application

## Prerequisite

> :warning: This exercise requires you to have completed the [Part 1: HTML & CSS || Using JS to print projects to the page](personal-bio-site-01.md) exercise

## Requirements

### Understanding What A Single Page Application Is
> A single-page application (SPA) is a web application or web site that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server. This approach avoids interruption of the user experience between successive pages, making the application behave more like a desktop application. In an SPA, either all necessary code – HTML, JavaScript, and CSS – is retrieved with a single page load, or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions. The page does not reload at any point in the process, nor does control transfer to another page, although the location hash or the HTML5 History API can be used to provide the perception and navigability of separate logical pages in the application. Interaction with the single page application often involves dynamic communication with the web server behind the scenes.
For our purposes with this application, we are going to make it so that the navigation bar actually controls which content is showing based on which navigation link the user clicks on.

### Use Git/Github branching
1. Branch by feature
1. Commit by significant change - or before you accidentally (on purpose) spill moonshine on your computer.

### Make the Navigation Bar Function on Click Events
1. You should have a navigation bar that looks something like this: 
```html
<nav>
  <!-- TODO: Insert some sort of H1-H6 with your name here -->
  <ul id="navLinks">
    <li><a id="navToBio">Bio</a></li>
    <li><a id="navToTechnologies">Technologies</a></li>
    <li><a id="navToProjects">Projects</a></li>
  </ul>
</nav>
```
2. Add event listener(s) so that when the user clicks on the navigation links, it triggers an event. Hint: you might need to use [prevent default](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) to override the browser's default behavior for `<a>` tags.
3. Make each event show the appropriate content for that link and hide all other content (or at least content that should be displayed when you click on the other links). The following is the content you will want to hide or show depending on which link is clicked.
```html
<!-- Primary View -->
<div class="fullPage" id="bioPage">
  <!-- TODO: Fill in bio info here: What is your background? Why do you want to go into development? What do you love about development? -->
</div>
<div class="fullPage" id="technologiesPage">
  <!-- TODO: Start an UL of all of the tools and technologies you've started learning so far. (You'll beef this page up later). -->
</div>
<div class="fullPage" id="projectsPage"></div>
<!-- End Primary View -->
```
4. Decide which page you want to show on page load (your "home page") and have this content shown by default when the user arrives on the page.

## Bonus:

### Make your Event Listener Dynamic
Challenge yourself to only include the method `addEventListener` once in your JS file. Make the callback function dynamic so that based on the button clicked, the correct content shows. 
