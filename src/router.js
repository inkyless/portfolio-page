import { loadMainPage } from "./components/mainpage"
import { loadPost } from "./loadPost"

export function initRouter() {
  function router() {
    const hash = location.hash.replace("#", "")

    if (!hash) {
      loadMainPage()
      return
    }

    loadPost(hash)
  }


  window.addEventListener("hashchange", router)
  window.addEventListener("load", router)
  }



