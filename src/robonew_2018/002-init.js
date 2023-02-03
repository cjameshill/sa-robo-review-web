
if(WebAudioSupport == true) {
	console.log('002 - webplayer not required');
	$("#AudioSupport").css("display", "block");

	document.write('<link rel="shortcut icon" href="TemplateData_2018/favicon.ico">');
	document.write('<link rel="stylesheet" href="TemplateData_2018/style.css">');
	document.write('<script src="TemplateData_2018/UnityProgress.js"><\/script>');
	document.write('<script src="Build/UnityLoader.js"><\/script>');
	document.write('<script>var gameInstance = UnityLoader.instantiate("gameContainer", "Build/WebGL.json", {onProgress: UnityProgress});<\/script>');
		
} else {
	var unityObjectUrl = "http://webplayer.unity3d.com/download_webplayer-3.x/3.0/uo/UnityObject2.js";
			if (document.location.protocol == 'https:')
				unityObjectUrl = unityObjectUrl.replace("http://", "https://ssl-");
			console.log('002 - initalize unity webplayer');
			$("#noAudioSupport").css("display", "block");
			document.write('<script type="text\/javascript" src="' + unityObjectUrl + '"><\/script>');

}