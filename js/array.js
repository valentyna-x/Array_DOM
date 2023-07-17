'use strict';

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:

// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

// let askProduct = prompt('вкажіть назву продукту');
// let askQuantity = prompt('вкажіть кількість продукту');
// let askPrice = prompt('вкажіть ціну продукту');
// let totalCostsPerProduct = askQuantity * askPrice;

// alert(`ви зібралися купити ${askQuantity} одиниць ${askProduct} за ціною ${askPrice} гривень за одиницю на суму ${totalCostsPerProduct} гривень`);

// console.log(totalCostsPerProduct);

let shoppingList = [
    {
        name: 'shampoo',
        quantity: 3,
        price: 100,
        amount: 300,
        isBought: true,
    },

    {
      name: 'toothbrush',
      quantity: 2,
      price: 80,
      amount: 160,
      isBought: false,
 },

    {
        name: 'soap',
        quantity: 10,
        price: 25,
        amount: 250,
        isBought: true,
    },

   {
        name: 'napkins',
        quantity: 5,
        price: 20,
        amount: 100,
        isBought: false,
   },

   {    
        name: 'toothpaste',
        quantity: 1,
        price: 80,
        amount: 80,
        isBought: false,
}
];

console.log(shoppingList);


for (let name of shoppingList) {
    if(name.isBought === false) {
       console.log(name);
    }
};

for (let name of shoppingList) {
    if(name.isBought === true) {
       console.log(name);
    }
};


let sortedShoppingList = [...shoppingList];

let printShoppingList = (shoppingList) => {
   let sortedShoppingList = [...shoppingList];
   sortedShoppingList.sort((a, b) => {
     if (a.isBought === true && b.isBought === false) {
       return 1;
     }
     if (a.isBought === false && b.isBought === true) {
       return -1;
     }
     return 0;
   });
   console.log(sortedShoppingList);
 };

function deleteGood(arr, item) {
   let newShopingList = [];
   for (let good of arr) {
      if (good.name !== item) {
         newShopingList.push(good);
      } else continue;
   }
   return newShopingList;
}

console.log(deleteGood(shoppingList, "shampoo"));
//------------------------------

let blockList = document.querySelector('#btn-list');
let btnsList = document.querySelectorAll('a[data-bought]');

btnsList.forEach(item => {
    item.addEventListener('click', function() {
        let getList = item.getAttribute('data-bought');
        let nameList = item.getAttribute('status');
        blockList.insertAdjacentHTML('beforeend', `<p>List ${nameList}: ${getList}</p>`);
    });
});