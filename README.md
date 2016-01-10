Lski Console Shim
==========

A ponyfill to prevent errors caused by using the console in IE when the developer tools are not open.

It checks if the window object and console object exists and if the  does it by creating an empty no-op function that simply does nothing when called.

## Install

```js
// npm
npm install lski-console-shim

//bower
bower install lski-console-shim

//manually download the file and reference it via the script tag
<script type='text/javascript' src='lski-console-shim.js'></script>
```

## Build

The distribution build is created via gulp using node.  Run the following from the command line to install the node dependancies and run the gulp build step. __Note:__ Node needs to be installed on your system.
```
npm install
gulp
```