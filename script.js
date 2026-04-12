// let myPromise = new Promise(function(resolve,reject){
//     let success = prompt("Enter true and false based on the condition");
//     if(success == "true"){
//         resolve("Task Completed");
//     }
//     else if(success == "false"){
//         reject("Task Failed !");
//     }
// })

// myPromise.then(function(result){
//     console.log(result);
// })
// .catch(function(error){
//     console.log(error)
// })


// API Calling :

// => API calling and converting data into JSON data and fetching username and phone no :

// fetch("https://jsonplaceholder.typicode.com/users/2")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log("Username :", data.name)
//         console.log("Phone :", data.phone)
//     })
//     .catch(function (error) {
//         console.log("Error :", error)
//     });


// fetch("https://jsonplaceholder.typicode.com/users/3")
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log("Name :",data.name);
//     console.log("City :",data.address.city);
// })
// .catch(function(error){
//     console.log("Error :",error);
// })

// fetch("https://jsonplaceholder.typicode.com/users/4")
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log("Company Name :",data.company.name);
//     console.log("Company Zipcode :",data.address.zipcode);
// })
// .catch(function(error){
//     console.log("Error :",error);
// })


// Using Javascript we have to make our data visible in the HTML using Javascript with fetching data:

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then( data => {
    let container = document.getElementById("users");

    data.forEach(user => {
        let UserInfo = document.createElement("div");

        UserInfo.innerHTML = `
        <h2>${user.name}</h2>
        <p>${user.email}</p>
        <p>${user.company.name}</p>
        `;

        container.append(UserInfo)
    });
})
.catch(error => console.log(error));
