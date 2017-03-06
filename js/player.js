var musicFiles = [
{
    name: "感恩的心 ",
    author: "欧阳菲菲",
    url: "music/感恩的心.mp3"
},
{
    name: "北京北京",
    author: "梁博",
    url: "music/北京北京.mp3"
},
{
    name: "离不开你",
    author: "朱克",
    url: "music/离不开你.mp3"
},
{
    name: "最后一页",
    author: "江语晨",
    url: "music/最后一页.mp3"
},];
var n = 1;//判断是否有歌曲在播放
var INDEX = 0;
var audio = document.getElementById("musicbox");
//把要播放的歌曲添加到播放列表
var ul = document.getElementById("musiclist");
//console.log(musiclist);
var lis=[];
for(var i=0;i<musicFiles.length;i++){
    lis[i]=document.createElement("li");
    lis[i].innerHTML=musicFiles[i].name+"-"
    +musicFiles[i].author;
    //console.log(lis[i]);
    ul.appendChild(lis[i]);
    //console.log(lis);
}
playmusic(INDEX);//页面加载自动播放
//暂停播放转换
var play = document.getElementById("play");
function playclick(){
    if(play.className!=""){
        play.className="";
        audio.pause();
    }else{
        play.className="playing";
        audio.play();
        // if(n=1){//如果没有自动播放时
        //     playmusic(0);
        // }
    }
}

//双击播放音乐
var musiclist = document.querySelectorAll("#musiclist li");
for(var i=0;i<musiclist.length;i++){
    musiclist[i].index=i;
    musiclist[i].ondblclick=function(){
        playmusic(this.index);
        play.className="playing";
    }
}
//下一按钮
var next = document.getElementById("next");
next.onclick=function(){
    nextmusic();
}
function nextmusic(){
    if(INDEX==musicFiles.length-1){
        INDEX=-1;
    }
    INDEX+=1;
    playmusic(INDEX);
    play.className="playing";
}
//播放音乐函数
function playmusic(index){
    //n=0;
    audio.setAttribute("src",musicFiles[index].url);
    audio.play();
    var musiclist = document.querySelectorAll("#musiclist li");
    for(var i=0;i<musiclist.length;i++){
        musiclist[i].className="";
    }
    musiclist[index].className="isplay";
    INDEX = index;
}