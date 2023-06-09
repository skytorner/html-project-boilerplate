const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const createDirectory = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
};

const createDirectories = () => {
  const directories = [
    'src',
    'src/pages',
    'src/assets/js',
    'src/assets/scss',
    'src/assets/img',
    'public',
  ];

  directories.forEach((directory) => {
    createDirectory(directory);
  });
};

const createIndexFile = () => {
  const indexPath = path.resolve(__dirname, 'src/assets/js/index.js');
  const indexContent = `import { sayHello } from './test';

sayHello();`;

  fs.writeFileSync(indexPath, indexContent);
  console.log(`Created file: ${indexPath}`);
};

const createTestFile = () => {
  const testPath = path.resolve(__dirname, 'src/assets/js/test.js');
  const testContent = `export const sayHello = () => {
  alert('Hello, world!');
};`;

  fs.writeFileSync(testPath, testContent);
  console.log(`Created file: ${testPath}`);
};

const createIndexHTMLFile = () => {
  const indexHTMLPath = path.resolve(__dirname, 'index.html');
  const indexHTMLContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Webpack App</title>
  <link rel="stylesheet" href="./public/bundle.css">
</head>
<body>
  <script src="./public/bundle.js"></script>
</body>
</html>
`;

  fs.writeFileSync(indexHTMLPath, indexHTMLContent);
  console.log(`Created file: ${indexHTMLPath}`);
};

const initializeNpm = () => {
  execSync('npm init -y');
  console.log('Initialized npm');
};

const installDependencies = () => {
  const dependencies = [
    'webpack',
    'webpack-cli',
    'webpack-dev-server',
    'babel-loader',
    '@babel/core',
    '@babel/preset-env',
    'style-loader',
    'css-loader',
    'sass-loader',
    'sass',
    'html-webpack-plugin',
  ];

  execSync(`npm install ${dependencies.join(' ')} --save-dev`);
  console.log('Installed dependencies');
};

const createWebpackConfig = () => {
  const webpackConfigPath = path.resolve(__dirname, 'webpack.config.js');
  const webpackConfigContent = `
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/assets/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};
`;

  fs.writeFileSync(webpackConfigPath, webpackConfigContent);
  console.log(`Created file: ${webpackConfigPath}`);
};

const updatePackageJson = () => {
	const packageJsonPath = path.resolve(__dirname, 'package.json');
	const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
	packageJson.scripts = {
	  ...packageJson.scripts,
	  start: 'webpack serve',
	};
	fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
	console.log('Updated package.json');
  };

const runScript = async () => {
  try {
    createDirectories();
    createIndexFile();
    createTestFile();
    initializeNpm();
    installDependencies();
    createWebpackConfig();
    createIndexHTMLFile();
    updatePackageJson();

    console.log('Setup completed successfully!');
  } catch (error) {
    console.error('Error occurred during setup:', error);
  }
};

runScript();
