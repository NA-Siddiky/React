const url = "https://jsonplaceholder.typicode.com/users"



fetch(url)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => showUsersName(data));


const showUsersName = (userInfo) => {
    // console.log(userInfo);

    let userHTML = ''
    userInfo.forEach(element => {
        userHTML = userHTML +
            `<div class="user col-lg-3 col-md-4">
                <h3>${element.id}. ${element.name}</h3>
                <p>City: ${element.address.city}, Street: ${element.address.street}</p>
                <p>Phone: ${element.address.phone}, Email: ${element.email}</p>
            </div>`
    });
    const showList = document.getElementById("user-list")
    // console.log(ul);
    showList.innerHTML = userHTML;

}