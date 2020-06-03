//Author: Jordan Sze
//Professor Melissa Lynch
//CSCI 39547
//Assignment #2
//Recreation of several common javascript methods without using the respective method for each function


var numbers = [1, 2, 3, 4, 11, 12, 13, 14]; // array use
const object = {
    a: 'somestring',
    b: 42,
    c: false
  }; // object use

//Use in place of callback arguments
function test(arg)
{
    return 1;
}

//forEach
function myEach(callback, array)
{
    for (let i = 0; i < array.length; i++) 
    {
        callback(array[i]);
    }
}

//Map
function myMap(callback, array)
{
    var mapArray = [];
    for (let i = 0; i < array.length; i++) 
        mapArray.push(mapArray);
    
    return mapArray;
}

//Filter
function myFilter(callback, array)
{

    var filteredArray = []; 
    
    for(let i = 0; i < array.length; i++)
    {
        var funct = callback(array[i]);
        
        if(callback(i))
        {
            filteredArray.push(funct);
        }
    }

    return filteredArray;
}

//Some or Any
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
function myReduce(array)
{
    var sum = 0;
    for(let i = 0; i < array.length; i++) 
        sum += array[i];

    return sum;
}

//Includes
function myIncludes(array, element)
{
    for(let i = 0; i < array.length; i++) 
    {
        if ((array[i] = element))
            return true;
    }

    return false;
}

//indexOf
function myindexOf(array)
{
    for(let i = 0; i < array.length; i++) 
    {
        if (array[i])
            return i;
    }

    return -1;
}

//Push
function myPush(array, elementToAdd)
{
    array[array.length] = elementToAdd;
    return array;
}

//lastIndexOf
function myUnshift(array)
{
    var lastIndex = array[array.length - 1]

    for(let i = 0; i < array.length; i++) 
    {
        if (i = lastIndex)
            return array.length - 1;
    }

    return -1;

}
