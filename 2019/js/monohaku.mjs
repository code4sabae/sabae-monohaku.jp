class NavMonohaku extends HTMLElement {
  constructor () {
    super();
    const cls = this.getAttribute("class") || "flexCover navigation fAbc";
    this.innerHTML = `
        <nav>
        <ul class="${cls}">
                <li><a href="about.html">ABOUT</a></li>
                <li><a href="exhibitor.html">EXHIBITOR</a></li>
                <li><a href="access.html">ACCESS</a></li>
                <li><a href="floor.html">FLOOR</a></li>
                <li><a href="news.html">NEWS</a></li>
                <li><a href="contact.html">CONTACT</a></li>
                <li><a href="https://www.facebook.com/sabaemonohaku/" target="_blank"><img src="images/fb_icon.svg" alt="さばえものづくり博覧会Facebook"/></a></li>
            </ul>
        </nav>
    `;
  }
}
customElements.define("nav-monohaku", NavMonohaku);
