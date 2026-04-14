import { marked } from 'marked'
import { getHeader } from './components/header'
import { getFooter } from './components/footer'
import './blogpost.css'

export async function loadPost(postName) {
  const res = await fetch(`src/blogs/${postName}.md`)
  const text = await res.text()
  const contentHTML = marked(text)

  const app = document.querySelector("#app")
  const main = document.querySelector("main")

  app.innerHTML = ""

  const header = getHeader()
  main.innerHTML = contentHTML
  main.id = "blogs"
  main.classList.add(`${postName}`)
  const footer = getFooter();

  app.appendChild(header)
  app.appendChild(main)
  app.appendChild(footer)
}