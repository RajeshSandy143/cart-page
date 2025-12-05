var totalPriceEl;
var allCards;
var allSelectors;

function showCartMessage() {
    var msgBox = document.getElementById('message-box');
    if (msgBox) {
        msgBox.style.display = 'block';
        setTimeout(function() {
            msgBox.style.display = 'none';
        }, 2000);
    } else {
        console.log("Item added to cart! (Message box element not found)");
    }
}

function updateTotal(cardElement) {
    if (totalPriceEl && cardElement) {
        var newPrice = cardElement.getAttribute('data-price');
        totalPriceEl.innerHTML = 'DKK ' + parseFloat(newPrice).toFixed(2);
    }
}

function handleProductSelect(id, event) {
    if (event.target.tagName === 'SELECT' || event.target.tagName === 'OPTION') {
        return;
    }

    var newCardId = 'card-' + id;
    var newSelectorsId = 'selectors-' + id;

    var i;
    for (i = 0; i < allCards.length; i++) {
        allCards[i].classList.remove('selected');
    }
    for (i = 0; i < allSelectors.length; i++) {
        allSelectors[i].classList.remove('active');
    }

    var selectedCard = document.getElementById(newCardId);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }

    var selectedSelectors = document.getElementById(newSelectorsId);
    if (selectedSelectors) {
        selectedSelectors.classList.add('active');
    }
    
    updateTotal(selectedCard);
}

function init() {
    totalPriceEl = document.getElementById('total-price');
    
    allCards = document.querySelectorAll('.product-card');
    allSelectors = document.querySelectorAll('.selectors-container');
    
    var defaultCard = document.getElementById('card-2');
    updateTotal(defaultCard);
}

document.addEventListener('DOMContentLoaded', init);