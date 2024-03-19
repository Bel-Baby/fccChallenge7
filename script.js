/*While this is a simple example, it demonstrates how the call stack steps through your code and calls multiple functions.Remove your callStack array, the a(), b(), and c() functions, and the console.log() statement.
//In computer science, a stack is a data structure where items are stored in a LIFO (last-in-first-out) manner. If you imagine a stack of books, the last book you add to the stack is the first book you can take off the stack. Or an array where you can only .push() and .pop() elements.The call stack is a collection of function calls stored in a stack structure. When you call a function, it is added to the top or of the stack, and when it returns, it is removed from the top / end of the stack.Initialize a variable named callStack and assign it an empty array.
const callStack = [
    //In your callStack array, add the following string: a(): returns "freeCodeCamp " + b(). This represents the function call and the code that will be executed.
    //'a(): returns "freeCodeCamp " + b()',
    //Next, add the following string to your callStack array: b(): returns "is " + c().
    //'b(): returns "is " + c()', 
    //And since b() calls c(), the function c() is added to the call stack.Add the following string to your callStack array: c(): returns "awesome!".
    //'c(): returns "awesome!"' //remove c() and //update b().
    //'b(): returns "is " + "awesome!"' //remove b() and update a() to the following: a(): returns "freeCodeCamp " + "is awesome!".
    //'a(): returns "freeCodeCamp " + "is awesome!"' //remove updated a().
];

//Awesome. Now you have a more efficient way to convert decimal numbers into binary. After learning a bit about the call stack and recursion, you'll refactor the decimalToBinary function to use recursion instead of a while loop.Create a function named a that returns the following: "freeCodeCamp " + b().
const a = () => {
    return "freeCodeCamp " + b();
};
//Next, create a function named b that returns the following: "is " + c().Also, create a function named c that returns the following: "awesome!"
const b = () => {
    return "is " + c();
};

const c = () => {
    return "awesome!";
};
console.log(a());
*/
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");

