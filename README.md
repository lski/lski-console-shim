Lski Console Shim
==========

A simple javascript file for preventing console errors whilst testing in IE without the console window open.

### Install

#### Bower

```
bower install lski-console-shim
```

#### Manual

Download the lski-console-shim.js file in the dist folder and reference it on your page

```
<script type='text/javascript' src='lski-console-shim.js'></script>
```

### Notes

It creates a dummy console with an empty function to cover the functions on the standard console object.

It does feature testing, rather than browser sniffing to identify if the console doesnt exist. Therefore it will work for any browser without a console object not just IE.

### Build

The dist build is created via gulp.  From the command line run the following
```
npm install
```
To install the gulp dependancies, followed by:
```
gulp
```
To generate the dist/lski-console-shim.js file
