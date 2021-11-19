What is an array?
    A data type that contains a list of various data. Most languages have methods or functions that are intrinsict to the language to call or extract information from that array. All arrays are indexed numerically and depending on the language typically the index starts from 0.

What types of values can be held in an array?
    Anything from an integer, floating point number, string, array, or an object.

What happens if you try to contain values of different data types in an array?
    If you mix number and non number data types in an array you will not be able to perform methods that perform any type of mathematical operation on the array as you cannot add a string to an integer as they are different data types. 

What is the index of the first element in an array?
    In Javascript and most other languages the first index is zero. There are older languages like Fortran, Cobol, and Algo where the first index in an array is 1.

What is the index of the last element in an array?
    Again in most modern languages today the last index is one less than the length of the array (n-1).

If you control an array, what is the easiest way to determine the number of values?
    Useing the length method will give you the total lenght of the array.

When would the above method not work well, and what must you do in that case?
    Using the length method wont work if you have undefined, null or empty strings in your array as they will not have a value but still take up an index spot in the array.

What are two ways to make an array one element longer?
    using a method in your language, javascript uses arr.push(val), to add a new element to the end of your array. You can also asign a value to arr[n] = val; and you will add a new value to the end of the array because the last index value in the array is n-1. 

What are two ways to make an array two elements shorter?
    In Javascript there is a method called splice where you can pass in the index of the first value you want to remove and then the number of values from that index position to be removed, splice(pos, n). Otherwise you can use pop() and run it twice to remove two elements from the end. You could also use the shift() method to remove elements from the front of the array.

What is the upper limit on the number of values an array can hold?
    An array can hold up to 4294967296 (2^32) elements (32-bit integer). 

When working with arrays, does working “in-place” really matter? If so, when and why?
    Generally you do not want to affect the data directly but in the case where you are restricted on space and cannot store both the original array and the new array you may want to transform the original array rather. 

Which values are “falsy” in JavaScript, and what does “falsy” mean anyway?
    Falsy refers to values that in addition to their stated value will return as false when used in a boolean statment. Null, '', undefided, Nan, 0 and -0 will all return false. 

What does “passing by reference” mean?
    Passing by reference is when you use a pointer to a piece of data rather than grabing the data itself. This happens when you are passing an array or an object to a function. 

