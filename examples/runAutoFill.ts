import {
  AutoFill,
  AutoFillConfig,
} from "../src";
import { autoFillConfig } from "./autofillConfig";

export const runAutoFill = (config:AutoFillConfig) => {
  const fill = new AutoFill(config);
  fill.start();
}

runAutoFill(autoFillConfig)
