var context;
var WebAudioSupport = false;

try {
	// Fix up for prefixing
	window.AudioContext = window.AudioContext||window.webkitAudioContext;
	context = new AudioContext();
	WebAudioSupport =  true;

}
	catch(e) {	
}

console.log("001 - audio support initialized");

if(WebAudioSupport == true) {
	
	console.log("001 - memory initialized");
} else {
	console.log("001 - body initialized");
}