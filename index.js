// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}
console.log(destructivelyAppendCat())

function destructivelyPrependCat(name) {
    cats.unshift(name)
}


function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    return [...cats, name]
}
console.log(appendCat("asdfghhj"))

function prependCat(name) {
    return [name, ...cats]
}

function removeLastCat() {
    return cats.slice(0, -1)
}

function removeFirstCat() {
    return cats.slice(1)
}



