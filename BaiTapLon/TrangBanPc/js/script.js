
document.getElementById('menu-icon').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('content');
    if (sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        content.classList.remove('sidebar-visible');
    } else {
        sidebar.classList.add('show');
        content.classList.add('sidebar-visible');
    }
});

document.getElementById('product-toggle').addEventListener('click', function() {
    var submenu = document.getElementById('product-submenu');
    if (submenu.style.display === 'none' || submenu.style.display === '') {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    }
});

function filterProducts() {
    var category = document.getElementById('filter-category').value;
    var price = document.getElementById('filter-price').value;
    var rating = document.getElementById('filter-rating').value;

    var products = document.querySelectorAll('.product');
    var visibleProducts = 0;

    products.forEach(function(product) {
        var productCategory = product.querySelector('.category').textContent;
        var productPrice = parseFloat(product.querySelector('.price').textContent.replace('$', ''));
        var productRating = product.querySelector('.rating').textContent.length;

        var categoryMatch = (category === 'all' || productCategory === category);
        var priceMatch = (price === 'all' || 
            (price === '0-100' && productPrice <= 100) || 
            (price === '101-200' && productPrice > 100 && productPrice <= 200) || 
            (price === '201-300' && productPrice > 200 && productPrice <= 300));
        var ratingMatch = (rating === 'all' || productRating >= parseInt(rating));

        if (categoryMatch && priceMatch && ratingMatch) {
            product.style.display = 'block';
            visibleProducts++;
        } else {
            product.style.display = 'none';
        }
    });

    if (visibleProducts === 0) {
        document.getElementById('no-products').style.display = 'block';
    } else {
        document.getElementById('no-products').style.display = 'none';
    }

    // Hiển thị nút "Hủy lọc" khi có sản phẩm được lọc
    document.getElementById('reset-filters').style.display = 'inline-block';
}
  // Kiểm tra số lượng sản phẩm
  const products = document.querySelectorAll('.product');
if (products.length === 1) {
    document.getElementById('content').classList.add('single-product');
}

function resetFilters() {
    document.getElementById('filter-category').value = 'all';
    document.getElementById('filter-price').value = 'all';
    document.getElementById('filter-rating').value = 'all';
    filterProducts();

    // Ẩn nút "Hủy lọc" khi hủy lọc
    document.getElementById('reset-filters').style.display = 'none';
}
