const list = document.querySelector("#list");
const taskInput = document.querySelector("#task");
const addButton = document.querySelector("#add");

addButton.addEventListener("click", () => {
  if (taskInput.value === ""){
    alert("Please Enter Text");

    return;
  }
  
  const li = document.createElement("li");
  li.innerHTML = `
    ${taskInput.value}
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  `;
  
  list.appendChild(li);
  taskInput.value = "";
});

list.addEventListener("click", (event) => {
  if (event.target.className === "delete") {
    event.target.parentElement.remove();
  } else if (event.target.className === "edit") {
    const task = event.target.parentElement.firstChild.textContent;
    taskInput.value = task;
    event.target.parentElement.remove();
  }
});
