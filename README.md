Console.Js
==========

Two simple javascript files for preventing console errors whilst testing in IE without the console window open.

console-basic.js: 
-----------------
Simply creates a new dummy object that has empty functions if console isnt found.

console.js: 
-----------
Does a simple check to see if the console object exists, and creates an empty one if not, however to handle older webkit browsers as well the newer functions such as time and timeEnd are each checked to see if they exist after a basic set of functions have been added. I have also tried to implement the time and timeEnd functions so they are useable in the older browsers and in IE as well.

Important: I have not added minified versions of either file as calls to the console should only be made in test code and not deployed, therefore there would be no need to minify them.