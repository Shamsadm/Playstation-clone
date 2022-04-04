let flag=0;
function changeMastHead(number){

  let test=document.getElementsByClassName("test");


   Array.from(test).forEach((m,i) => {
    if(number != i+1){
        m.classList.remove("active");
        
    }else{
        m.classList.add("active");
    }
    
    
   });
   
    
}

function changeBodyElement(number){

    let heading = document.getElementById("showcaseHeading");
    let paragraph = document.getElementById("showcasePara");
    let img = document.getElementById("showcaseimg");

    
    switch (number)
    {
        case 1:
            heading.innerText = "PlayStation 5 Console"
            paragraph.innerText = "Experience an all-new generation of incredible PlayStation games."
            img.src = "/Images/playstation-5-horizontal-product-shot-01-ps5-en-23nov20.png"
            break;
        case 2:
            heading.innerText = "DualSense™ Wireless Controller"
            paragraph.innerText = "Enjoy a seamless wireless experience with a headset fine-tuned for 3D Audio on PS5 consoles."
            img.src = "/Images/test-dualsense-hw2.jfif"
            break;
        case 3:
            heading.innerText = "PULSE 3D™ Wireless Headset"
            paragraph.innerText = "Immerse yourself in the gaming experience with a controller the supports responsive haptic feedback and dynamic trigger effects."
            img.src = "/Images/headset-collection-homepage-image-block-01-en-13oct21.jfif"
            break;
        case 4:
            heading.innerText = "Media Remote"
            paragraph.innerText = "Conveniently control movies, streaming services and more on your PS5 console with an intuitive layout."
            img.src = "/Images/Media-Remote-square-image-block-ps5-01-en-09oct20.png"
            break;
        case 5:
            heading.innerText = "HD Camera"
            paragraph.innerText = "Add yourself to your gameplay videos and broadcasts with smooth, sharp, full-HD capture."
            img.src = "/Images/hd-camera-square-image-block-ps5-01-en-07dec20.jfif"
            break;
        default:
            break;

    }


}
