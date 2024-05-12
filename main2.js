/////works-other-photograhpy
/////popup

const images = [...document.querySelectorAll('.photo-image')];
const themesList = document.querySelectorAll('.photographyTheme');

const popup = document.querySelector('.popup');
const nav = document.querySelector('.nav-container');
const closeButton = document.querySelector('.close-button');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const largeImage = document.querySelector('.large-image');
const imageName = document.querySelector('.image-name');
const imageTag = document.querySelector('.image-tag');
const imageIndex = document .querySelector('.index');

let index = 0;
let themesName;
let themeImageNum;
let maxnum;

let tag;

///update theme (getting from images)
images.forEach((item,i) => {
    item.addEventListener('click', () => {
        themesName = item.parentElement.parentElement.id;/*get theme's name*/
        themeImageNum = item.parentElement.parentElement.childElementCount;/*get theme's num*/

   
        tag = item.id;
        if( item.classList.contains('tate') == true ){
        document.querySelector('.popup-place-tate').innerHTML =tag;
        document.querySelector('.popup-place').innerHTML ="";
        }else{
        document.querySelector('.popup-place').innerHTML =tag;
        document.querySelector('.popup-place-tate').innerHTML ="";
        console.log(tag);
        }
      
   })
})

///images 
images.forEach((item,i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
        nav.classList.toggle('hidden');
               
    })
})




//updateImage
let numfortheme; //reset count by each theme
let num;
let themeImageNumajust; //in case for image-empty 

const updateImage = (i) => {

    if(43 > i && i >= 38) {  /* monokuro(5)*/
        numfortheme = i -38;
        themeImageNumajust = themeImageNum;
    }

    if(38 > i && i >= 36 ){  /* line(2)*/
        numfortheme = i -36;
        themeImageNumajust = themeImageNum;
    }
    
    if(36 > i && i >= 31) {  /* landscape(5)*/
    numfortheme = i -31;
    themeImageNumajust = themeImageNum;
}

    if(31 > i && i >= 25) {  /* branch(6)*/
        numfortheme = i -25;
        themeImageNumajust = themeImageNum;
    }

    if(25 > i && i >= 16) {  /* seaside(9)*/
        numfortheme = i -16;
        themeImageNumajust = themeImageNum;
    }

    if(16 > i && i >= 12) {  /* people(4)*/
    numfortheme = i -12;
    themeImageNumajust = themeImageNum;
    console.log(themeImageNumajust);
    }
    
    if(i < 12){         /* townscape(12)*/
        numfortheme = i;
        themeImageNumajust = themeImageNum;
    }

    if(numfortheme <= 8){
    num = `0${numfortheme+1}`;
    } 

    else{
    num = `${numfortheme+1}`;   
    }

    let path = `images/photos/image_photography_${themesName}_0${num}.jpg`;
    imageIndex.innerHTML = num;
    index = numfortheme;
    largeImage.src = path;
    imageName.innerHTML = path;
    
   

}


///closebutton click
closeButton.addEventListener('click', () => {
    popup.classList.toggle('active');
    nav.classList.toggle('hidden');
},false);


//arrow clisck

leftArrow.addEventListener('click', () => {
   
    updateImage();
    console.log(themeImageNumajust,index);
    if(themeImageNumajust  > index && index > 0){
        console.log(themeImageNumajust-1,index);
        updateImage(index-1);
        // maxnum =themeImageNumajust-1;
    }

})

rightArrow.addEventListener('click', () => {
    
    updateImage();
    console.log(themeImageNumajust,index);
    if(index < themeImageNumajust){
        if(index < themeImageNumajust-1){  ///don't move to image-empty
        updateImage(index+1);
    }}
})
