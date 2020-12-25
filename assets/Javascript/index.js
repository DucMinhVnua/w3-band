// Đóng mở menu
var header = document.getElementById('header');
var mobileMenu = document.querySelector('.fa-bars');
var heightHeader = header.clientHeight;

mobileMenu.onclick = function() {
    var height = header.clientHeight == heightHeader;
    if (height) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
var navLis = document.querySelectorAll('#nav li');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.onclick = function (event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(!isParentMenu) {
            header.style.height = null;
        } else {
            event.preventDefault();
        }   
    }
}
