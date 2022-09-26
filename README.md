# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @curtis-wils0n/lotide`

**Require it:**

`const _ = require('@curtis-wils0n/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

## Array functions

`head(array)`: Returns the first value of the provided array.

`tail(array)`: Returns the provided array without its first value (its head).

`middle(array)`: Returns the middle value of the provided array (both middle values if array's length is even).

`countOnly(array, itemsToCount)`: Receives an array of values and an object containing search keys with true and false values. Returns an object with a count per how many true-valued keys were found in the array.

`flatten(nestedArray)`: Returns a one-dimensional array from the provided array of nested values (works with only one level of nesting. Will implement recursive solution for handling any level of nesting in the future).

`map(array, callback)`: Returns a mutation of the provided array based on the results of the provided callback function.

`takeUntil(array, callback)`: Returns a copy of the provided array with values up until the condition set by the provided callback function is met.

`without(array, itemsToRemove)`: Returns a copy of the provided array with items specified by *itemsToRemove* removed.

## Object functions

`findKey(object, callback)`: Returns a key from the provided object based on specifications of the callback function.

`findKeyByValue(object, value)`: Returns a key from the provided object based on the provided value.

## String functions

`countLetters(string)`: Returns an object containing the number of times a character appeared in the provided string.

`letterPositions(string)`: Returns an object containing the index of each character found in the provided string.

## Equality checkers

`eqArrays(array1, array2)`: Returns *true* or *false* based on strict equality of values in provided arrays. Works with any level of array nesting.

`eqObjects(object1, object2)`: Return *true* or *false* based on strict equality of keys and values in provided objects. Works with any level of nesting.

## Assertion functions

`assertEqual(actual, expected)`: Returns *true* or *false* based on strict equality of primitive values provided and logs an assertion message to the console.

`assertArraysEqual(actual, expected)`: Returns *true* or *false* based on strict equality of arrays provided and logs an assertion message to the console.

`assertObjectsEqual(actual, expected)`: Returns *true* or *false* based on strict equality of objects provided and logs an assertion message to the console.