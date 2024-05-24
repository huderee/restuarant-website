let customers = document.querySelector(".content");

async function fetchUsers(url) {
  try {
    let data = await fetch(url);
    let response = await data.json();
    for (let i = 0; i < response.length; i++) {
      let name = response[i].name;
      let password = response[i].password;

      users.innerHTML += `
        <div class="card">
          <div class="card-content">
            <div class="image">
              <img src="img/${name}.png" alt="" />
            </div>
            <div class="name-profession">
              <span class="name">${name}</span>

            </div>
          </div>
        </div>
      `;
    }
  } catch (err) {
    console.log(err);
  }
}

fetchUsers("http://localhost:8080/api/users");
