// Script.js

window.addEventListener('DOMContentLoaded', () => {

  

  if(!localStorage.getItem('items')) {
    
    fetch('https://fakestoreapi.com/products').then(response => response.json()).then(data => {
      localStorage.setItem('items', JSON.stringify(data));
      let products = JSON.parse(localStorage.getItem('items'));

      for(let i = 0; i < products.length; i++) {
        let item = document.getElementById('product-list').appendChild(new ProductItem(products[i]));
        
        for(key in products[i]) {
          item.setAttribute(key, products[i][key]);
        }

        item.shadowRoot.querySelector('.heading').textContent = products[i].heading;
        item.shadowRoot.querySelector('.price').textContent = products[i].price;

        item.shadowRoot.querySelector('image').setAttribute('alt', products[i].heading);
        item.shadowRoot.querySelector('image').setAttribute('src', products[i].image);

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
      
      for(key in products[i]) {
        item.setAttribute(key, products[i][key]);
      }

      item.shadowRoot.querySelector('.title').textContent = products[i].title;
      item.shadowRoot.querySelector('.price').textContent = products[i].price;

      item.shadowRoot.querySelector('img').setAttribute('alt', products[i].title);
      item.shadowRoot.querySelector('img').setAttribute('src', products[i].image);

      if (localStorage.getItem(products[i].id) == 'true') {
        item.shadowRoot.querySelector('button').textContent = 'Remove from cart';
      }
    }
  }
  
  if (localStorage.getItem('count')) {
    document.getElementById('cart-count').textContent = localStorage.getItem('count');
  }

});

