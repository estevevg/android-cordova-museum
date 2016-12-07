# Questionari generic per Cordova


### Tech dependencies
Instalar previament:
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

### Install APK

```sh
python main-test.py
```
