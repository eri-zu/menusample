class Controller {
  constructor() {
    // var
    this.menuBtn = document.querySelector(".js-menubtn");
    this.drawer = document.querySelector(".js-drawer");
    this.drawerWidth = this.drawer.clientWidth;
    this.duration = 0.5; //イージングの時間

    // flag
    this.isOpen = false;

    // excute method
    this.setup();
    this.setevents();
  }

  setup() {
    this.watchDrawerWidth();

    TweenMax.set(this.drawer, {
      x: this.drawerWidth,
    });

    window.addEventListener("resize", () => {
      TweenMax.set(this.drawer, {
        x: this.drawerWidth,
      });
    });
  }

  show() {
    TweenMax.to(this.drawer, this.duration, {
      x: 0,
    });
  }

  hide() {
    this.watchDrawerWidth();

    TweenMax.to(this.drawer, this.duration, {
      x: this.drawerWidth,
    });
  }

  watchDrawerWidth() {
    window.addEventListener("resize", () => {
      this.drawerWidth = this.drawer.clientWidth;
    });
  }

  setevents() {
    this.menuBtn.addEventListener("click", () => {
      if (this.isOpen) {
        this.hide();
        this.isOpen = false;
      } else {
        this.show();
        this.isOpen = true;
      }
    });
  }
}

new Controller();
