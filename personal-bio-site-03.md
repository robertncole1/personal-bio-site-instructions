# Personal Bio Site 3: Making your Personal Bio Site Data-Driven

## Prerequisite

> :warning: This exercise requires you to have completed the [Part 2: Making your Personal Bio Site a Single Page Application](./personal-bio-site-02.md) exercise

## Requirements

### Deploy 3 Projects
Look back at the projects you have completed (HW, group projects, or in class assignments) and pick three that you think turned out well.  Use firebase or Netlify to deploy all three of these projects.  You will find instructions for deploying projects with webpack and projects that were written before webpack [HERE](https://github.com/nss-nightclass-projects/Night-Class-Resources/blob/master/book-3-data-driven-applications/chapters/firebase-deploy.md)

### Add in Projects to your site
- Create a projects.json file and put your project objects in this file (this just means remove the projects array from projectsData.js and turn it into a json file)
- Import this data into a new firebase project
- Use an axios.get to get that data from firebase.  Then use this data to populate the projects section of your site. (this just means make an axios call in your get function instead of returning the projects array)
- this project has NO authentication - you don't need to do any of that authentication stuff

### Deploy your personal site
- Deploy your personal site to firebase or Netlify
- Add the link to your personal site to your card in CodeTracker (your site doesn't need to be done to send the link - we are just keeping track of the links for now.)
