import { getFooter } from "./footer"
import { getHeader } from "./header"
import { getProjects } from "./projects"



export function loadMainPage() {
  const centered = document.createElement("div")
  centered.id = "center"
  centered.innerHTML = `
    <div class="ticks"></div>
    <section id="intro">
    <h2>About Me</h2>
        <div class="text-box">
          <p id="first-content">
            <span id="name-heading">Viola Glinko</span> is Computer Science
            degree graduate residing in Indonesia. Mainly interested
            working in graphic designs and front-end web development.
          </p>
          <br>
          <p id="second-content">
            Passionate about
            front-end development, UI/UX design, and graphic design, with
            a focus on leveraging these skills to contribute to impactful
            projects and support communities. Enjoys collaborating with others,
            tackling complex challenges, and embracing growth through continuous
            learning and creativity. Driven by a strong interest in achieving
            proficiency in the Japanese language and exploring opportunities to
            develop projects related to it.
          </p>
        </div>
  </section>
  <section id="blog">
  <h2>Blogs</h2>
      <div class="text-box">
        <a href="#intro">
        <h3>Intro</h3>
        <p>First time here? Know me more here!</p>
        </a>
      </div>
  </section>

    <section id="projects">
      <h2>Projects</h2>
      <div id="projects-list">


    </div>
  </section>


    <div class="ticks"></div>

  </div>

  </main>

  `
  const app = document.querySelector("#app")
  const main = document.querySelector("main")

  if (main.id == "blogs") {
    console.log("test")

    main.innerHTML = ""
    console.log(main)

    main.appendChild(centered)
    main.id = "home-page"
    main.classList.remove()
    getProjects();
    

    app.insertBefore(main, app.children[1])
  }

  else {
    return centered
  }


}