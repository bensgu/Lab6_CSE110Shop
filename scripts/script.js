// Script.js

window.addEventListener('DOMContentLoaded', () => {

  

  if(localStorage.getItem('items') == null) {
    
    fetch('https://fakestoreapi.com/products').then(response => response.json()).then(data => {
      myLocalStorage.setItem('items', JSON.stringify(data));
      let products = JSON.parse(localStorage.getItem('items'));

      for(let i = 0; i < products.length; i++) {
        let item = document.getElementById('product-list').appendChild(new ProductItem(product[i]));
        
        for(key in product) {
          item.setAttribute(key, products[i][key]);
        }

        item.shadowRoot.querySelector('.heading').textContent = product.heading;
        item.shadowRoot.querySelector('.price').textContent = product.price;

        item.shadowRoot.querySelector('image').setAttribute('alt', product.heading);
        item.shadowRoot.querySelector('image').setAttribute('src', product.image);

        if (localStorage.getItem(products[i].id) == 'true') {
          item.shadowRoot.querySelector('button').textContent = 'Remove from cart';
        }

      }

    })
  }


  else {
    let products = JSON.parse(localStorage.getItem('items'));

    for (let i = 0; i < products.length; i++) {
      let item = document.getElementById('product-list').appendChild(new ProductItem(products[i]));
      
      for(key in product) {
        item.setAttribute(key, products[i][key]);
      }

      item.shadowRoot.querySelector('.title').textContent = product.title;
      item.shadowRoot.querySelector('.price').textContent = product.price;

      item.shadowRoot.querySelector('img').setAttribute('alt', product.title);
      item.shadowRoot.querySelector('img').setAttribute('src', product.image);

      if (localStorage.getItem(products[i].id) == 'true') {
        item.shadowRoot.querySelector('button').textContent = 'Remove from cart';
      }
    }
  }
  
  if (localStorage.getItem('count')) {
    document.getElementById('cart-count').textContent = localStorage.getItem('count');
  }

});

