
class BioTab {
    constructor(tab) {
      this.tab = tab;
      this.data = tab.dataset.tab 
      this.itemElement = document.querySelector(`.bios-content[data-tab="${this.data}"]`);
      this.bioContent = new BioContent(this.itemElement);
      tab.addEventListener('click', () => this.select())
  
    };
  
    select() {
  
      const tabs = document.querySelectorAll('.bios-tab');
      Array.from(tabs).forEach(item => item.classList.remove('bios-tab-selected'));
      this.tab.classList.add('bios-tab-selected');
      this.bioContent.select();
    }
  }
  
  class BioContent {
    constructor(element) {
       this.element = element;
    }
  
    select() {
      const contents = document.querySelectorAll('.bios-content');
      Array.from(contents).forEach(item => item.classList.remove('bios-content-selected'));
      this.element.classList.add('bios-content-selected');
      
    }
  }

  
  let tabs = document.querySelectorAll('.bios-tab')
  
  tabs.forEach((tab) => {
     new BioTab(tab) 
    
    });
   
  
  