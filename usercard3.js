let CaptainRohit={
    imgurl:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/6.png",
    name:"RohitSharma",
    Description:"Captain of Mumbai Indians"

}


let displayobject;
let getrandomuser=function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data=>console.log(data))
    document.getElementById("rohit-img").src = displayobject.imgurl;
    document.getElementById("rohit").innerHTML = displayobject.name;
    document.getElementById("rohit-desc").innerHTML = displayobject.Description;
}