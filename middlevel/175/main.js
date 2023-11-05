let audioElem=document.querySelector("audio")
let timeElem=document.querySelector("#time")


// play
function  playHandler(){
    audioElem.play();
    console.log("played")


    setInterval(function(){
        timeElem.innerHTML=Math.floor(audioElem.currentTime)
    }, 1000)
}
// paouse
function paousHandler(){
    audioElem.pause()
    console.log("paose شد")

}

function durationHandler(){
    console.log("duration:" , audioElem.duration)
}

function playbackRateHandler(){
    audioElem.playbackRate=2;
    console.log("music speed id 2x")
}

function currentTimeHandler(){
    console.log("current time: " ,Math.floor(audioElem.currentTime))
}

//  audio & video
// audioElem.play
// audioElem.pause
// audioElem.duration()  //time
// audioElem.currentTime()   //ثانیه رو در همون لحظه برمیگردونه
// audioElem.playbackRate()  //change rate  1x 1.5x 2x 2.x 3x


