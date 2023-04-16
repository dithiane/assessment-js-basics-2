///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
console.log("------------------------------------------------------------------------------Problem 1")

const summedPrice = cart.reduce((total, current) => total + current.price, 0)

console.log("The sum of all the food: ", summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`c`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
console.log("------------------------------------------------------------------------------Problem 2")

const calcFinalPrice = (cartTotal, c, tax) => cartTotal*(1 + tax) - c

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    The customer object for the cart page will have five properties:
    id: 0, Number - To identify uniqueness of the customer if the first name or last name is same for two or more customers
    firstName: "", String - The customer first name 
    lastName: "", String - The customer last name 
    email: "", String - The customer email, to send the offers, discounts
    membership: false/true, Boolean - The flag that show if customer has membership
    discount: 0, Number - The % of discount, what customer has
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
console.log("------------------------------------------------------------------------------Problem 3")

const customer = {
    id : 0,
    firstName: "",
    lastName: "",
    email: "",
    membership: false,
    discount: 0
}