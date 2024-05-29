import co from '../components/checkout.js';
import Footer from '../components/footer.js';
co

document.getElementById('footer').innerHTML = Footer();
document.querySelector('.checkouts').innerHTML =co();



let BuyNowButtons = document.getElementsByClassName("buyNowBtn");

Array.from(BuyNowButtons).map(button => {
    button.addEventListener("click", () => {
        // window.location.href = "thanksforReach.html";
        document.querySelector(".checkouts").style.display = "block";
    });
});
let closeCheckOut = document.querySelector(".cancel-checkout")

closeCheckOut.addEventListener("click", () => {
    document.querySelector(".checkouts").style.display = "none";
});

if(window.screen.width>750){
    document.querySelector('.cow_img_change').src="https://www.havmor.com/themes/havmornew/images/home-bg-img-mob.webp"
}
else{
    document.querySelector('.cow_img_change').src="https://www.havmor.com/themes/havmornew/images/home-bg-img.webp"

}
console.log(window.screen.width);