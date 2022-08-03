const loadingScreen = document.querySelector(".loadingscreen");
const projectList = document.querySelector(".projectlist");

class Project {
  constructor(ttl, img, repo, desc, depl) {
    this.title = ttl;
    this.image = img;
    this.repository = repo;
    this.descritpion = desc;
    this.deployment = depl
    this.displayStatus = "none";
  }
}

Project.prototype.smallbox = function(){
  return `<div class="single-project">
  <h4 class="header"></h4>
  <div class="component img-cont">
    <img src="${this.image}">
    <button class="showdetails">Show Details</button>
  </div>
</div>`
}

Project.prototype.bigbox = function(){
  return `<div class="showDetails" style="display: ${this.displayStatus}">
          <div class="component">
            <div class="fsheader">${this.title}</div>
            <div class=fsimage>${this.image}</div>
            <div class="fsdepl">${this.deployment}</div>
          </div>
          <div class="component">
            <div class="fsdesc">${this.description}</div>
            <div class="fsrepo">${this.repository}</div>
          </div>
          <button class="hidedetails">Exit</button>
  </div>`
}

Project.prototype.bothBoxes = function(){
  return this.smallbox() + this.bigbox();
}

const listItems = [];
const showList = async () => {
    loadingScreen.style.visibility = 'visible'
    try {
      const {
        data: { projects },
      } = await axios.get('/api/v1/projects')
      if (projects.length < 1) {
        projectList.innerHTML = '<h5 class="empty-list">No projects in your list</h5>'
        loadingScreen.style.visibility = 'hidden'
        return
      }
      projects
        .map((project) => {
          const { title, image, repository, description, deployment } = project;
          const newProject = new Project(title, image, repository, description, deployment)
          listItems.push(newProject.bothBoxes());
        })
      projectList.innerHTML = listItems;
    } catch (error) {
      projectList.innerHTML =
        '<h5 class="empty-list">There was an error, please try later....</h5>'
    }
    loadingScreen.style.visibility = 'hidden'
    
}
        

showList()  


