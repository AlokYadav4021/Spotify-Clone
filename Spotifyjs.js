//console.log('hello');
let songIndex = 0 ;
let audio = new Audio('Luffy Sings .mp3');
let masterplay = document.getElementById("masterplay")
let range = document.getElementsByClassName("range")
//audio.play();

/*let songs = [
    {songName:"chanaa mereya", filePath:'C:\Users\Public\Music\Sample Music\Kalimba.mp3', coverPath:'cover/1.jpg'},
    {songName:"chanaa mereya", filePath:'C:\Users\Public\Music\Sample Music\Kalimba.mp3', coverPath:'cover/1.jpg'},
    {songName:"chanaa mereya", filePath:'C:\Users\Public\Music\Sample Music\Kalimba.mp3', coverPath:'cover/1.jpg'},
    {songName:"chanaa mereya", filePath:'C:\Users\Public\Music\Sample Music\Kalimba.mp3', coverPath:'cover/1.jpg'},
    {songName:"chanaa mereya", filePath:'C:\Users\Public\Music\Sample Music\Kalimba.mp3', coverPath:'cover/1.jpg'},
    {songName:"chanaa mereya", filePath:'C:\Users\Public\Music\Sample Music\Kalimba.mp3', coverPath:'cover/1.jpg'},
    {songName:"chanaa mereya", filePath:'C:\Users\Public\Music\Sample Music\Kalimba.mp3', coverPath:'cover/1.jpg'},
    {songName:"chanaa mereya", filePath:'C:\Users\Public\Music\Sample Music\Kalimba.mp3', coverPath:'cover/1.jpg'}
]*/


//for handle play and pause button
masterplay.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        
    }
    else{
        audio.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
    }
})
//listen to events
document.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
}) 