//EX2
//0.1
// const fruitList = ["apple", "banana", "tomato"];
// const list = document.createElement('ul')
// document.body.appendChild(list)
// fruitList.forEach((fruit) => {
//     let fruiT = document.createElement('li')
//     fruiT.innerText = fruit
//     list.appendChild(fruiT)
// })
// //0.2
// const imageSrc = "https://crocoder.dev/icon.png";
// const imagDiv = document.createElement('div')
// const imag = document.createElement('img')
// imag.src = imageSrc
// imag.style.height = '200px'
// imag.style.width = '200px'
// document.body.appendChild(imagDiv)
// imagDiv.appendChild(imag)
//0.3
// let listOfList = document.querySelectorAll('ul')
// listOfList.forEach((list) =>{
//     miniList = list.querySelectorAll('li')
//     miniList[0].outerText = 'first'
//     miniList[miniList.length - 1].outerText = 'last'
// })
//1
// const headLine = document.getElementById('h2')
// const input = document.getElementById('input')
// const button = document.getElementById('button')
// button.addEventListener('click',(event) =>{
//     event.preventDefault()
//     if(input.value != 0){
//     console.log(input.value);
//     headLine.innerText = input.value   
//     }
//     input.value = ""
// })
//2
// const cunter = document.getElementById('count')
// const cunterButtom = document.getElementById('Ex2')
// let count = 0;
// let fontSize = 16
// cunter.style.fontSize = `${fontSize}px`
// cunterButtom.addEventListener('click',(event) =>{
//     event.preventDefault()
//     count++
//     fontSize++
//     cunter.innerText = count.toString()
//     cunter.style.fontSize = `${fontSize}px`
// })
//4
// const header = document.createElement('h1')
// function updateHeading() {
//     header.textContent = "Heading - " + Math.floor(Math.random() * 100);
//   }  
// window.onload = updateHeading
// document.body.appendChild(header)
// const paragrafs = [
//     'dfsdfsdsdf',
//     'fgdfgdfgcvfgsgsgss',
//     'dgdfgdfgdgad'
// ]
// paragrafs.forEach((para)=>{
//     const p = document.createElement('p')
//     p.innerText = para
//     document.body.appendChild(p)
// }
// )
//5
const inputEx5 = document.getElementById('myInput')
const subEx5 = document.getElementById('submit')
subEx5.addEventListener('click',(event)=>{
    event.preventDefault()
    if(inputEx5.value == 0){
        console.log('erro');
    }
    else{
        inputEx5.value = ""
    }
})
//6
const hello = document.getElementById('hello')
const goodbye = document.getElementById('goodbye')
hello.addEventListener('click',(event)=>{
    event.preventDefault()
    console.log('hello');
})
goodbye.addEventListener('click',(event)=>{
    event.preventDefault()
    console.log('goodbye');
})
//7
const input_todo = document.getElementById("input_todo");
const todoListEl = document.getElementById("todo-list");
  
function addTodo(e) {
    e.preventDefault(); 
    if(input_todo.value != 0){
        const newTodo = document.createElement("li");
        newTodo.innerText = input_todo.value;
        todoListEl.appendChild(newTodo);
        newTodo.style.cursor ='pointer'
        newTodo.addEventListener("click", () => {
            if(newTodo.style.textDecoration === 'line-through'){
                newTodo.style.textDecoration = '' 
            }
            else{
                newTodo.style.textDecoration = 'line-through';
            }

        });
        todoListEl.appendChild(newTodo);
        input_todo.value = "";    
    }
    
  }
