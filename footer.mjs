class SMonoFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <a name="contact"></a>
      <div id="footer">
        <a href="#top"><img id="btn_pagetop" src="img/pagetop.svg"></a>
        <a href="./"><img id="footer_logo" src="img/logo_w.svg"></a>
        <div id="footer_sporsor"><a href="https://github.com/code4sabae/sabae-monohaku.jp/issues">主催：さばえものづくり博覧会 実行委員会</a></div>
        <a id="footer_fb" href=https://www.facebook.com/sabaemonohaku><img src="img/fb_icon_w.svg"></a>
        <div><a href="https://github.com/code4sabae/sabae-monohaku.jp/">CC BY sabae monohaku (src on GitHub)</a></div>
      </div>
    `;
  }
}
customElements.define("smono-footer", SMonoFooter);
export default { SMonoFooter };
