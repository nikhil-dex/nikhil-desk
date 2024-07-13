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
document.body.style.backgroundColor = 'white';
let Time = new Date();
if (Time.getHours() < 19) {
    document.body.style.backgroundColor = 'white';
    document.documentElement.style.setProperty('--bwriten', (document.body.style.backgroundColor=='white') ? 'black': 'white');
    document.documentElement.style.setProperty('--bblack', (document.body.style.backgroundColor=='white') ? 'white': '#333');
    document.documentElement.style.setProperty('--bwhite', (document.body.style.backgroundColor=='white') ? 'black': 'white'); 
    document.querySelector("#loader").style.background = (document.body.style.backgroundColor=='white') ? 'black': 'white';
    document.documentElement.style.setProperty('--bwritenb', (document.body.style.backgroundColor=='white') ? 'black': 'white');
    
} else{
    document.body.style.backgroundColor = 'black';
    document.documentElement.style.setProperty('--bwritenb', (document.body.style.backgroundColor=='black') ? 'white': 'black');

}

// scroll animation for mozilla
// document.addEventListener('DOMContentLoaded', ()=> {
//     const observerOptions = {
//         threshold: 0.1
//     };
//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//                 observer.unobserve(entry.target);
//             }
//             });
//         }, observerOptions);
//         document.querySelectorAll('#containerA').forEach((element) => {
//             observer.observe(element);
//         });
    
// });
