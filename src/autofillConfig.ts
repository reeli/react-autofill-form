import { AutoFillConfig } from "./autofill";

export const autoFillConfig:AutoFillConfig = {
  '/': [
    {
      selector: 'input[name=username]',
      value: 'some text',
      event: 'input',
    },
    {
      selector: 'input[name=password]',
      value: '12345678',
      event: 'input',
    },
    {
      selector: 'select[name=birthday]',
      value: '1992',
      event: 'change',
    },
    {
      selector: "button[data-testid=basic-button]",
      value: "",
      event: "click",
      children: [{
        selector: "button[data-testid=basic-button-1]",
        value: "",
        event: "click",
      },{
        selector: "button[data-testid=basic-button-2]",
        value: "",
        event: "click",
      }],
    }
  ],
};
