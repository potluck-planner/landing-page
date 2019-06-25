class Tab{
constructor(link){
this.link = link;
this.data = link.dataset.tab;
this.contentElement = document.querySelector(`.feature-content[data-tab="${this.data}]`);
this.
}
}




let featLinks = document.querySelectorAll(".feature-tab")

featLinks.forEach((link) => {
    new Tab(link)
});