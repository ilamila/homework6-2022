var video = document.querySelector("#player1");


window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value);
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = this.value + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.95;
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= 0.95;
	console.log(video.playbackRate)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");

	if(video.muted){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	video.vintage()
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
if (video.currentTime < (video.duration -15)){
	console.log("original time" + video.currentTime);
	video.currentTime += 15;
	console.log("new time" + video.currentTime);

}
else{
	video.currentTime = 0;
	video.play();
	console.log("new time" + video.current.Time);
}
});

document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector("video").classList.add("oldSchool");
	console.log(video.classList);
});

document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector("video").classList.remove("oldSchool");
	console.log(videp.classList);
});

