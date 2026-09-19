const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const userList = document.getElementById("userList");
const message = document.getElementById("message");

let users = [];

// Fetch API data
async function fetchUsers() {
  try {
    message.textContent = "Loading users...";

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    users = await response.json();

    message.textContent = `${users.length} users loaded`;

    displayUsers(users);

  } catch (error) {
    message.textContent = "❌ Something went wrong!";
    console.error(error);
  }
}


// Display users
function displayUsers(data) {

  userList.innerHTML = "";

  if (data.length === 0) {
    message.textContent = "❌ No user found";
    return;
  }

  message.textContent = `${data.length} user(s) found`;

  data.forEach((user) => {

    const card = document.createElement("div");

    card.classList.add("user-card");

    card.innerHTML = `
      <h2>${user.name}</h2>

      <p>
        <strong>Username:</strong>
        ${user.username}
      </p>

      <p>
        <strong>Email:</strong>
        ${user.email}
      </p>

      <p>
        <strong>Phone:</strong>
        ${user.phone}
      </p>

      <p>
        <strong>Website:</strong>
        ${user.website}
      </p>

      <p>
        <strong>City:</strong>
        ${user.address.city}
      </p>
    `;

    userList.appendChild(card);
  });
}


// Search users
function searchUsers() {

  const searchValue = searchInput.value
    .trim()
    .toLowerCase();

  if (searchValue === "") {
    displayUsers(users);
    return;
  }

  const filteredUsers = users.filter((user) => {

    return user.name
      .toLowerCase()
      .includes(searchValue);

  });

  displayUsers(filteredUsers);
}


// Search button
searchBtn.addEventListener("click", searchUsers);


// Enter key
searchInput.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {
    searchUsers();
  }

});


// Load API
fetchUsers();