class Controller {
  constructor() {
    // var
    this.menuBtn = document.querySelector(".js-menubtn");
    this.drawer = document.querySelector(".js-drawer");
    this.drawerWidth = this.drawer.clientWidth;
    this.duration = 0.5; //イージングの時間
    this.lastWidth = window.innerWidth; // 当初のウィンドウサイズ
    this.bp = 750; // ブレイクポイント

    // flag
    this.isOpen = false;

    // excute method
    this.setup();
    this.setevents();
  }

  setup() {
    TweenMax.set(this.drawer, {
      x: this.drawerWidth, // transform = translateX(this.drawerWidth)のことです！
    });

    // ブレイクポイント通過した時、drawerの位置セットし直す
    window.addEventListener("resize", () => {
      const curretWidth = window.innerWidth;
      this.drawerWidth = this.drawer.clientWidth;

      if (this.lastWidth <= this.bp && this.bp < this.curretWidth) {
        // pc
        TweenMax.set(this.drawer, {
          x: this.drawerWidth,
        });
      } else if (this.currentWidth <= this.bp && this.bp < this.lastWidth) {
        // sp
				TweenMax.set(this.drawer, {
          x: this.drawerWidth,
        });
      }
    });

  }

  show() {
    TweenMax.to(this.drawer, this.duration, {
      x: 0, // transform = translateX(0)のことです！
    });
  }

  hide() {
    TweenMax.to(this.drawer, this.duration, {
      x: this.drawerWidth,
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

      console.log(this.drawerWidth);
    });
  }
}

new Controller();
