// Fetch products from the Fake Store API
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
        const productsContainer = document.getElementById('products-container');
        products.forEach(product => {
            // Create product card
            const productCard = document.createElement('div');
            productCard.classList.add('product');

            // Add product image
            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.title;

            // Add product title
            const productTitle = document.createElement('h2');
            productTitle.textContent = product.title;

            // Add product price
            const productPrice = document.createElement('p');
            productPrice.textContent = `$${product.price}`;

            // Append image, title, and price to the product card
            productCard.appendChild(productImage);
            productCard.appendChild(productTitle);
            productCard.appendChild(productPrice);

            // Append product card to the container
            productsContainer.appendChild(productCard);
        });
    })
    .catch(error => console.error('Error fetching products:', error));
