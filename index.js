const indexContainer = document.querySelector(".container");

fetch('https://671e105c1dfc429919812c3e.mockapi.io/api/DATA/Users', {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
}).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
}).then((users) => {
    // Do something with the list of tasks
    console.log(users);
    for (let i = 0; i < users.length; i++) {
        const nameElement = document.createElement("div"); // <div><p>title</p></div>  
        nameElement.innerHTML = `  
          <p>${users[i].name}</p>  
          <img src="${users[i].image}"/>
        `;
        indexContainer.appendChild(nameElement);
    };

}).catch(error => {
    // handle error
})