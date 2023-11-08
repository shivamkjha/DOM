let arr = [
  {
    dp: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1698417749742-7651a7dcb13a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1697057380784-f5438d736d49?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1698678165255-735ab27a611a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1698769400144-216ef7451574?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1682724602143-a77d75d273b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
  },
];

// retrieve the image and make a
let clutter = "";
arr.forEach((elem,idx)=>{
  clutter += `<div class = "story"><img id ="${idx}" src="${elem.dp}" alt=""></div>`;
  console.log(clutter);
})

let stories = document.querySelector(".stories");
stories.innerHTML = clutter;

var storyView = document.querySelector(".story-view");
stories.addEventListener("click",(dets)=>{
  // console.log(dets.target.id);
  storyView.style.display = "block";
  storyView.style.backgroundImage = `url(${arr[dets.target.id].story})`;
  storyView.style.zIndex = "9";


  setTimeout(()=>{
    storyView.style.display = "none";
    storyView.style.zIndex = "0";
  },3000)
})

storyView.addEventListener("click",()=>{
  storyView.style.display = "none";
})


