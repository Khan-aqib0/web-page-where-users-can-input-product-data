let products = [];

function addProduct() {
  const productName = document.getElementById('productName').value;
  const productPrice = parseFloat(document.getElementById('productPrice').value);
  const productRating = parseFloat(document.getElementById('productRating').value);

  if (productName && !isNaN(productPrice) && !isNaN(productRating)) {
    products.push({ name: productName, price: productPrice, rating: productRating });
    updateCharts();
    clearInputs();
  } else {
    alert('Please enter valid data for product.');
  }
}

function updateCharts() {
  const priceChart = document.getElementById('priceChart');
  const ratingChart = document.getElementById('ratingChart');

  // Clear existing bars
  priceChart.innerHTML = '<h2>Price Chart</h2>';
  ratingChart.innerHTML = '<h2>Rating Chart</h2>';

  // Sort products by price and rating
  products.sort((a, b) => a.price - b.price);
  const maxPrice = products.length > 0 ? products[products.length - 1].price : 10; // Assuming max price for scaling
  products.forEach(product => {
    const pricePercent = (product.price / maxPrice) * 100;
    priceChart.innerHTML += `<div class="bar price-bar" style="width: ${pricePercent}%;"><span>${product.name}</span></div>`;
  });

  products.sort((a, b) => b.rating - a.rating);
  const maxRating = products.length > 0 ? products[0].rating : 5; // Assuming max rating for scaling
  products.forEach(product => {
    const ratingPercent = (product.rating / maxRating) * 100;
    ratingChart.innerHTML += `<div class="bar rating-bar" style="width: ${ratingPercent}%;"><span>${product.name}</span></div>`;
  });
}

function clearInputs() {
  document.getElementById('productName').value = '';
  document.getElementById('productPrice').value = '';
  document.getElementById('productRating').value = '';
}

// Initial call to update charts with any existing data
updateCharts();