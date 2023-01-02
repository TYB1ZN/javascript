const button  = document.querySelector('.btn');
button.addEventListener('click', changecolor);
function changecolor(){
    const background = document.querySelector('.background');
    const arrays = ['red', 'green', 'blue', 'yellow','pink'];
    background.style.backgroundColor = arrays[randomcolor(arrays)]; 
}
function randomcolor(arrays) {
    return Math.floor(Math.random()*arrays.length );

}