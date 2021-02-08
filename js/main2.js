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
    // this.setup();
    this.setevents();
  }

  setup() {
    TweenMax.set(this.drawer, {
      x: "100%",
    });
  }

  show() {
    TweenMax.to(this.drawer, this.duration, {
      x: "0%",
    });
  }

  hide() {
    TweenMax.to(this.drawer, this.duration, {
      x: "100%",
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

      console.log(this.isOpen)
    });
  }
}

new Controller();
