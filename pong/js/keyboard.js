
var keys = [];
document.addEventListener(`keydown`, (e)=>{
    keys[e.key]=true;
    //console.log(e.key)
})

document.addEventListener(`keyup`, (e)=>{
    keys[e.key]=false;
})
