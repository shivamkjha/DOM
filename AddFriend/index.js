
var relation = document.querySelector("h4");

var button = document.querySelector("button");

var c = document.querySelector(".confirmation");

let notFrnd = 1;
button.addEventListener("click",function(){
    if(notFrnd){
        button.innerHTML = "Remove";
        button.style.backgroundColor = "light-blue";
        relation.innerHTML = "Friends";
        relation.style.color = "green";
        c.innerHTML = "Added to Friends List ✅";
        notFrnd = 0;
    }else{
        button.innerHTML = "Add Friend";
        button.style.backgroundColor = "cadetBlue";
        relation.innerHTML = "Stranger";
        relation.style.color = "red";
         c.innerHTML = "Removed from Friends List ❌";
        notFrnd = 1;
    }
})