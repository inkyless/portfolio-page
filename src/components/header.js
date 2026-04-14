
export function getHeader() {
  const header = document.querySelector("header") || document.createElement("header")
  header.innerHTML = `
  <a href="#">
  <h1>Viola Glinko</h1>
  </a>
  <nav>
    <div id="navigate">

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

  `
  return header
}