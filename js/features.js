
class FeatureTab {
    constructor(tab) {
      this.tab = tab;
      this.data = tab.dataset.tab 
      this.itemElement = document.querySelector(`.features-content[data-tab="${this.data}"]`);
      this.featureContent = new FeatureContent(this.itemElement);
      tab.addEventListener('click', () => this.select())
  
    };
  
    select() {
  
      const tabs = document.querySelectorAll('.features-tab');
      Array.from(tabs).forEach(item => item.classList.remove('features-tab-selected'));
      this.tab.classList.add('features-tab-selected');
      this.featureContent.select();
    }
  }
  
  class FeatureContent {
    constructor(element) {
       this.element = element;
    }
  
    select() {
      const contents = document.querySelectorAll('.features-content');
      Array.from(contents).forEach(item => item.classList.remove('features-content-selected'));
      this.element.classList.add('features-content-selected');
      
    }
  }

  
  let tabs = document.querySelectorAll('.features-tab')
  
  tabs.forEach((tab) => {
     new FeatureTab(tab) 
    
    });
   
  
  