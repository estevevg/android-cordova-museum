# Small framework to create quick android apps with cordova

### Introduction
Small museum app that shows how to create and articulate an android app by cordova

### Tech dependencies

  - Ubuntu desktop
  - Nodejs
  - Android sdk

### Installation
Download the project from the repository and perform the following commands:

Download the project:
```sh
sudo npm install -g cordova
sudo npm install -g browserify
```

### Add cordova platforms
```sh
cordova platform add browser
cordova platform add android
```

### Build

 - Web view

```sh
make install
make www
```
  - android apk
```sh
make install
make android
```
