class Tab{
constructor(link){
this.link = link;
this.data = link.dataset.tab;
this.contentElement = document.querySelector(`.feature-content[data-tab="${this.data}]`);
this.tabContent = new this.TabContent(this.contentElement);
link.addEventListener('click',() => this.select())
};

select(){
    const tabs = document.querySelectorAll('.feature-tab');
    Array.from(tabs).forEach(item => item.classList.remove('feature-tab-selected'));
    this.tab.classList.add('feature-tabselected');
    this.TabContent.select();
}
}

class TabContent{
    constructor(element){
    this.element = element;
    }
select(){
    const items = document.querySelectorAll('.feature-content');
    Array.from(items).forEach(item => item.classList.remove('feature-content-selected'))
}


}



let featLinks = document.querySelectorAll(".feature-tab")

featLinks.forEach((link) => {
    new Tab(link)
});