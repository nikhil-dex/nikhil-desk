document.body.style.backgroundColor = 'white';
let Time = new Date();
if (Time.getHours() < 15) {
    document.body.style.backgroundColor = 'white';
} else{
    document.body.style.backgroundColor = 'black';

}
function changeBackgroundColor() {
    document.body.style.backgroundColor = (document.body.style.backgroundColor=='white') ? 'black': 'white';
    document.querySelector("#loader").style.background = (document.body.style.backgroundColor=='white') ? 'black': 'white';
    document.querySelector('#divbtn').style.background = (document.body.style.backgroundColor=='white') ? 'green': 'red';
    // getComputedStyle(document.documentElement).getPropertyValue('--bwhite')
    document.documentElement.style.setProperty('--bwhite', (document.body.style.backgroundColor=='white') ? 'black': 'white'); 
    document.documentElement.style.setProperty('--bblack', (document.body.style.backgroundColor=='white') ? 'white': '#333');
    document.documentElement.style.setProperty('--bwriten', (document.body.style.backgroundColor=='white') ? 'black': 'white');
    document.documentElement.style.setProperty('--bwritenb', (document.body.style.backgroundColor=='black') ? 'white': 'black');

  
}