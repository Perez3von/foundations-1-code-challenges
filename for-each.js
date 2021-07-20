// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Input:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]
*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    let myArr=[];
        arr.forEach(element => {
            myArr.push(element.name);
            
        });
    return myArr;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {

    let myArr =[];
    arr.slice().reverse().forEach(ele => 
        {

            myArr.push(ele.type);
        })

    return myArr ;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    let myArr=[];
    let ele={};
    arr.forEach(element => {
        ele['nombre'] = element.name;
        ele['tipo'] = element.type;
        myArr.push(ele);
        console.log(ele);
        
    });
return myArr;
}

