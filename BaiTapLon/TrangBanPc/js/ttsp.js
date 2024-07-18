
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

var thumbnails = document.querySelectorAll('.thumbnail');
var mainImage = document.querySelector('.main-image');
var images = Array.from(thumbnails).map(img => img.src);
var currentImageIndex = 0;

thumbnails.forEach(function(thumbnail, index) {
    thumbnail.addEventListener('click', function() {
        mainImage.src = thumbnail.src;
        currentImageIndex = index;
    });
});

document.querySelector('.prev').addEventListener('click', function() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        mainImage.src = images[currentImageIndex];
    }
});

document.querySelector('.next').addEventListener('click', function() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        mainImage.src = images[currentImageIndex];
    }
});
