// product-item.js

class ProductItem extends HTMLElement {

  constructor() {

    super();
    let shadow = this.attachShadow({mode:'open'});

    let element = document.createElement('link');
    element.setAttribute('href', './styles/styles.css');
    element.setAttribute('rel', 'stylesheet');

    let list = document.createElement('li');
    let img = list.appendChild(document.createElement('img'));
    let title = list.appendChild(document.createElement('p'));
    let price = list.appendChild(document.createElement('p'));


    list.setAttribute('class', 'product');
    img.setAttribute('width', '200');
    title.setAttribute('class', 'title');
    price.setAttribute('class', 'price');

    let button = list.appendChild(document.createElement('button'));
    button.setAttribute('onclick', 'alert("Added to cart")');
    button.textContent = 'Add to cart';
    let item = this;
    button.addEventListener('click', function(){

      let count = document.getElementById('cart-count');
      if (this.textContent == 'Add to cart') {
        count.textContent = parseInt(count.textContent)+1;
        localStorage.setItem('count', count.textContent);
        localStorage.setItem(item.getAttribute('id'), 'true');
        this.textContent = 'Remove from cart';
      } else {
        count.textContent = parseInt(count.textContent)-1; 
        localStorage.setItem('count', count.textContent);
        localStorage.setItem(item.getAttribute('id'), 'false');
        this.textContent = 'Add to cart';
      }

    });

    
    shadow.appendChild(list);
    shadow.appendChild(element);

  }

}

customElements.define('product-item', ProductItem);