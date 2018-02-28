interface IInputElementPreset {
  selector: string;
  value: any;
  event?: string;
}

export class AutoFill {
  config: any;

  constructor(config: any) {
    this.config = config;
  }

  start() {
    if (this.matchPath()) {
      this.config[this.pathname].forEach((input: IInputElementPreset) => {
        this.fill(input);
      })
    }
  }

  get pathname() {
    return (window.location || {}).pathname;
  }

  matchPath() {
    return this.config[this.pathname];
  }

  setNativeInputValue(ele: any, value: any) {
    const nativeInputValueSetter = (Object as any)
      .getOwnPropertyDescriptor((window as any).HTMLInputElement.prototype, 'value')
      .set;
    nativeInputValueSetter.call(ele, value);
  }

  createEventAndSetValue(ele: HTMLInputElement, value: any, event: string = 'input') {
    if (event === 'input') {
      /* For React 16, because React onChange event is synthetical，
      and use descriptor to intercept value, so we need to set native input value here.
      */
      this.setNativeInputValue(ele, value);
      return new Event('input', { bubbles: true });
    }
    ele.value = value;
    return new Event(event, { bubbles: true });
  }

  fill({ selector, value, event }: IInputElementPreset) {
    const ele = document.querySelector(selector) as HTMLInputElement;
    if (ele) {
      const eve = this.createEventAndSetValue(ele, value, event);
      ele.dispatchEvent(eve);
    }
  }
}