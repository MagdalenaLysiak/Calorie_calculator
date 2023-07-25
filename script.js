const btn = document.querySelector(".btn"),
    met = document.querySelector(".met"),
    error = document.querySelector(".error"),
    kcal_result = document.querySelector(".kcal"),
    kg_result = document.querySelector(".kg"),
    change = document.querySelector(".activity");


const hideError = () => {
    setTimeout (() => {
        error.style.display = "none";
    }, 5000);
}

const metChanger = () => {
    const activity = document.querySelector(".activity").value;
    met.innerHTML = `Metabolic Equivalent of a Task (MET): ${activity}`;
}

change.onchange = function() {metChanger()};


const calculateCalories = () => {
    const activity = document.querySelector(".activity").value;
    const weight = document.querySelector(".weight").value;
    const duration = document.querySelector(".duration").value;

    if(activity === "" || weight === ""){
        error.style.display ="block";
        hideError();
    } else if (isNaN(weight)) {
        error.innerHTML = "Weight must be a number.";
        error.style.display = 'block';
        hideError();
    } else {
        let calories = (weight * activity * duration * 3.5) /200;
        calories = Math.ceil(calories);
        kcal_result.innerHTML = `Calories burnt: ${calories} kcal`;

        let kgloss = calories / 7700;
        let pounds = kgloss*2.205;
        kg_result.innerHTML = `kg burnt: ${kgloss} kg / lbs burnt: ${pounds}`;
    }
}

btn.addEventListener("click", calculateCalories);

