//Author: Jordan Sze
//Professor Melissa Lynch
//CSCI 39547
//Assignment #2
//Recreation of several common javascript methods without using the respective method for each function


var numbers = [1, 2, 3, 4, 11, 12, 13, 14]; // array use
const objected = {
    a: 1,
    b: 2,
    c: 3
  };// object use

//Use in place of callback arguments
function test(arg)
{
    return 1;
}

//forEach
//Applies callback to each array element
function myEach(callback, array)
{
    for (let i = 0; i < array.length; i++) 
        callback(array[i]);
}

//Map
//Pushes each array element to a new mapped array
function myMap(callback, array)
{
    var mapArray = [];
    
    for (let i = 0; i < array.length; i++) 
        mapArray.push(callback(array[i]));
    
    return mapArray;
}

//Filter
//Pushes to filtered array when callback is applied to specific array element
function myFilter(callback, array)
{

    var filteredArray = []; 
    
    for(let i = 0; i < array.length; i++)
    {
        var funct = callback(array[i]);
        
        if(funct)
            filteredArray.push(funct);
    }

    return filteredArray;
}

//Some or Any
//Returns true if callbacked element is found
function mySome(callback, array)
{
    for(let i = 0; i < array.length; i++) 
    {
        if (callback(array[i]))
            return true;
    }

    return false;
}

//Every
//Returns false if there is no callbacked element found
function myEvery(callback, array)
{
    for(let i = 0; i < array.length; i++) 
    {
        if (!callback(array[i]))
            return false;
    }

    return true;
}

//Reduce
//Sum of all array elements
function myReduce(array)
{
    //Starts at first index to accomodate for
    //any variable type
    var sum = array[0];
    for(let i = 1; i < array.length; i++) 
        sum += array[i];

    return sum;
}

//Includes
//Returns true if specified element is found in array
function myIncludes(array, element)
{
    for(let i = 0; i < array.length; i++) 
    {
        if ((array[i] == element))
            return true;
    }

    return false;
}

//indexOf
//Returns index of first instance of specified element in array
function myindexOf(array, element)
{
    for(let i = 0; i < array.length; i++) 
    {
        if (array[i] == element)
            return i;
    }

    return -1;
}

//Push
//Adds element to array and returns the modified array
function myPush(array, elementToAdd)
{
    array[array.length] = elementToAdd;
    return array;
}

//lastIndexOf
//Returns index of last instance of specified element in array
function myUnshift(array, element)
{

    for(let i = array.length; i > 0; i--) 
    {
        if (array[i] == element)
            return i
    }

    return -1;

}

//keys
//Returns all key values of object
function grabKeys(object)
{
    return Object.getOwnPropertyNames(object);
}

//values
//Pushes all values found into value array and returns that array
function grabValues(object)
{
    var valueArray= [];

    for (var key of Object.keys(object)) 
        valueArray.push(object[key]);

    return valueArray;
}
