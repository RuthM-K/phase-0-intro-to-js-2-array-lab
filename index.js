// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

cats.length = 3
//cats.push('Milo', 'Otis', 'Garfield')

function destructivelyAppendCat(name){
    if (name === cats.push('Ralph') ){
        return 'cats'
    }

} 

cats.length = 3

function destructivelyPrependCat(name){
    if (name === cats.unshift("Bob")){
        return 'cats'
    }
}

cats.length = 3

function destructivelyRemoveLastCat(){
    if( cats.pop()){
        return 'cats'

    }
}

cats.length = 3

function destructivelyRemoveFirstCat(){
    if(cats.shift()){
        return 'cats'
    }
}

cats.length = 3

 function appendCat(name){
    let newCats
    newCats = [...cats, name]
    return newCats
 }

 cats.length = 3

 function prependCat(name){
    let newCats
    newCats = [name, ...cats]
    return newCats
 }

 cats.length = 3

 function removeFirstCat(){
    let newCats
    if (newCats = cats.slice(1)){
        return newCats
    }
 }

 cats.length = 3

 function removeLastCat(){
    let newCats
    if(newCats = cats.slice(0, cats.length -1)){
        return newCats
    }
 }