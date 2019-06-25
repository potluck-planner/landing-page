class TabLink{
    constructor(tab) {
        this.tab = tab;
        this.data = tab.dataset.tab;
        this.contentElement = document.querySelector(`.feature-content[data-tab='${this.data}']`);
        this.tabContent = new this.tabContent(this.contentElement);
        tab.addEventListener('click', () => this.select())
    };
    select(){
        const tabs = document.querySelectorAll('.')
    }
}

let topTabs = document.querySelectorAll('.feature-tab')

topTabs.forEach(tab) => {
    new TabLink(tab)
};