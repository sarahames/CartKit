//  showing only the selected product on productdetail.html

let pdiv = document.querySelector('.container'); // container on productdetail.html
console.log('detail container:', pdiv);

// Read selected product ID from localStorage (set by the products page)
const productId = localStorage.getItem('selectedProductId');

const loadProductDetail = async () => {
  try {
    // If no ID saved, show message
    if (!productId) {
      pdiv.innerHTML = `<h3 class="text-danger text-center mt-5">No product selected!</h3>`;
      return;
    }

    // Fetch only the selected product by ID
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product = await response.json();
    console.log("Selected Product:", product);

    // Clear container so we show only this product
    pdiv.innerHTML = '';

    // Build detail layout for a single product
    const detailDiv = document.createElement('div');
    detailDiv.classList.add('row', 'align-items-center', 'justify-content-center', 'my-5');

    detailDiv.innerHTML = `
      <div class="col-md-5 text-center">
        <img src="${product.image}" alt="${product.title}" 
             class="img-fluid rounded shadow-sm" 
             style="max-height: 400px; object-fit: contain;">
      </div>

      <div class="col-md-6">
        <p class="text-uppercase text-muted fw-semibold">${product.category}</p>
        <h2 class="fw-bold mb-3">${product.title}</h2>
        <h3 class="text-danger mb-3">Price: Rs ${product.price}</h3>
        <p class="text-secondary">${product.description}</p>
        <div class="d-flex gap-3 mt-4">
          <button class="btn btn-warning px-4 py-2 btn-cart">Add to Cart</button>
          <a href="index.html" class="btn btn-outline-dark px-4 py-2">Back to Products</a>
        </div>
      </div>
    `;

    // Insert 1 product detail into the page
    pdiv.appendChild(detailDiv);

  } catch (error) {
    console.error(error);
    pdiv.innerHTML = `<h3 class="text-danger text-center mt-5">Error loading product details!</h3>`;
  }
};

// Run it
loadProductDetail();
