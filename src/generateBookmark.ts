import * as fs from "fs";
import * as path from "path";
import { rollup } from "rollup";
// @ts-ignore
import * as rollupBabel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
// @ts-ignore
import * as rollupTypeScript from "rollup-plugin-typescript";

export const generateBookmark = async (inputFilePath = "", outputFolderPath = path.resolve(process.cwd(),
  "./bookmarks")) => {
  const bundle = await rollup({
    input: inputFilePath,
    plugins: [
      rollupTypeScript({
        target: "es5",
        module: "es6",
      }),
      rollupBabel({
        exclude: "node_modules/**",
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      terser({ compress: true, mangle: true, output: { comments: false } }),
    ],
  })
  const { output } = await bundle.generate({ format: "es" })
  const fileStr = output[0].code;

  if (!fs.existsSync(outputFolderPath)) {
    fs.mkdirSync(outputFolderPath)
  }
  console.log(fileStr,'filestring')

  fs.writeFileSync(`${outputFolderPath}/index.js`, `javascript:(function(){${fileStr}})()`)
}
