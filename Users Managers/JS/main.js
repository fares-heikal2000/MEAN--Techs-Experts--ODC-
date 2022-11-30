// Varabiles
let users = []
const form = document.getElementById("myForm");
const pNameI = form[0];
const pPriceI = form[1];
const pCateI = form[2];
const pDescI = form[3];
const bSubmit = form[4];
const showarea = document.getElementById("showArea");

// Add User
form.addEventListener ("submit", function(e) {
    e.preventDefault();
    addProduct(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value,);
    pushInLocalStorage();
    drowResult();
    clearFormAfterInsertData();
})

function addProduct (id, name, age, state) {
    users.push(
        {
            id : id,
            name : name,
            age: age,
            state : state
        }
    )
    pushInLocalStorage()
    drowResult();
}
function pushInLocalStorage() {
    const usersInLocalStorage = JSON.stringify(users)
    localStorage.setItem("users", usersInLocalStorage);
}

function drowResult() {
    showarea.innerHTML = ""
    users = JSON.parse(localStorage.getItem("users"))
    users.forEach((item, i) => {
        // Drow Table To Show Products
        const tr = document.createElement("tr")
        const userIdTd = document.createElement("td");
        const userNameTd = document.createElement("td");
        const userAgeTd = document.createElement("td");
        const userStatsTd = document.createElement("td");
        const porductEdit = document.createElement("td")
        const romveButton = document.createElement("button");
        const updateButton = document.createElement("button");

        // Inner Products In Table
        userIdTd.innerHTML = item.id;
        userNameTd.innerHTML = item.name;
        userAgeTd.innerHTML = item.age;
        userStatsTd.innerHTML = item.state;
        updateButton.innerHTML = "Update";
        romveButton.innerHTML = "Delate";

        // Add Classes
        updateButton.classList.add("btn", "btn-info", "text-white", "rounded-pill", "me-2")
        romveButton.classList.add("btn", "btn-danger", "text-white", "rounded-pill")

        // Appending Child
        porductEdit.appendChild(updateButton);
        porductEdit.appendChild(romveButton);
        tr.appendChild(userIdTd);
        tr.appendChild(userNameTd);
        tr.appendChild(userAgeTd);
        tr.appendChild(userStatsTd);
        tr.appendChild(porductEdit);
        showarea.appendChild(tr);

        // Update
        updateButton.addEventListener("click", function () {
            const newValueOfStatus = prompt(`Enter The New State Of ${users[i].name}`)
            users[i].state = newValueOfStatus;
            pushInLocalStorage();
            drowResult();
        });
        
        // Delate
        romveButton.addEventListener("click", function () {
            users.splice(i, 1);
            pushInLocalStorage();
            drowResult();
        });
    })
}
if (localStorage.getItem("users") !== null) {
    drowResult();
}
function clearFormAfterInsertData() {
    form[0].value = "";
    form[1].value = "";
    form[2].value = "";
    form[3].value = "";
}

function restoreDataInputs(id, name, age, state) {
    form[0].value = id;
    form[1].value = name;
    form[2].value = age;
    form[3].value = state;
}
