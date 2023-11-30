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
const storedValue = localStorage.getItem("taskArray");

btnValue.addEventListener("click", function () {
    let taskText = taskInput.value;
    taskArray.push(taskText);

    const listItem = document.createElement("li");
    listItem.className = "list-item";
    localStorage.setItem("taskText",taskArray)


    const card = document.createElement("div");
    card.className = "card";

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

    card.appendChild(checkbox);
    card.appendChild(textSpan);
    card.appendChild(editButton);
    card.appendChild(deleteButton);
    listItem.appendChild(card);

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
        card.insertBefore(editInput, editButton);

        const saveButton = document.createElement("button");
        saveButton.className = "save";
        saveButton.textContent = "Save";
        saveButton.addEventListener("click", function () {
            taskText = editInput.value;
            textSpan.textContent = taskText;
            textSpan.style.display = "inline";
            card.removeChild(editInput);
            card.removeChild(saveButton);
        });

        card.insertBefore(saveButton, editButton);
        document.getElementById("count").innerHTML = taskArray.length;

    });

    deleteButton.addEventListener("click", function () {
        const index = taskArray.indexOf(taskText);
        if (index !== -1) {
            taskArray.splice(index, 1);

        }
        list.removeChild(listItem);
        console.log(taskArray);
        if (taskArray.length == 0) {
            document.getElementById("check").innerHTML = "";

        }
        document.getElementById("count").innerHTML = taskArray.length;

    });

    list.appendChild(listItem);
    taskInput.value = "";
    console.log(taskArray.length);

    // if(taskArray.length == 1){
    // const bottomCheckbox = document.createElement("input");
    // bottomCheckbox.type = "checkbox";
    // document.getElementById("check").appendChild(bottomCheckbox);
    // }
    if (taskArray.length >= 1) {
        console.log("call task update")
        document.getElementById("count").innerHTML = taskArray.length;
    }
    updateListDisplay();
});

filterCheckbox.addEventListener("change", function () {
    updateListDisplay(); // Call the function to update the display
});

function updateListDisplay() {
    const showOnlyChecked = filterCheckbox.checked;

    for (let i = 0; i < list.children.length; i++) {
        const listItem = list.children[i];
        const checkbox = listItem.querySelector("input[type=checkbox]");

        if (showOnlyChecked && !checkbox.checked) {
            listItem.style.display = "none";
        } else {
            listItem.style.display = "block";
        }
    }
}


// const bio = {
//     name:"pankaj",
//     age:24,
//     work:"job"
// }

// // Store the bio object in local storage
// localStorage.setItem('bio', JSON.stringify(bio));

// // Retrieve the bio object from local storage
// const storedBio = JSON.parse(localStorage.getItem('bio'));
// console.log(storedBio);

// // Update the bio object in local storage
// storedBio.age = 25; // Update the age to 25
// localStorage.setItem('bio', JSON.stringify(storedBio));

// // Retrieve the updated bio object from local storage
// const updatedBio = JSON.parse(localStorage.getItem('bio'));
// console.log(updatedBio);

// // Delete the bio object from local storage
// localStorage.removeItem('bio');

// // Verify that the bio object is deleted
// const deletedBio = JSON.parse(localStorage.getItem('bio'));
// console.log(deletedBio); // It should be null



const bio = {
    name: "pankaj",
    age: 24,
    work: "job"
};

const add = document.getElementById("add")
const del = document.getElementById("delete")
const get = document.getElementById("get")

add.addEventListener("click", function () {
    const bioString = JSON.stringify(bio);

    localStorage.setItem("bio", bioString);

    console.log();
});

del.addEventListener("click", function () {
    const bioString = JSON.stringify(bio);

    localStorage.removeItem("bio", bioString);

    console.log();

})

get.addEventListener("click", function () {
    const bioString = JSON.stringify(bio);

   const getItem = localStorage.getItem("bio", bioString);

    console.log(getItem);       

})

// const data = JSON.stringify(bio);

// localStorage.setItem("userBio", data);

// const storedData = localStorage.getItem("userBio");

// const storedBio = JSON.parse(storedData);

// console.log(storedBio);

// storedBio.work = "new job";

// storedBio.name = "Amit";

// const updatedBioString = JSON.stringify(storedBio);

// localStorage.setItem("userBio", updatedBioString);

// Remove the item from local storage
// localStorage.removeItem("userBio");

