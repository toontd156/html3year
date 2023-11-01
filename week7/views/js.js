
const products = document.getElementById('products');
fetch('http://127.0.0.1:9000/products')
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            var card = document.createElement('div');
            card.setAttribute('class', 'card mt-3 me-3');
            card.innerHTML = `
              <div class="card-body">
                <img src="/public/img/${product.image}" >
                <h4 class="card-title"> ${product.name} </h4>
                <p class="card-text">${product.price} baht</p>
                <button class="btn btn-primary">Add to Cart</button>
              </h4>
            `;
            document.getElementById('products').appendChild(card);   
            
        }
        );
    })
    .catch(error => console.error(error));
