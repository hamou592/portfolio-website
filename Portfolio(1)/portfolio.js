//change the background of the nav when we scroll


window.addEventListener("scroll",() => {
    if(window.scrollY > 2){
        document.querySelector("nav").style.background="#0c031b";
        /*this is used to change the color of the logo and  elements of the ul*/ 
        if(window.innerWidth > 850){
            document.querySelectorAll("nav ul li a").forEach(element =>{
            element.style.color="#fff"
            });
        }
        //changing also the color of the logo and the close-open btn
        document.querySelector("nav h2 a").style.color="#fff";
        document.querySelector("nav .close-btn").style.color=
        "#fff";
    }
    //make the origin colors when the scrollY is less then 2
    else{
        document.querySelector("nav").style.background="linear-gradient(rgba(70, 70, 70, 0.514),rgb(255, 255, 255))";
        document.querySelector("nav h2 a").style.color="#000";
        document.querySelectorAll("nav ul li a").forEach(element =>{
            element.style.color="#000"
            element.addEventListener("mousemove",() =>{
                element.style.color="#fff"
            });
            element.addEventListener("mouseout",() =>{
                if(window.scrollY < 2){
                    element.style.color="#000"
                }
            })
        });
        document.querySelector("nav .close-btn").style.color=
        "#000";
    }
})

//this is for the close-open button

let closee = document.querySelector(".close");
let menu = document.querySelector(".menu");
let list = document.querySelector("nav ul");
menu.addEventListener("click",()=>{
    list.style.display = 'flex';
    menu.style.display="none";
    closee.style.display="block";
})

closee.addEventListener("click",()=>{
    list.style.display = 'none';
    menu.style.display="block";
    closee.style.display="none";
})

/*this is used to show the nav bar after clicking on the 
close button and resize the window*/
window.addEventListener('resize', () => {
     if(window.innerWidth > 850 ){
     list.style.display = 'flex';
     }
     else{
        //this is used to show the nav if the closee icon is block
        if(closee.style.display == "block"){
            list.style.display = 'flex';
        }
        else{
            //this is used to show the nav if the closee icon is shown none
            list.style.display = 'none';
        }
         
     }
 });

//this is used to hide the list when we click on a category of it
var elements = document.querySelectorAll("nav ul li");

elements.forEach(element => {
    element.addEventListener("click",() => {
        if(window.innerWidth < 850){
            list.style.display = 'none';
            menu.style.display="block";
            closee.style.display="none";
        }
        
    })
});
//this is for the button of the navbar
document.querySelector("nav ul button").addEventListener("click",() =>{
    if(window.innerWidth < 850){
        list.style.display = 'none';
        menu.style.display="block";
        closee.style.display="none";
    }
})

