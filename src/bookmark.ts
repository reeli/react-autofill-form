import * as fs from "fs";
import * as path from "path";

export const generateBookmark = ()=>{
  const fileStr = fs.readFileSync(path.resolve(process.cwd(), "./dist/lib/runAutoFill.js"), "utf-8");
  const outputFile = path.resolve(process.cwd(), `./dist/bookmark.js`);

  fs.writeFileSync(outputFile, `javascript:(function(){${fileStr}})()`)
}

generateBookmark();
