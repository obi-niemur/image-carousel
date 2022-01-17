const carousel = document.querySelector('#caruosel');
const allImage = document.querySelectorAll(".image1");
const previous = document.querySelector('.arrowleft');
const next1 = document.querySelector('.arrowRight');
// allImage[0].style.display='block'
let current = 0;


function reset(){
    for(let i = 0; i < allImage.length; i++){
        allImage[i].style.display = 'none';
    }
}


function slider(){
    reset();
    allImage[current].style.display='block';

}

function prev(){
    reset();
    allImage[current-1].style.display='block';
    current--;
}

previous.addEventListener('click', ()=>{

    if(current === 0){
        current = allImage.length;

    }else{
        prev()
    }

});

function next(){
    reset();
    allImage[current+1].style.display='block';
    current++;
}

next1.addEventListener('click', ()=>{
    if(current === allImage.length-1){
        current = -1;
    }else{
        next()
    }
})







slider();
