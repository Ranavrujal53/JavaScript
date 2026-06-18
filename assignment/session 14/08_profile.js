import formatFollowers from "./08_instaHelpers.js";

const users = [
    { name: "Vrujal", followers: 1200 },
    { name: "Keval", followers: 2500000 },
    { name: "Uday", followers: 980 }
];

const container = document.getElementById("profiles");

users.forEach(user => {

    const formatted = formatFollowers(user.followers);

    console.log(user.name, "Followers:", formatted);

    container.innerHTML += `
        <div class="user">
            <h3>${user.name}</h3>
            <p>Followers: ${formatted}</p>
            <hr>
        </div>
    `;
});