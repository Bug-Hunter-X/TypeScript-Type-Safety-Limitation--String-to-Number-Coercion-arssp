# TypeScript Type Safety Limitation: String to Number Coercion

This example demonstrates a common pitfall in TypeScript: the lack of runtime type checking for some implicit type conversions. 

The `add` function is declared to accept two numbers and return a number. However, the code allows for a string to be passed into the function. TypeScript's type system doesn't prevent this at compile time, but the runtime will throw an error because the '+' operator will try to concatenate strings rather than perform numeric addition.

The solution demonstrates using type guards and more robust type checking to prevent this kind of error.