class Tab{
constructor(link){
this.link = link;

}
}




let featLinks = document.querySelectorAll(".feature-tab")

featLinks.forEach((link) => {
    new Tab(link)
});