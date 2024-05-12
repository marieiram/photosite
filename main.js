/////works-other-photograhpy
/////popup

const images = [...document.querySelectorAll('.photo-image')];
const themes = document.querySelector('.photography-theme');

const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.close-button');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const largeImage = document.querySelector('.large-image');
const imageName = document.querySelector('.image-name');
const imageIndex = document .querySelector('.index');

let index = 0;


images.forEach((item,i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
        console.log('clickimage');
        console.log(item);
        
    })
})


///closebutton click
closeButton.addEventListener('click', () => {
    popup.classList.toggle('active');
    console.log('clicksaeta');
},false);


//arrow clisck
leftArrow.addEventListener('click', () => {
    if(index > 0){
        updateImage(index-1);
    }
})

rightArrow.addEventListener('click', () => {
    if(index < images.length-1){
        updateImage(index+1);
    }
})


//updateImage
let num;
let themesName = themes.id  /*get theme's name*/
console.log(themesName);
console.log(themes);


const updateImage = (i) => {
    if(i <= 8){
    num = `0${i+1}`;
    console.log(num);
    } 
    else{
    num = `${i+1}`;
    console.log(num);      
    }

    let path = `images/photos/image_photography_${themesName}_0${num}.jpg`;
    imageIndex.innerHTML = num
    index = i;
    largeImage.src = path;
    imageName.innerHTML = path;
    console.log (path); 
}