//Use an array of objects to store data for each frame of the animation.
const animationData = [
    //Add an object to animationData with an inputVal property set to 5, a marginTo
    { inputVal: 5, marginTop: 300, addElDelay: 1000, msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.', showMsgDelay: 15000, removeElDelay: 20000 },//For the last animation object, add the property msg set to the following string:decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.Also, add the property showMsgDelay set to 15000 and the property removeElDelay set to 20000.

    //Treat your animationData array as a stack and add a new object to it. Your new object should have the properties inputVal, marginTop, and addElDelay set to 2, -200, and 1500, respectively. Remember to add this object to the top of the stack, or in other words, to the end of the animationData array.
    { inputVal: 2, marginTop: -200, addElDelay: 1500, msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.', showMsgDelay: 10000, removeElDelay: 15000 },//For the object in the middle of the stack, add the property msg set to the following string:decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.Also, add the property showMsgDelay set to 10000 and the property removeElDelay set to 15000.

    //Add another object to the animationData array. Your new object should have the properties inputVal, marginTop, and addElDelay set to 1, -200, and 2000, respectively. Remember to treat the animationData array as a stack and add the new object to the top of the stack.
    { inputVal: 1, marginTop: -200, addElDelay: 2000, msg: "decimalToBinary(1) returns \"1\" (base case) and gives that value to the stack below. Then it pops off the stack.", showMsgDelay: 5000, removeElDelay: 10000 }//Add the property msg to the animation object at the top of the stack, and set its value to an empty string.Set the value of the msg property to the following string: decimalToBinary(1) returns "1" (base case) and gives that value to the stack below. Then it pops off the stack.Next, add the property showMsgDelay with the value 5000 and removeElDelay with the value 10000.
];

/*Now that you have a better understanding of how the call stack and recursion work, you'll refactor the decimalToBinary() function to use recursion instead of a while loop.First, remove your countDownAndUp() function and function call.
//Create a new function named countDownAndUp with number as a parameter.
const countDownAndUp = (number) => {
    //The first thing you need to do is log the current value of number to the console to act as the countdown.
    console.log(number);
    //Since your countdown() function will count down from a given number to zero, the base case is when the number parameter is equal to 0. Then it should return to break out of its recursive loop.Use an if statement to check if number is equal to 0. If it is, use the return keyword to break out of the function.
    if (number === 0) {
        //In your base case, log Reached base case to the console.
        console.log("Reached base case");
        return;
    }//Recursive functions also have a recursive case, which is where the function calls itself.
    else{
        //When writing the recursive case, you need to remember two things:What is the base case?...What is the least amount of work you need to do to get closer to the base case?...Since the base case is when number is equal to 0, you need to call countdown() again while also lowering the value of number by 1.
        countDownAndUp(number - 1);
        //Then, log number to the console after your recursive countDownAndUp(number - 1) function call.
        console.log(number);
    }
};
//Call countdown() with an argument of 3 to see if it works.
countDownAndUp(3);
*/

//Create a function called decimalToBinary with input as a parameter.
//const decimalToBinary = (input) => {
/*
//Binary numbers are a base-2 number system. Unlike the base-10 or decimal number system we use every day that uses 10 digits (0-9) to form numbers, the binary number system only has two digits, 0 and 1. In computer science, these binary digits are called bits, and are the smallest unit of data computers can process. For computers, 0 represents false or "off", and 1 represents true or "on".In your decimalToBinary function, use the return keyword to return a string of the binary number representation of true.
return "1";
*/

/*//In your decimalToBinary function, convert the number 10 into binary and return it as a string.
return "1010";*/

/*//In your decimalToBinary function, convert the number 118 into binary with leading zeros and return it as a string.
return "01110110";*/

//First, you need to create some arrays to store the inputs and results of the division you'll do in the following steps. These will make it easier to see how the decimal to binary conversion works.Remove the return statement from your decimalToBinary function. Then, declare variables named inputs, quotients, and remainders, and assign an empty array to each of them.
//const inputs = [];
//const quotients = [];
//const remainders = [];

/*//Set input equal to the number 0 for now. We'll change this in the next few steps.
input = 0;*/

//Your decimalToBinary function works well, but there is an issue – because of the condition in your while loop, it only works for numbers greater than 0. If you try to convert 0 to binary, nothing will get added to the page.To fix this, add an if statement to check if input is equal to 0. Leave the body of the if statement empty for now.
//if (input === 0) {
//Within the body of the if statement, set the innerText property of result equal to the string 0. Then, use an early return statement to break out of the function early.
//  result.innerText = "0";
//  return;
//}

//For the decimal to binary conversion, you need to divide input by 2 until the quotient, or the result of dividing two numbers, is 0. But since you don't know how many times you need to divide input by 2, you can use a while loop to run a block of code as long as input is greater than 0 and can be divided.As a reminder, a while loop is used to run a block of code as long as the condition evaluates to true, and the condition is checked before the code block is executed.Create a while loop that runs as long as input is greater than 0. Leave the body of the loop empty for now.
//while (input > 0) {
/*//Inside your while loop, create a variable named quotient and assign it the value of input divided by 2.
const quotient = input/2;*/

//Like you saw in the last step, division can lead to a floating point number, or a number with a decimal point. The best way to handle this is to round down to the nearest whole number.Use the Math.floor() function to round down the quotient of input divided by 2 before it's assigned to quotient.
//  const quotient = Math.floor(input / 2);
//Inside your while loop, create a variable named remainder and use the remainder operator to assign it the remainder of input divided by 2.
//  const remainder = input % 2;
//Inside your while loop, use the .push() method to append input to the inputs array. This will help you get a better idea of how the conversion works later when you log the contents of your arrays to the console.
//  inputs.push(input);
//Use .push() to append the quotient variable to the quotients array. Also, append the remainder variable to the remainders array.
//  quotients.push(quotient);
//  remainders.push(remainder);

/*//The tricky part about while loops is that, if you're not careful, they can run forever. This is called an infinite loop, and can cause your browser to crash.To avoid infinite loops, you need to make sure that the condition for the while loop eventually becomes false. In this case, you want to make sure that the input variable eventually becomes 0.Move the input = 0 statement into the body of the while loop. This will make it so that the loop will only run up to one time.
input = 0;*/

//Now that you have an operation that will lower the value of input each time the loop runs, you don't have to worry about the loop running forever.Update the last line of your while loop and assign quotient to input.
// input = quotient;
//}
//Log the text Inputs: , followed by a comma, followed by the inputs array to the console.
//console.log("Inputs: ", inputs);
//console.log("Quotients: ", quotients);
//console.log("remainders: ", remainders);
//Now if you enter in the number 6 and click the Convert button, you'll see the following output:Inputs:  [ 6, 3, 1 ], Quotients:  [ 3, 1, 0 ], Remainders:  [ 0, 1, 1 ].Notice that the remainders array is the binary representation of the number 6, but in reverse order.Use the .reverse() method to reverse the order of the remainders array, and .join() with an empty string as a separator to join the elements into a binary number string. Then, set result.innerText equal to the binary number string.
//result.innerText = remainders.reverse().join("");

//There are some ways to improve it. For example, it's not necessary to keep track of the inputs and quotients. We can clean things up so the function is more efficient.First, remove everything in the body of the decimalToBinary function. Then, use let to create a variable named binary and assign it an empty string.
//let binary = "";

//Finally, you need to handle cases where input is 0. Rather than update the DOM and return early like you did before, you can update the binary string and let the rest of the code in the function run.
//if (input === 0) {
//  binary = "0";
//}

//Create a while loop that runs as long as input is greater than 0. Inside the loop, assign 0 to input for now.Note: Be careful not to trigger the decimalToBinary function before you set input equal to 0 inside the loop. Otherwise, you could cause an infinite loop.
//while (input > 0) {
/*//use the remainder operator (%) to set binary equal to the remainder of input divided by 2.
binary = input % 2;*/

//Then, use the addition operator to add the current value of binary to the end of the equation input % 2. This is what will build the binary string from right to left.
//  binary = (input % 2) + binary;//To clean things up a bit, wrap input % 2 in parentheses. This can sometimes change the order of operations, but in this case, it just makes your code easier to read.

//Inside your while loop, set input equal to the quotient of input divided by 2. Also, remember to use Math.floor() to round the quotient down.
//input = Math.floor(input / 2);
//}
//result.innerText = binary;
//}

//replaced contents of your decimalToBinary() function here.
const decimalToBinary = (input) => {
    /*
    //As a reminder, it's often best to start with the base case when writing a recursive function so you know what you're working towards, and to prevent an infinite loop.Similar to your last implementation, you'll divide input by 2 repeatedly until input is 0.
    if (input === 0) {
        return "0";//Update your base case so that it returns the string "0" when input is equal to 0
    }//This mostly works – if you convert 0 into binary, 0 is displayed on the page. But now when you convert other numbers greater than 0, your binary number starts with a leading 0. For example, if you convert 1, the result is 01.Add an else if statement to your function that checks if input is equal to 1. If it is, return the string "1".
    else if (input === 1){
        return "1";
    }
    */
    //Repalced the previous if and else if statement with this single if statement and returned as string.
    if (input === 0 || input === 1) {
        return String(input);
    }
    //For the recursive case, add an else statement and return the result of calling decimalToBinary(). Pass in input divided by 2 rounded down with Math.floor() as the argument.
    else {
        //However, remember that the binary number string is built by calculating the remainder of input divided by 2 and concatenating that to the end.After your call to decimalToBinary(), use the addition operator (+) to concatenate the remainder of input divided by 2 to the end of the string your recursive function returns. Also, wrap the operation in parentheses.
        return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    }
}

//If you're still confused about how it(recursion) works under the hood, don't worry. Next, you'll create a simple animation to help you understand what's happening each step of the way.Create a new function called showAnimation.
const showAnimation = () => {
    //Add three console.log() statements in the showAnimation() function to log the text free, Code, and Camp to the console. You should see that text in the console when you enter 5 into the number input and click the Convert button.
    //console.log("free");

    //If you test your code, you'll notice that your console logs are not in the expected order. Instead of logging free, pausing for a second before logging Code, and finally logging Camp, you'll see this: free, Camp, Code.This is because the setTimeout() function is asynchronous, meaning that it doesn't stop the execution of the rest of your code. All the code in the showAnimation() function runs line by line, but because setTimeout() is asynchronous, free and Camp are logged to the console immediately, and then Code is logged to the console after a one second delay.One way to fix this is to use multiple setTimeout() functions. Use setTimeout() to log free to the console after half a second, or 500 milliseconds.
    //setTimeout(()=>{console.log("free")}, 500);

    //setTimeout(() => console.log("Code"), 1000);//Before you start writing code for the animation, let's take a look at the function you'll use to add and remove elements from the DOM: setTimeout.Use the setTimeout function to add a one second delay before the text Code is logged to the console. Then see what happens after you enter 5 into the number input and click the Convert button.

    //While asynchronous, or async, code can be difficult to understand at first, it has many advantages. One of the most important is that it allows you to write non-blocking code.For example, imagine you're baking a cake, and you put the cake in the oven and set a timer. You don't have to sit in front of the oven waiting the entire time – you can wash dishes, read a book, or do anything else while you wait for the timer to go off.Add a 1500 millisecond delay before the text Camp is logged to the console.
    //setTimeout(() => {console.log("Camp")}, 1500);

    //Replace the above animation with the following.
    result.innerText = "Call Stack Animation";
    //Next, use the .forEach() method to loop through the animationData array. For the .forEach() method's callback function, pass in obj as a parameter.
    animationData.forEach((obj) => {
        //Since you have the timing for each frame of animation stored in addElDelay, you can use that value with setTimeout() to set up the delay to add elements to the DOM.Within the body of the .forEach() method's callback function, add a setTimeout() function. Pass in an empty callback function as the first argument, and obj.addElDelay as the second argument.
        setTimeout(() => {
            //Use the compound assignment operator (+=) to set the innerHTML property of the animationContainer to a template literal string and create the paragraph tag. Then use string interpolation to set the id attribute to the inputVal property of the current object, obj.Add a style attribute to the paragraph element and use string interpolation to set the value to margin-top: ${currMarginTop}px;, where currMarginTop is the marginTop property of the current object.Add a class attribute set to animation-frame.
            animationContainer.innerHTML += `
                <p id="${obj.inputVal}" style="margin-top: ${obj.marginTop}px" "class="animation-frame">decimalToBinary(${obj.inputVal})</p>
            `;//Finally, use string interpolation to set the text of the paragraph element to decimalToBinary(${currVal}), where currVal is the inputVal property of the current object. After this, test out your code by entering the number 5 into the number input and clicking the Convert button.
        }, obj.addElDelay);

        //Add another setTimeout() function. Pass in an empty callback function as the first argument, and pass in the showMsgDelay property of the current object as the second argument.
        setTimeout(() => {
            //You used the inputVal property as the id attribute for your paragraph elements. Now you can target those the paragraph elements with those ids.
            document.getElementById(obj.inputVal).textContent = obj.msg;
        }, obj.showMsgDelay);//Using the .getElementById() method, set the textContent property of the targeted element equal to the msg property of the current object.

        //Next, you'll remove the paragraph elements from the #show-animation element after the delays you specified earlier.Add a setTimeout() function to your .forEach() loop. Pass in an empty callback function as the first argument, and pass in the removeElDelay property of the current object as the second argument.
        setTimeout(() => {
            //Use the .getElementById() method to target the element with the id attribute with the value of the inputVal property of the current object. Then, use the .remove() method on that element to remove it from the DOM after the delay.
            document.getElementById(obj.inputVal).remove();
        }, obj.removeElDelay);
    });

    //The last thing you need to do is add the result of converting the number 5 into binary to the page once the animation is complete.After the .forEach() method, add another setTimeout() function. Pass in an empty callback function as the first argument, and a delay of 20000 milliseconds as the second argument.
    setTimeout(() => {
        //Finally, set the textContent property of result equal to calling decimalToBinary() with 5 as an argument. After this, test out your code by entering the number 5 into the number input and clicking the Convert button.
        result.textContent = decimalToBinary(5);
    }, 20000);
}

//Do some setup to check the value in the number input element whenever the user clicks the Convert button.First, create an empty function called checkUserInput.
const checkUserInput = () => {
    /*
    //It would be helpful to alert users if they don't enter a value into the number input, or the number they enter is invalid. While the input type="number" element makes validation easier by only allowing numbers and some special characters, remember that all values you get from HTML elements are actually strings. Also, if the number input is empty, the value property will be an empty string.
    if (numberInput.value === "") {

    }
    */
    /*
    //In JavaScript, some common falsy values you'll see are null, undefined, the number 0, and empty strings.Rather than check if a value is equal to a falsy value, you can use the logical NOT operator (!) to check if the value itself is falsy.Update the condition in your if statement to use the logical NOT operator to check if numberInput.value is falsy.
    if (!numberInput.value) {

    }
    */

    //Now your showAnimation() function is set up. But if you look closely at your checkUserInput() function, you'll notice that it's not very DRY – you're calling parseInt() to convert numberInput.value into a number several times.A simple way to fix this is to create a new variable to store the converted number. Then you only have to convert the number once and can use it throughout the function.
    const inputInt = parseInt(numberInput.value); //Now replace all instances of parseInt(numberInput.value) with inputInt.

    //Because the input type="number" element allows special characters like ., +, and e, users can input floats like 2.2, equations like 2e+3, or even just e, which you don't want to allow.A good way to check and normalize numbers in JavaScript is to use the built-in parseInt() function, which converts a string into an integer or whole number. parseInt() takes at least one argument, a string to be converted into an integer, and returns either an integer or NaN which stands for Not a Number.A good way to check and normalize numbers in JavaScript is to use the built-in parseInt() function, which converts a string into an integer or whole number. parseInt() takes at least one argument, a string to be converted into an integer, and returns either an integer or NaN which stands for Not a Number.Add a logical OR operator (||) after the first condition in your if statement. Then, pass the value of numberInput into the parseInt() function as the second condition of your if statement.
    //Next, you need to check if the value returned by the parseInt() function is a number or not.To do that, you can use the isNaN() function. This function takes in a string or number as an argument, and returns true if it evaluates to NaN.Update the second condition in your if statement to use the isNaN() function to check if the value returned by parseInt() is NaN.
    if (!numberInput.value || isNaN(inputInt)) {
        //In the body of the if statement, use the alert() method to display the text Please provide a decimal number.Note that alert() is a method on the window object in the browser, so you can use either window.alert() or alert().
        alert("Please provide a decimal number");
        //After alerting the user if the number input is empty or the value is not a number, you can use the return keyword to break out of this function early. This will prevent future code in this function from running.
        return;
    }
    //console.log(numberInput.value);

    //You'll show the animation when users try to convert the decimal number 5 to binary, so you'll need to add a check for that within your checkUserInput() function.Use an if statement to check if the value attribute of numberInput is equal to the number 5. Remember to use the parseInt() function to convert the string into a number before comparing it to 5. Leave the if statement empty for now.
    if (inputInt === 5) {
        //If the value of numberInput is equal to 5, call the showAnimation() function, then return early.
        showAnimation();
        return;
    }

    /*
    //Within your checkUserInput function, remove the console.log() statement. Then, call the decimalToBinary function and pass in the value of numberInput as an argument. Also, make sure to use the parseInt() function to convert the input into a number.
    decimalToBinary(parseInt(numberInput.value));
    */
    //set the textContent property of result equal to the string returned by your decimalToBinary() function.
    result.textContent = decimalToBinary(inputInt);
    //Clear the number input by setting its value to an empty string. Then later when you convert several numbers in a row, you won't have to delete the previous number before entering the next one.
    numberInput.value = "";
}

//Chain the .addEventListener() method to convertBtn. The event listener should listen for click events and take a reference to the checkUserInput function as a callback.Once that's done, whenever you click the Convert button, the value of the number input should be logged to the console.
convertBtn.addEventListener("click", checkUserInput);

//Your Convert button should be working now. But it could get tiring for users to enter in a number, then click that button each time they want to convert from decimal to binary. It would be much more convenient to perform the conversion when the Enter or Return key is pressed.The keydown event fires every time a user presses a key on their keyboard, and is a good way to add more interactivity to input elements.
numberInput.addEventListener("keydown", () => {
    /*//Whenever an event listener is triggered by an event, an event object is created automatically. You don't always need to use this object, like with your click handler above, but it can be useful to access information about the event that was triggered.First, pass e as a parameter to your callback function. Remember that e is a common parameter name for the event object. Next, log e to the console in the body your callback function.
    console.log(e);*/

    //If you open your browser's console and type in the number input, you'll see event objects logged to the browser. And if you take a closer look at one of those event objects, you'll see helpful properties like type and target.Since you want to perform an action when the Enter key is pressed, the most helpful property is key, which tells you the string value of the key that was pressed.Remove the console.log() statement from the callback function and add an if statement that checks if e.key is equal to the string Enter. Leave the body of your if statement empty for now.
    if (e.key === "Enter") {
        //Next, within the body of the if statement, call the checkUserInput() function.
        checkUserInput();
    }
});