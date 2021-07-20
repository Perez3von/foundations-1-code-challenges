// Use the filter or find array methods to solve these problems

/* 
Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

Output: 
[
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]
*/

export function getAllDairy(arr) {
    let myArr=[];
   arr.filter(function(item){

    if(item.category === 'dairy'){
        myArr.push(item);
    }
   })
    return myArr;
}

/*
Output: 
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    }
]
*/

export function getAllFruitsThatCostMoreThanTwo(arr) {
   let myArr =[];
   arr.filter(function(item){

    if(item.price > 2){
        myArr.push(item);
    }
   });
   return myArr;
    
}


/*
Output: 
    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
*/

export function findTheCheese(arr) {
    let obj;
   arr.filter(function(item){

    if(item.id === 'cheese'){
      obj = item;
    }
   });
   return obj;
   
}


/*
Output: 
['apple', 'banana']
*/

export function listNamesOfAllFruits(arr) {
    let myArr=[];
   arr.filter(function(item){

    if(item.category === 'fruit'){
        myArr.push(item.id);
    }
   })
    return myArr;
}