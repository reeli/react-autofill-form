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
  ],
};
