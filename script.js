
const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () => {
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg() {
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}

const blackWatchClick = document.querySelector('#blackWatch');
const greenWatchClick = document.querySelector('#greenWatch');
const pinkWatchClick = document.querySelector('#pinkWatch');
const blueWatchClick = document.querySelector('#blueWatch');
const whiteWatchClick = document.querySelector('#whiteWatch');
const addToCart = document.querySelector('#addToCart');
const modalButton = document.querySelector('#modalButton');
const blackItem = document.querySelector('#Black');
const greenItem = document.querySelector('#Green');
const pinkItem = document.querySelector('#Pink');
const blueItem = document.querySelector('#Blue');
const whiteItem = document.querySelector('#White');

let cartItems = {};
let currentSeletedWatch = 'Black';

blackWatchClick.addEventListener('click', function () {
    currentSeletedWatch = 'Black';
});
greenWatchClick.addEventListener('click', function () {
    currentSeletedWatch = 'Green';
});
pinkWatchClick.addEventListener('click', function () {
    currentSeletedWatch = 'Pink';
});
blueWatchClick.addEventListener('click', function () {
    currentSeletedWatch = 'Blue';
});
whiteWatchClick.addEventListener('click', function () {
    currentSeletedWatch = 'White';
});

addToCart.addEventListener('click', function () {
    if (cartItems[currentSeletedWatch]) {
        cartItems[currentSeletedWatch] += 1;
    } else {
        cartItems[currentSeletedWatch] = 1;
    }
    alert('Item Added To Cart Successfully');
    // console.log(cartItems);
});

function tableDataLoad() {
    let tableData = "";
    tableData += '<tr>';
    tableData += '<th> Item </th>'
    tableData += '<th> Price </th>'
    tableData += '<th> Quantity </th>'
    tableData += '<th> Total </th>'
    tableData += '<th> Remove Item </th>'
    tableData += '</tr>'
    for (let x in cartItems) {
        console.log('XData===> ', x);
        tableData += '<tr>';
        tableData += '<td>' + x + ' Watch </td>'
        tableData += '<td>' + 1999 + '</td>'
        tableData += '<td>' + cartItems[x] + '</td>'
        tableData += '<td>' + cartItems[x] * 1999 + '</td>'
        tableData += '<td id="' + x + '"><i class="fa fa-trash"></i></td>'
        tableData += '</tr>'
    }

    document.getElementById("table").innerHTML = tableData;
    attachClickEvent(); // Attach the click event after updating the table
}

function attachClickEvent() {
    const table = document.getElementById("table");
    table.addEventListener("click", function (event) {
        if (event.target && event.target.className === "fa fa-trash") {
            const itemId = event.target.parentNode.id;
            if (itemId) {
                removeItem(itemId);
            }
        }
    });
}

function removeItem(itemId) {
    console.log("Hello remove Clicked");
    updateTableAndCart(itemId);
}

function updateTableAndCart(itemId) {
    // Remove the item from cartItems
    delete cartItems[itemId];

    // Update the table with the new cartItems data
    tableDataLoad();
}

modalButton.addEventListener('click', function () {
    tableDataLoad();

})


// ----------------------------ZOOOOOM ----------------------------


var zoomLevel = 1;
var maxZoom = 1.15;
var minZoom = 1;

function zoomIn() {
    if (zoomLevel < maxZoom) {
        zoomLevel += 0.1;
        updateZoom();
    }
}

function zoomOut() {
    if (zoomLevel > minZoom) {
        zoomLevel -= 0.1;
        updateZoom();
    }

}

function updateZoom() {
    var zoomImage = document.getElementById('zoomImage');
    zoomImage.style.transform = 'scale(' + zoomLevel + ')';
}

