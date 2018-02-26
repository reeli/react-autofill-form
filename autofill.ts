export class AutoFill {
  config: any;

  constructor(config: any) {
    this.config = config;
  }

  start() {
    if (this.matchPath()) {
      this.config[this.pathname].forEach((item: any) => {
        this.fill(item.selector, item.value);
      })
    }
  }

  get pathname() {
    return (window.location || {}).pathname;
  }

  matchPath() {
    return this.config[this.pathname];
  }

  fill(selector: any, value: any) {
    const ele = document.querySelector(selector);
    if (ele) {
      ele.value = value;
      ele.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }
}