
let productHTML = '';
products.forEach(product => {
    productHTML += ` 
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
                ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>`;
});

//console.log(productHTML);
document.querySelector('.js-products-grid').innerHTML = productHTML;

document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;

        let foundInCart ;
        cart.forEach(item => {
            if(item.id === productId){
                foundInCart = item;
            }
        });

        let quantitySelected = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
        //console.log(quantitySelected);

        if(foundInCart){
            foundInCart.quantity += quantitySelected;
        } else{
            cart.push({id :productId, quantity: quantitySelected});
        }

        let cartQuantity = 0;
        cart.forEach(item => {
            cartQuantity += item.quantity;
        });

        document.querySelector('.js-cart-quantity').innerText = cartQuantity;

    });
}); 