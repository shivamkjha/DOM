var con = document.querySelector(".container");
var heart = document.querySelector(".like-popup");
var mainImage = document.querySelector(".main-image");
var like = document.querySelector(".like");
var save = document.querySelector(".save");

var flag = 0;
mainImage.addEventListener("dblclick",()=>{
    heart.style.transform = "translate(-50%,-50%) scale(1.5)";
    like.style.color = "red";
    flag = 1;
    setTimeout(()=>{
        heart.style.transform = "translate(-50%,-50%) scale(0)";
    },700);
});


like.addEventListener("click",()=>{
    if(flag){
        like.style.color = "black";
        flag = 0;
    }else{
        like.style.color = "red";
        flag = 1;
    }
})

var saved = 1;
save.addEventListener("click", () => {
  if (saved) {
    save.style.color = "blue";
    saved = 0;
  } else {
    save.style.color = "black";
    saved = 1;
  }
});

var share = document.querySelector(".share");
share.addEventListener("click", () => {
  if (navigator.share) {
    navigator
      .share({
        title: "Insta post",
        text: "Like my picture :)",
        url: "https://shivamkjha.github.io/InstaPost/",
      })
      .then(() => console.log("Successful share"))
      .catch((error) => console.log("Error sharing:", error));
  } else {
    console.log("Web Share API not supported");
  }
});

var comment = document.querySelector(".comment");
comment.addEventListener("click",()=>{
    prompt("Drop your Comment here 👇");
})



