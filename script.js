// JavaScript code
const chocolates = document.querySelectorAll('.chocolate');
const selectedList = document.getElementById('selected-list');
const totalPriceDisplay = document.getElementById('total-price');

let totalPrice = 0;

chocolates.forEach(chocolate => {
    chocolate.addEventListener('click', () => {
        if (chocolate.classList.contains('selected')) {
            chocolate.classList.remove('selected');
            removeItemFromList(chocolate.dataset.name);
            totalPrice -= parseFloat(chocolate.dataset.price);
        } else {
            if (getSelectedChocolatesCount() < 8) {
                chocolate.classList.add('selected');
                addItemToList(chocolate.dataset.name);
                totalPrice += parseFloat(chocolate.dataset.price);
            } else {
                alert('You can select up to 8 chocolates.');
            }
        }
        updateTotalPrice();
    });
});

function getSelectedChocolatesCount() {
    return document.querySelectorAll('.chocolate.selected').length;
}

function addItemToList(chocolateName) {
    const listItem = document.createElement('li');
    listItem.textContent = chocolateName;
    selectedList.appendChild(listItem);
}

function removeItemFromList(chocolateName) {
    const items = selectedList.querySelectorAll('li');
    items.forEach(item => {
        if (item.textContent === chocolateName) {
            selectedList.removeChild(item);
        }
    });
}

function updateTotalPrice() {
    totalPriceDisplay.textContent = totalPrice.toFixed(2);
}
