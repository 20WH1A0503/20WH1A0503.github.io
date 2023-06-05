let CaptainRohit={
    imgurl:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/6.png",
    name:"RohitSharma",
    Description:"Captain of Mumbai Indians"

}
let youngRohit ={
    imgurl="https://static.toiimg.com/thumb/imgsize-23456,msid-2876942,width-600,resizemode-4/2876942.jpg",
    name="Rohit Gurunath Sharma",
    Description:"Cricketer"
}
let isCaptainRohit=true;
let displayobject;
let flipdata=function(){
    if(isCaptainRohit == true){
        displayobject=youngRohit;
        isCaptainRohit=false;
    }
    else{
        displayobject=CaptainRohit;
        isCaptainRohit=true;
    }
    document.getElementById("rohit-img").src = displayobject.imgurl;
    document.getElementById("rohit").innerHTML = displayobject.name;
    document.getElementById("rohit-desc").innerHTML = displayobject.Description;
}