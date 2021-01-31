const projects = [
  {
    title: "Design Project", 
    screenshot: "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_612/https://robcolecreative.com/wp-content/uploads/2020/01/design-icon.png", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "Development Project", 
    screenshot: "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_662/https://robcolecreative.com/wp-content/uploads/2020/01/web-icon.png", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  }
]

const currentProjects = [];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}

const filter = (taco) => {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].available === true) {
        currentProjects.push(projects[i]);
    }
  }
}

const createProjectCards = (taco) => {
  let domString = "";
  for (let i = 0; i < taco.length; i++) {
    domString += `<div class="card-body">
      <h3 class="card-text">${taco[i].title}</h3>
      <div class="img-container" style="background-image: url('${taco[i].screenshot}');"></div>
      <p class="card-text">${taco[i].description}</p>
      <p class="card-text">${taco[i].technologiesUsed}</p>
      <p class="card-text">${taco[i].url}</p>
      <p class="card-text">${taco[i].githubUrl}</p>
    </div>
  </div>`;
}
printToDom('#projectsPage', domString);
}

// const filtered = projects.filter(res=>res.available).map(ele=>ele);      
// console.log(filtered);

const init = () => {
  filter();
  createProjectCards(currentProjects);
}

init();
