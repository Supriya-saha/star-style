import { addcart,size} from "../data/cart.js";
import { products } from "../data/products.js";
function updatecartsize() {
  let cartsize = size();
  if(cartsize){
    document.querySelector(".js-quantity").innerHTML = cartsize;
  }
  else{
    document.querySelector(".js-quantity").innerHTML = "";
  }
}


products.forEach((item) => {
  document.querySelector(
    ".products-grid"
  ).innerHTML += `<div class="product-container">
    <div class="product-image-container">
    <img class="product-image"
        src="${item.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
    ${item.name}
    </div>

    <div class="product-rating-container">
    <img class="product-rating-stars"
        src="images/ratings/rating-${item.rating.stars * 10}.png">
    <div class="product-rating-count link-primary">
    ${item.rating.count}
    </div>
    </div>

    <div class="product-price">
    &#8377;${(item.priceCents)}
    </div>

    <div class="product-spacer"></div>

      <button class="add-to-cart-button button-primary button-js" onClick="window.location.href='${item.link}'" data-product-id="${item.id}">
      View
      </button>

    </div>`;
});
updatecartsize();

document.querySelectorAll(".button-js").forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.dataset.productId;
    const quantity = Number(document.querySelector(`.dropdown-${id}`).value);
    addcart(id, quantity);
    updatecartsize();
  });
});
