let fruit = ["🍎", "🍊", "🍒", "🥑", "🍍"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
let cherryShelf = document.getElementById("cherry-shelf")
let avocadoShelf = document.getElementById("avocado-shelf")
let pineappleShelf = document.getElementById("pineapple-shelf")

let fruitBasket = document.getElementById('fruit-basket')
fruitBasket.textContent = '' 
let fruitItem=[]
// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
function generateFruitBasket(){
    
    fruitItem.push(fruit[Math.floor(Math.random()*fruit.length)])
    fruitBasket.textContent+=fruitItem[fruitItem.length-1]
    //console.log(fruitItem)
    //console.log(fruitBasket)
}

// function sortFruit(){
//     for(let i=0; i<fruit.length; i++){
//         if(fruit[i]==="🍎"){
//            appleShelf.textContent += fruit[i];
//         } else if {
//             orangeShelf.textContent += fruit[i];
//         }
                             
//                                     }
//                     }

function sortFruit(){
    appleShelf.textContent=orangeShelf.textContent=cherryShelf.textContent=avocadoShelf.textContent=pineappleShelf.textContent='';
    for(let i=0; i<fruitItem.length; i++){
    switch(fruitItem[i]){
        case'🍎':
        appleShelf.textContent += fruitItem[i];
        break;
        case'🍊':
        orangeShelf.textContent += fruitItem[i];
        break;
        case'🍒':
        cherryShelf.textContent += fruitItem[i];
        break;
        case'🥑':
        avocadoShelf.textContent += fruitItem[i];
        break;
        case'🍍':
        pineappleShelf.textContent += fruitItem[i];
        break;
        default:
        console.log('Get Some Fruit First!');
    }
  }
}
//console.log(typeof(fruitBasket))
sortFruit()