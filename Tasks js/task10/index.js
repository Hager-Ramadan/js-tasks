const todosContainer = document.getElementById("todos-container");
const btnCompleted = document.getElementById("completed");
const btnNotCompleted = document.getElementById("not-completed");
let todos = [];
// let xmlHttp = new XMLHttpRequest();
// xmlHttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
// xmlHttp.send();
// xmlHttp.onload = function(){
//     let data = JSON.parse(xmlHttp.responseText);
//     renderElements(data);
// };

// let todoPromise = new Promise(function(resolve,reject){
//     let xmlHttp = new XMLHttpRequest();
// xmlHttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
// xmlHttp.send();
// xmlHttp.onload = function(){
//     let data = JSON.parse(xmlHttp.responseText);
//     resolve(data);
// };
// })

// todoPromise.then((res)=> {
//     renderElements(res);
// })

// let todos = fetch("https://jsonplaceholder.typicode.com/todos");
// todos
//     .then(function(res){
//         return res.json();
// })
//     .then(function(data){
//         renderElements(data);
// });
async function getTodos() {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos");
    data = await data.json();
    todos = data;
    renderElements(data);
}
getTodos()


function renderElements(data) {
    data = data.map(function ({title, completed}) {
        return `<div class="col-12">
        <div class="card my-3">
        <div class="card-header">${
            completed ? "Completed" : "Not Completed"
        }</div>
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
        </div>
        </div>
    </div>`;
    })
    todosContainer.innerHTML += data.join("")
}
btnCompleted.addEventListener("click", function () {
    let newTodos = todos.filter(function (item) {
        return item.completed;
    })
    todosContainer.innerHTML = "";
    renderElements(newTodos);
})
btnNotCompleted.addEventListener("click", function () {
    let newTodos = todos.filter(function (item) {
        return ! item.completed;
    })
    todosContainer.innerHTML = "";
    renderElements(newTodos);
})
