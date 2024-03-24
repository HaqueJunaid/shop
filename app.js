let products = [
    {
        name: "iQOO 12 5G",
        title: "Flagship Gaming Phone",
        price: "52,999",
        image: "https://m.media-amazon.com/images/I/411gvmvNQzL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        name: "iPhone 15 Pro",
        title: "Full Titanium Body",
        price: "1,27,990",
        image: "https://m.media-amazon.com/images/I/412CKVTe8dL._SY445_SX342_QL70_FMwebp_.jpg"
    },
    {
        name: "Realme 12 Pro+ 5G",
        title: "120X Zoom",
        price: "34,999",
        image: "https://m.media-amazon.com/images/I/81GNHx0grQL._SX679_.jpg"
    },
    {
        name: "Samsung s24 Ultra",
        title: "Snapdragon 8 Gen 3",
        price: "1,39,999",
        image: "https://m.media-amazon.com/images/I/71CXhVhpM0L._SX679_.jpg"
    },
]

let popular = [
    {
        name: "MacBook Air M2",
        title: "Apple MacBook Air 14\" 2022",
        price: "1,02,999",
        image: "https://m.media-amazon.com/images/I/41YvjAcEc3L._SY445_SX342_QL70_FMwebp_.jpg"
    },
    {
        name: "HP Victus",
        title: "i5 12450H, RTX 3050",
        price: "67,990",
        image: "https://m.media-amazon.com/images/I/710ZcpHUpkL._SX679_.jpg"
    },
    {
        name: "Lenovo LOQ",
        title: "i5-13450HX, RTX 3050",
        price: "84,990",
        image: "https://m.media-amazon.com/images/I/81nnXfbm7rL._SX679_.jpg"
    },
    {
        name: "Mac Studio",
        title: "M1 Ultra, 64GB RAM, 1TB SSD",
        price: "84,990",
        image: "https://m.media-amazon.com/images/I/21GHoM4mLbL._SY445_SX342_QL70_FMwebp_.jpg"
    },
]

let cart = [];

function addProducts() {
    let clutter = "";
    products.forEach(function(product, index) {
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] rounded-xl overflow-hidden">
            <img class="w-full h-full object-contain" src="${product.image}"/>
        </div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">${product.title}</h3>
                    <h4 class="font-semibold mt-2">&#x20B9; ${product.price}</h4>
                </div>
                <button data-index=${index} class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index=${index}
                        class="add ri-add-line"></i></button>
            </div>
        </div>
    </div>`
    })

    document.querySelector(".products").innerHTML = clutter;
}
addProducts();

function addPopular() {
    let clutter = "";
    popular.forEach(function(product) {
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}"
                alt="">
        </div>
        <div class="data py-2 w-full overflow-hidden">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.title}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&#x20B9; ${product.price}</h4>
        </div>
    </div>`;
    });

    document.querySelector(".populars").innerHTML = clutter;
};
addPopular();

function showCart() {
    const toggleCartButton = document.querySelector('.carticon');
    const cart = document.querySelector('.cartexpnd');

  toggleCartButton.addEventListener('click', function() {
    if (cart.style.display === 'none') {
        cart.style.display = 'block';
        
    } else {
      cart.style.display = 'none';
    }
  });
}
showCart();

function addToCart() {
    document.querySelector(".products").addEventListener("click", function(dets) {
        if (dets.target.classList.contains("add")) {
            cart.push(products[dets.target.dataset.index])
        }
        var clutter = "";
        cart.forEach(function(pro) {
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500">
                <img src="${pro.image}" alt="">
            </div>
            <div>
                <h3 class="font-semibold">${pro.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">${pro.price}</h5>
            </div>
        </div>`;
        })

        document.querySelector(".cartexpnd").innerHTML = clutter;
    })

}
addToCart();


/*  */