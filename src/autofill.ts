interface IInputElementPreset {
  selector: string;
  event: "input" | "change" | "click";
  value?: string|number;
  children?: IInputElementPreset[];
  delay?: number;
}

export type AutoFillConfig = {
  [path: string]: IInputElementPreset[]
}

export class AutoFill {
  config: AutoFillConfig;

  constructor(config: AutoFillConfig) {
    this.config = config;
  }

  start() {
    if (this.matchPath()) {
      this.config[this.pathname].forEach((input: IInputElementPreset) => {
        if (input.children) {
          const delay = input.delay || 500;
          this.fill(input);

          setTimeout(() => {
            input.children!.forEach(async(item,idx)=>{
              await new Promise((resolve)=>{
                setTimeout(()=>{
                  this.fill(item);
                  resolve(item);
                },delay*(idx+1))
              })
            })

          }, delay);

        } else {
          this.fill(input);
        }
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
      .getOwnPropertyDescriptor((window as any).HTMLInputElement.prototype, "value")
      .set;
    nativeInputValueSetter.call(ele, value);
  }

  createEventAndSetValue(ele: HTMLInputElement, value: any, event: string = "input") {
    if (event === "input") {
      /* For React 16, because React onChange event is synthetical，
      and use descriptor to intercept value, so we need to set native input value here.
      */
      this.setNativeInputValue(ele, value);
      return new Event("input", { bubbles: true });
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
