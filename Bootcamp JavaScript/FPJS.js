// JavaScript source code
const products_all = [
    {
        id: 1,
        name: "Sepatu Nike",
        price: 700000,
        image: "image.jpg",
        desc: "This product is not for sale",
    },
    {
        id: 2,
        name: "Sepatu Adidas",
        price: 850000,
        image: "image.jpg",
        desc: "This product is not for sale",
    },
    {
        id: 3,
        name: "Sepatu Wakai",
        price: 500000,
        image: "image.jpg",
        desc: "This product is not for sale",
    },
    ,
    {
        id: 4,
        name: "Sepatu Skechers",
        price: 950000,
        image: "image.jpg",
        desc: "This product is not for sale",
    },
]

let products = products_all;

document.getElementById("container-home").style.display = "block";
document.getElementById("container-admin").style.display = "none";
showProducts();

function filterProducts() {
    let keyword = document.getElementById('search-product').value;
    //let order = document.getElementById('order-product').value;
    products = products_all.filter(product => product.name.includes(keyword));

    let order = document.getElementById('order-product').value;
    if (order == "name-a_z") {
        products = products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order == "name-z_a") {
        products = products.sort((a, b) => b.name.localeCompare(a.name));
    } else if (order == "price-min_max") {
        products = products.sort((a, b) => b.price - a.price);
    } else if (order=="price-max_min") {
        products = products.sort((a, b) => a.price - b.price);
    }
    //products.sort();
    showProducts();
}

function showProducts() {
    let item_html = '';

    products.forEach((product, index) => {
    item_html += `
    <div class="col-md-4 card-product">
        <img src="" alt="">
        <h4>${product.name}</h4>
        <h6>${product.price}</h6>
        <p>${product.desc}</p>
    </div>
    `;

    });

    let data_products = document.getElementById("data-products");
    data_products.innerHTML = item_html;
}

function switchPage(page) {
    if (page == "home") {
        document.getElementById("container-home").style.display = "block";
        document.getElementById("container-admin").style.display = "none";
    } else if (page == "admin") {
        document.getElementById("container-home").style.display = "none";
        document.getElementById("container-admin").style.display = "block";
    } else {
        alert('Page tidak ditemukan');
    }
}