
export function getFooter() {
  const footer = document.querySelector("footer") || document.createElement("footer")
  footer.innerHTML = `
  <section id="spacer"></section>
  <div>
  <p>
  © Copyrights Reserved 2026
  Viola Glinko
</p>
<span id="clock"></div>


</span>`
return footer
}