let CaptainRohit={
    imgurl:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/6.png",
    name:"RohitSharma",
    Description:"Captain of Mumbai Indians"

}


let displayobject={
     name:"",
     imgurl:"",
     Description:""
};
let getrandomuser=function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data=>{
        displayobject.name=data.results[0].name.first+ " " +data.results[0].name.last
        displayobject.imgurl=data.results[0].picture.large
        displayobject.Description=data.results[0].gender
        document.getElementById("rohit-img").src = displayobject.imgurl;
        document.getElementById("rohit").innerHTML = displayobject.name;
        document.getElementById("rohit-desc").innerHTML = displayobject.Description;
    })
    
}