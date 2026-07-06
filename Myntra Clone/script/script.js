let bagitems = [];
displayitemtohomepage();
onload();

displayBagIcon();  
function onload() {
displayItemonHomePage();
displayBagIcon();
let storedBagItems = localStorage.getItem('bagitems');
if (storedBagItems) {
    bagitems = JSON.parse(storedBagItems);
}
}
function addtobag(itemid) {
    bagitems.push(itemid);
    displayBagIcon();  
    console.log("Added item:", itemid); 
    console.log("Bag items:", bagitems); 
localStorage.setItem("bagitems", JSON.stringify(bagitems));


}
function displayBagIcon() {
    let bagItemCountElement = document.querySelector(".bag-count");
    if (bagItemCountElement) {  // ✅ Element exist karta hai toh
        bagItemCountElement.innerText = bagitems.length;
    } else {
        console.log("bag-count element not found!");
    }
}

function displayitemtohomepage() {
    let itemContainerElement = document.querySelector(".items-container");
    let innerHTML = "";

    items.forEach(item => {  
        innerHTML += `
        <div class="item-container">
            <img class="item-image" src="${item.image}" alt="img">
            <div class="rating">${item.rating.start}⭐${item.rating.end}</div>
            <div class="company">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">${item.current_price}</span>
                <span class="original-price">${item.original_price}</span>
                <span class="discount">${item.discount}% off</span>
            </div>
            <button class="btn-add-bag" onclick="addtobag('${item.id}')">Add to bag</button>  
        </div>`;
    });  

    itemContainerElement.innerHTML = innerHTML;
}