.PHONY: www

clean:
	rm -rf www/*
	touch www/.gitkeep

install:
	npm install
	bower install

www:
	@browserify src/js/app.js -o www/bundle.js
	@node_modules/.bin/gulp build
	#sass src/css/app.scss www/css/app.css
	@cordova prepare

android: www
	cordova build android

ios: www
	cordova build ios

test: www
	protractor test/protractor.conf.js
