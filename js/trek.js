function toggleMenu(){

let menu = document.getElementById("navMenu");
let auth = document.querySelector(".auth-links-containar");

menu.classList.toggle("active");
auth.classList.toggle("active");
}

const searchInput = document.getElementById("searchInput");
const difficultyFilter = document.getElementById("difficultyFilter");
const cards = document.querySelectorAll(".trek-card");

function filterTreks() {

    const searchText = searchInput.value.toLowerCase();
    const difficultyValue = difficultyFilter.value;

    cards.forEach(card => {

        const trekName = card.dataset.name.toLowerCase();
        const trekDifficulty = card.dataset.difficulty;

        const matchSearch = trekName.includes(searchText);
        const matchDifficulty = difficultyValue === "all" || trekDifficulty === difficultyValue;

        if(matchSearch && matchDifficulty){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}