const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector(".nav__items");

//to open nav bar...
menuBtn.addEventListener("click", () =>{
    menu.style.display = 'block';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})

//to close nav bar...
closeBtn.addEventListener("click", () =>{
    menu.style.display = "none";
    closeBtn.style.display = 'none';
    menuBtn.style.display= 'inline-block'
})

//let fagq pop after click +

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", ()=> {
        faq.classList.toggle('open')
        //change to minus
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus'
        } else {
            icon.className = "uil uil-plus"
        }
    })
})
