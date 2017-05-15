# Summary

Animated yin yang symbol ([Taijitu](https://en.wikipedia.org/wiki/Taijitu)) with trigrams 
(see [Bagua](https://en.wikipedia.org/wiki/Bagua)) in pure CSS (js code that you will find in
this repo used only for slider on demo site). Live demo at 
[yin-yang.gennady.pp.ua](https://yin-yang.gennady.pp.ua/).

Works in modern browsers:
* Chrome
* Firefox
* Safari
* Microsoft Edge

This animation works best in Chrome/Firefox/Safari. In MS Edge it's shaky.

You can customize glow color by changing `$glowColor` argument of a `taijitu` mixin and 
rebuilding project (instructions below).

# Develop & Build

I use gulp to build this demo and npm to manage dependencies. If you want to modify this demo,
you will need to:

* Install recent node and npm
* Install gulp: ``npm install --global gulp-cli``
* Run ``npm install`` from project's directory to install dependencies
* Run ``gulp`` to build site and start local web-server or ``gulp compile`` just to build

# License
[MIT](https://opensource.org/licenses/MIT)