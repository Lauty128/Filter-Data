let inputText = document.getElementById("inputText");
let users = document.getElementById("users");
let usersList = []


window.addEventListener("DOMContentLoaded",()=>{
    setTimeout(async()=>{
        usersList = await getData();
        usersList = usersList.data
        document.getElementById("loadingDataUsers").remove()
        renderUsers(usersList)
    }, 500)
    
})

inputText.addEventListener("keyup",()=>{
    let usersListFilter = usersList.filter((user=>`${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()}`.includes(inputText.value.toLowerCase())))
    renderUsers(usersListFilter)
})

let renderUsers = data=>{
    data = data.map(user=> `<li>${user.firstname} ${user.lastname}</li>`).join(" ");
    users.innerHTML=data
}

let getData = async()=>{
    let response = await fetch("https://fakerapi.it/api/v1/persons?_quantity=100");
    return await response.json();
}























