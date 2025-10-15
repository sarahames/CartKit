let pdiv= document.querySelector('.container');
console.log(pdiv)

const productsApi= async ()=>{
 try{
     let response = await fetch('https://fakestoreapi.com/products');
    // let response = await fetch('https://api.escuelajs.co/api/v1/products');
  let data = await response.json()
  console.log(data)
data.map((product,index,array )=>{
    console.log("product",product);

let chilDiv= document.createElement('div');
chilDiv.classList.add('new-class',)

chilDiv.innerHTML=
`
<div class=" product-cards-cstm">
<div class="card col-12 col-sm-6 col-md-4 col-lg-3 my-4 card shadow-sm border-0position-relative overflow-hidden h-100" style="width: 18rem;">
  <img src="${product.image}" class="card-img-top card-img-cstm" alt="...">
  <div class="card-body  d-flex flex-column">
    <h5 class="card-title">${product.title}</h5>
    <h2 class="price mt-auto text-start"> Rs: ${product.price}</h2>
    <button class="btn btn-warning mt-auto view-detail-btn" data-id="${product.id}">View Details</button>

  </div>
</div>
</div>
`




pdiv.appendChild(chilDiv)
 }) 
 // Adding click event for all "View Details" buttons
document.querySelectorAll('.view-detail-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const productId = e.target.getAttribute('data-id');
    localStorage.setItem('selectedProductId', productId); // save id
    window.location.href = 'productdetail.html'; // navigate
  });
});;
} 

 catch (error) { 
    let errorMessage  = document.createElement('h1');
    errorMessage.innerText= ' Data not found!'
pdiv.appendChild(errorMessage)
console.log(error)
 } 
}
productsApi()                     






