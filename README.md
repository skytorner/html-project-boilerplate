# html-project-boilerplate
script to generate a html/css/js project using webpack

## what this script does : 

It will generate the following architecture and files :

- /root_folder
  - /src
    - /pages
      - /assets
          - /js
          - /scss
          - /img
  - /public
  - webpack.config.js
  - package.json

The following Node dependancies will also be installed : 

- 'webpack',
- 'webpack-cli',
- 'webpack-dev-server',
- 'babel-loader',
- '@babel/core',
- '@babel/preset-env',
- 'style-loader',
- 'css-loader',
- 'sass-loader',
- 'sass',
- 'html-webpack-plugin',

## how to use ?

- You need to make sure Node.JS is installed
- clone the setup.js script into a folder and navigate to that folder.
- run the command

```
node setup.js
```

- once the architecture and dependancies are created, run the web server like this : 

```
npm start
```

It should output something like this : 

```bash
> boilerplate@1.0.0 start
> webpack serve

<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.1.35:8080/
<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:8080/
<i> [webpack-dev-server] Content not from webpack is served from '/Users/renjytakka/Projects/perso/html-css/boilerplate/public' directory
```

where you can see what is the host 
