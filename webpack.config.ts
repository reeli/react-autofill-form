import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';

const webpackConfig = {
  context: path.resolve(__dirname, './'),
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name]-[hash].js',
  },
  module: {
    rules: [
      {
        test: /(\.ts|\.tsx)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              compilerOptions: {
                'module': 'es6',
                'target': 'es5',
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Auto Fill Form',
      template: './index.html',
    }),
  ],
  resolve: {
    modules: [__dirname, "node_modules"],
    extensions: [".tsx", ".ts", ".mjs", ".jsx", ".js", ".json"],
  },
  devServer: {
    compress: true,
    port: 5000,
  },
};

export default webpackConfig;
