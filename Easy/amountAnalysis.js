/*
  Implement a function `solve` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]


*/

function solve(transactions) {
    var spendEstimates = {};

    for (var i = 0; i < transactions.length; i++) {
        var t = transactions[i];
        if (spendEstimates[t.category]) {
            spendEstimates[t.category] = spendEstimates[t.category] + t.price;
        }else {
            spendEstimates[t.category] = t.price;
        }
    }
    var keys = Object.keys(spendEstimates);
    console.log(spendEstimates);

    var answer = [];
    for (var j = 0; j < keys.length; j++) {
        var category = keys[j];
        var obj = {
            category_name: category,
            total_amount_spent_on_category: spendEstimates[category]
        };
        answer.push(obj);
    }
    console.log(answer);
}

var transactions = [
    {
        itemName: "Apple",
        category: "Fruits",
        price: 200,
        timestamp: "13-05-2024",
    },
    {
        itemName: "Orange",
        category: "Fruits",
        price: 80,
        timestamp: "13-05-2024", 
    },
    {
        itemName: "Pineapple",
        category: "Fruits",
        price: 120,
        timestamp: "13-05-2024",
    },
    {
        itemName: "Lays",
        category: "Snacks",
        price: 50,
        timestamp: "13-05-2024",
    },
    {
        itemName: "Coke",
        category: "Beverages",
        price: 100,
        timestamp: "13-05-2024",
    },
];

solve(transactions);