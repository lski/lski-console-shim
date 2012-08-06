/**
* Simply ensures the console dose not error in IE whilst debugging, but gives support for some of the methods when the console is available
* important you should still remove all console calls in debug code
*/

(function(win) {
	
	var timers = {};
	
	if(win.console === undefined) {
		win.console = {
			log: function() {},
			error: function() {},
			warn: function() {},
			info: function() {}
		};
	}

	/**
	* Newer API aspects
	*/
	
	if(!win.console.time) {
	
		win.console.time = function(name) {
			timers[name] = new Date();
		};
	
		win.console.timeEnd = function(name) {

			var start = timers[name],
				end = new Date();
			
			// If undefined then the start wasnt set;
			if(start === undefined) {
				return;
			}
			// Delete the start value, and clear it out
			delete timers[name];
			
			win.console.log(+end - +start);
		};
	}
	
	if(!win.console.count) {
		win.console.count = function() {};
	}
	
	if(!win.console.debug) {
		win.console.debug = function() {};
	}
	
	if(!win.console.profile) {
		win.console.profile = function() {};
	}
	
	if(!win.console.profileEnd) {
		win.console.profileEnd = function() {};
	}
	
	if(!win.console.trace) {
		win.console.trace = function() {};
	}
	
	if(!win.console.dir) {
		win.console.dir = function() {};
	}
    
	if(!win.console.dirxml) {
		win.console.dirxml = function() {};
	}
	
	if(!win.console.assert) {
		win.console.assert = function() {};
	}

	if(!win.console.group) {
		win.console.group = function() {};
	}
	
	if(!win.console.groupEnd) {
		win.console.groupEnd = function() {};
	}
})(window);