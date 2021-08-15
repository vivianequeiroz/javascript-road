class SmoothScroll {
  constructor(links, menu) {
    this.linkElements = document.querySelectorAll(links);
    this.menuElement = document.querySelector(menu);

    // Bind linka o this relacionado a classe SmoothScroll,
    // permanentemente ao handleClick
    this.handleClick = this.handleClick.bind(this);
    this.addScrollEvent();
  }
  handleClick(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    console.log(href)
    const section = document.querySelector(href);
    window.scrollTo({
      top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2,
      behavior: "smooth"
    });
  }
  addScrollEvent() {
    this.linkElements.forEach(link =>
      link.addEventListener("click", this.handleClick)
    );
  }
}

class ActiveSmoothScroll extends SmoothScroll {
  constructor(links, menu, sections) {
    super(links, menu);
    this.sectionElements = document.querySelectorAll(sections);
    //bind to access the methods from ActiveSmoothScroll obj, 
    // it makes possible to use a callback function and inside it reference with this the objects form the mother obj
    // on the contrary, a new context for this will be created
    this.handleScroll = this.handleScroll.bind(this);
    this.handleScroll();
    this.activeNavScroll();
  }
  handleScroll() {
    this.sectionElements.forEach((section, i) => {
      if (window.pageYOffset > section.offsetTop - window.innerHeight * 0.5) {
        this.linkElements[i].classList.add("active");
      } else {
        this.linkElements[i].classList.remove("active");
      }
    });
  }
  activeNavScroll() {
    window.addEventListener("scroll", this.handleScroll);
  }
}

new ActiveSmoothScroll("a[href^='#']", ".menu", "section");
