// const taskinput =document.getElementById("addtext")
// const btnvalue = document.getElementById("btn")
// const list = document.getElementById("listitem")
// const taskArray = []

// btnvalue.addEventListener('click',function(){
//     const tasktext =taskinput.value
//     taskArray.push(tasktext)
//     const listitem = document.createElement('li')
//     const button = document.createElement('button')
//     listitem.innerHTML=` <li>${tasktext}</li>`
//     list.append(listitem)
//     taskinput.value=""
//     console.log(taskArray)

// })


// const taskInput = document.getElementById("addtext");
// const btnValue = document.getElementById("btn");
// const list = document.getElementById("listitem");
// const taskArray = [];

// btnValue.addEventListener("click", function () {
//     const taskText = taskInput.value;
//     taskArray.push(taskText);

//     const listItem = document.createElement("li");
//     listItem.innerHTML = `<li>${taskText}</li>`;

//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.addEventListener("click", function () {

//         const index = taskArray.indexOf(taskText);
//         if (index !== -1) {
//             taskArray.splice(index, 1);
//         } 
//         list.removeChild(listItem);
//         console.log(taskArray);
//     });

//     listItem.appendChild(deleteButton);
//     list.appendChild(listItem);
//     taskInput.value = "";
//     console.log(taskArray);
// });

// const taskInput = document.getElementById("addtext");
//       const btnValue = document.getElementById("btn");
//       const list = document.getElementById("listitem");
//       const taskArray = [];

//       btnValue.addEventListener("click", function () {
//         const taskText = taskInput.value;
//         taskArray.push(taskText);

//         const listItem = document.createElement("li");
//         listItem.innerHTML = `<li>${taskText}</li>`;

//         const editButton = document.createElement("button");
//         editButton.textContent = "Edit";
//         editButton.addEventListener("click", function () {
//           const editInput = document.createElement("input");
//           editInput.value = taskText;
//           listItem.innerHTML = '';
//           listItem.appendChild(editInput);

//           const saveButton = document.createElement("button");
//           saveButton.textContent = "Save";
//           saveButton.addEventListener("click", function () {
//             taskText = editInput.value;
//             listItem.innerHTML = taskText;
//             taskArray[taskArray.indexOf(taskText)] = taskText;
//             listItem.appendChild(editButton);
//             listItem.appendChild(deleteButton);
//           });

//           listItem.appendChild(saveButton);
//         });

//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.addEventListener("click", function () {
//           const index = taskArray.indexOf(taskText);
//           if (index !== -1) {
//             taskArray.splice(index, 1);
//           }
//           list.removeChild(listItem);
//           console.log(taskArray);
//         });

//         listItem.appendChild(editButton);
//         listItem.appendChild(deleteButton);
//         list.appendChild(listItem);
//         taskInput.value = "";
//         console.log(taskArray);
//       });


// const taskInput = document.getElementById("addtext");
// const btnValue = document.getElementById("btn");
// const list = document.getElementById("listitem");
// const taskArray = [];

// btnValue.addEventListener("click", function () {
//     let taskText = taskInput.value;
//     taskArray.push(taskText);

//     const listItem = document.createElement("li");
//     listItem.className = "list-item"
//     listItem.innerHTML = `<span>${taskText}</span>`;

//     const editButton = document.createElement("button");
//     editButton.className = "edit"
//     editButton.textContent = "Edit";
//     editButton.addEventListener("click", function () {
//         const editInput = document.createElement("input");
//         editInput.value = taskText;
//         listItem.innerHTML = '';
//         listItem.appendChild(editInput);

//         const saveButton = document.createElement("button");
//         saveButton.textContent = "Save";
//         saveButton.addEventListener("click", function () {
//             taskText = editInput.value;
//             listItem.innerHTML = `<span>${taskText}</span>`;
//             taskArray[taskArray.indexOf(taskText)] = taskText;
//             listItem.appendChild(editButton);
//             listItem.appendChild(deleteButton);
//         });

//         listItem.appendChild(saveButton);
//     });

//     const deleteButton = document.createElement("button");
//     deleteButton.className = "delete"
//     deleteButton.textContent = "Delete";
//     deleteButton.addEventListener("click", function () {
//         const index = taskArray.indexOf(taskText);
//         if (index !== -1) {
//             taskArray.splice(index, 1);
//         }
//         list.removeChild(listItem);
//         console.log(taskArray); 
//     });

//     listItem.appendChild(editButton);
//     listItem.appendChild(deleteButton);
//     list.appendChild(listItem);
//     taskInput.value = "";
//     console.log(taskArray);
// });



const taskInput = document.getElementById("addtext");
const btnValue = document.getElementById("btn");
const list = document.getElementById("listitem");
const taskArray = [];

btnValue.addEventListener("click", function () {
    let taskText = taskInput.value;
    taskArray.push(taskText);

    const listItem = document.createElement("li");
    listItem.className = "list-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const textSpan = document.createElement("span");
    textSpan.textContent = taskText;

    const editButton = document.createElement("button");
    editButton.className = "edit";
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "Delete";

    listItem.appendChild(checkbox);
    listItem.appendChild(textSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            textSpan.style.textDecoration = "line-through";
        } else {
            textSpan.style.textDecoration = "none";
        }
    });

    editButton.addEventListener("click", function () {
        const editInput = document.createElement("input");
        editInput.value = taskText;
        textSpan.style.display = "none";
        listItem.insertBefore(editInput, editButton);

        const saveButton = document.createElement("button");
        saveButton.className = "save";
        saveButton.textContent = "Save";
        saveButton.addEventListener("click", function () {
            taskText = editInput.value;
            textSpan.textContent = taskText;
            textSpan.style.display = "inline";
            listItem.removeChild(editInput);
            listItem.removeChild(saveButton);
        });

        listItem.insertBefore(saveButton, editButton);
        document.getElementById("count").innerHTML = taskArray.length;

    });

    deleteButton.addEventListener("click", function () {
        const index = taskArray.indexOf(taskText);
        if (index !== -1) {
            taskArray.splice(index, 1);
        }
        list.removeChild(listItem);
        console.log(taskArray);
        if(taskArray.length==0){
            document.getElementById("check").innerHTML = "";
        }
        document.getElementById("count").innerHTML = taskArray.length;
    });

    list.appendChild(listItem);
    taskInput.value = "";
    console.log(taskArray.length);

    if(taskArray.length == 1){
    const bottomCheckbox = document.createElement("input");
    bottomCheckbox.type = "checkbox";
    document.getElementById("check").appendChild(bottomCheckbox);
    }
    if (taskArray.length >= 1) {  
        console.log("call task update")     
        document.getElementById("count").innerHTML = taskArray.length;
    }
});



