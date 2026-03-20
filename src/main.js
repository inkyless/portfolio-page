import './style.css'

document.querySelector('#app').innerHTML = `
  <header id="fixed-header">
    <h1>Viola Glinko</h1>
    <nav>
      <div id="navigate">
        <ul>
          <li><a href="#intro">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blogs">Blogs</a></li>
        </ul>
      </div>

      <div id="social">
        <ul>
        <a href="https://github.com/inkyless" target="_blank">
          <li>
              <i class="fa-brands fa-github fa-lg" ></i>
          </li>
          </a>
          
          <a href="https://www.linkedin.com/in/violaglinko/" target="_blank">
          <li>
            <i class="fa-brands fa-linkedin fa-lg"></i>
          </li>
          </a>

        </ul>
      </div>

    </nav>
  </header>

  <main id="home-page">
  <div id="center">

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
      </div>
</section>

    <section id="projects">
      <h2>Projects</h2>
      <div id="projects-list">
        <div class="slides fade">
          <img src="src/assets/calculator-thumnail.png" style="width: 100%" />
          <div class="text">Calculator</div>
        </div>

        <div class="slides fade">
          <img src="src/assets/dashboard-thumnail.png" style="width: 100%" />
          <div class="text">Admin Dashboard</div>
        </div>

        <div class="slides fade">
          <img src="src/assets/landing-page-thumnail.png" style="width: 100%" />
          <div class="text">Landing Page</div>
        </div>

    </div>
   </section>

    
    <div class="ticks"></div>

  </div>
  <section id="spacer"></section>

  </main>
  <div class="ticks"></div>

<footer>
<p>
  © Copyrights Reserved 2026
  Viola Glinko
</p>
</footer>

`
