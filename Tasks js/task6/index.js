const formTasks = document.getElementById("tasks-form");
const taskTitle = document.getElementById("name");
const taskContainer = document.querySelector(".table tbody");
const btnSubmit = document.getElementById("submit-btn");
let tasks = JSON.parse(localStorage.getItem("tasks-list")) ?? [];
let statues = null;

function renderTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks-list"));
    tasks.forEach(function (item) {
        taskContainer.innerHTML += `
        <tr>
        <td>${
            item.title
        }</td>
        <td>
            <button class="btn btn-info btn-edit"  data-id = "${
            item.id
        }">Edit</button>
        </td>
        <td>
            <button class="btn btn-danger btn-delete" data-id = "${
            item.id
        }">Delete</button>
        </td>
    </tr> 
    `;
    })
}
renderTasks();

formTasks.addEventListener("submit", function (e) {
    e.preventDefault();

    if (status == null) {
        taskContainer.innerHTML += `
    <tr>
    <td>${
            taskTitle.value
        }</td>
    <td>
        <button class="btn btn-info btn-edit">Edit</button>
    </td>
    <td>
        <button class="btn btn-danger btn-delete">Delete</button>
    </td>
</tr> 
`;
        tasks.push({
            id: parseInt(
                (Math.random() * 10000)
            ),
            title: taskTitle.value
        })
        localStorage.setItem("tasks-list", JSON.stringify(tasks));

    } else {
        let storageData = JSON.parse(localStorage.getItem("tasks-list"));
        let newData = storageData.map(function (item) {
            if (item.id == statues) {
                return {id: statues, title: taskTitle.value}
            } else {
                return item;
            }
        })
        localStorage.setItem("tasks-list", JSON.stringify(newData));
        btnSubmit.classList.add("bg-success");
        btnSubmit.classList.remove("bg-info");
        btnSubmit.value = "Add";
        statues = null;
        taskContainer.innerHTML = '';
        renderTasks();
    } taskTitle.value = "";
});

taskContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-delete")) {
        let item = e.target;
        let id = item.getAttribute("data-id");
        let storageData = JSON.parse(localStorage.getItem("tasks-list"));
        let newData = storageData.filter(function (item) {
            return item.id != id;
        })
        localStorage.setItem("tasks-list", JSON.stringify(newData));
        item.parentElement.parentElement.remove();
    }
    if (e.target.classList.contains("btn-edit")) {
        let item = e.target;
        let taskTdTitle = item.parentElement.previousElementSibling.textContent;
        taskTitle.value = taskTdTitle;
        btnSubmit.value = "Update";
        btnSubmit.classList.remove("bg-success");
        btnSubmit.classList.add("bg-info");
        statues = item.getAttribute("data-id");
    }
})
