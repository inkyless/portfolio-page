
export function getProjects() {
  const projectList = [
    {
      title: "Calculator", linkPreview: "https://inkyless.github.io/calculator-project/",
      githubLink: "https://github.com/inkyless/calculator-project", thumbnail: "src/assets/calculator-thumnail.png"
    },
    {
      title: "Admin Dashboard", linkPreview: "https://inkyless.github.io/admin-dashboard/",
      githubLink: "https://github.com/inkyless/admin-dashboard", thumbnail: "src/assets/dashboard-thumnail.png"
    },
    {
      title: "Landing Page", linkPreview: "https://inkyless.github.io/basic-landing-page/",
      githubLink: "https://github.com/inkyless/basic-landing-page", thumbnail: "src/assets/landing-page-thumnail.png"
    },
  ]

  const projectsSection = document.querySelector("#projects-list")
  projectList.map((item) => {
    const projectItem = document.createElement("div")
    projectItem.classList.add("project-item")
    projectItem.innerHTML = `
    <img src="${item.thumbnail}" style="width: 100%" />
    <div class="project-card">
    <span class="text">${item.title}</span>
    <div class="button-list">
      <a id="preview-link" target="_blank" href="${item.linkPreview}" noopener noreferrer>
        <i class="fa-solid fa-globe"></i>
      </a>
      <a id="github-link" target="_blank" href="${item.githubLink}" noopener noreferrer>
        <i class="fa-solid fa-code-branch"></i>
      </a>
    </div>
    </div>
    `
    projectsSection.appendChild(projectItem)
  })

}

