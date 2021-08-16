import { AutoFill } from "./autofill";
import { autoFillConfig } from "./autofillConfig";

export const runAutoFill = () => {
  const fill = new AutoFill(autoFillConfig);
  fill.start();
}

runAutoFill();
