var page = require('webpage').create();
var url = 'http://apnakhata.raj.nic.in/tehsil.aspx';
console.log('Hello, world!');
page.open(url, function(status) {
console.log(status);
console.log(page.frameUrl); //check url before click
var a = page.evaluate(function() {
	return document.querySelectorAll('[href="javascript:__doPostBack(\'ctl00$ContentPlaceHolder1$ImageMap2\',\'1\')"]');
});
console.log(a);
// a[0].click(function(r){console.log(r)});
phantom.exit();
});
