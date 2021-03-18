const greet = require('./greeting');

//1st requirement : greetname(name); input (name) output : 'Hello, Bob' where name === Bob

test('receive name to print Hello + name', () => {
    expect(greet('Bob')).toBe('Hello, Bob.')
})


//2nd requirement : Handle nulls by introducing a stand-in. 
//For example, when name is null, then the method should return the string "Hello, my friend."


test('handle null case', () => {
    expect(greet(null)).toBe('Hello, my friend.')
})


//3rd requirement : Handle shouting. When name is all uppercase, then the method should shout
//  back to the user. For example, when name is "JERRY" then the method should return the string "HELLO JERRY!"

test('handle if all the characters are upper case', () => {
    expect(greet('JERRY')).toBe('HELLO JERRY!')
})



//4th requirement : Handle two names of input. When name is an array of two names (or, in languages that support it,
// varargs or a splat), then both names should be printed. For example, when name is ["Jill", "Jane"], 
//then the method should return the string "Hello, Jill and Jane."

test('handle if the input is an array of 2 elements', () => {
    expect(greet(['Jill', 'Jane'])).toBe('Hello, Jill and Jane.')
})



//struglle : swithc up the code to pass all the tests?

//5th requirement : Handle an arbitrary number of names as input. When name represents more than two names, 
//separate them with commas and close with an Oxford comma and "and". For example,
// when name is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte."

test('handle if the input is an array of 2 elements', () => {
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe('Hello, Amy, Brian, and Charlotte.')
})



//6th requirement : Allow mixing of normal and shouted names by separating the response into two greetings.
// For example, when name is ["Amy", "BRIAN", "Charlotte"], then the method should return 
//the string "Hello, Amy and Charlotte. AND HELLO BRIAN!"

// what if there are more than 2 uppercases
// uppercase --> HELLO Upper casee


test('handle if the input is the mixong of names with all upper and others', () => {
    expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe('Hello, Amy, and Charlotte. AND HELLO BRIAN!')
})


//7th requirement :  If any entries in name are a string containing a comma, split it as its own input.
// For example, when name is ["Bob", "Charlie, Dianne"], 
//then the method should return the string "Hello, Bob, Charlie, and Dianne.".

// ["Bob", "Charlie, Dianne"] --> ["Bob", "Charlie,","Dianne"]


test('handle if the element in arrays contain ,', () => {
    expect(greet(["Bob", "Charlie, Dianne"])).toBe('Hello, Bob, Charlie, and Dianne.')
})



// last requirement finally ! : Allow the input to escape intentional commas introduced by Requirement 7. 
//These can be escaped in the same manner that CSV is, with double quotes surrounding the entry. 
//For example, when name is ["Bob", "\"Charlie, Dianne\""], 
//then the method should return the string "Hello, Bob and Charlie, Dianne.".


test('handle \ and " in the array ', () => {
    expect(greet(["Bob", "\"Charlie, Dianne\""])).toBe('Hello, Bob and Charlie, Dianne.')
})


//donee YAY!  00:02
