const btn = document.querySelector(".btn"),
    met = document.querySelector(".met"),
    error = document.querySelector(".error"),
    kcal_result = document.querySelector(".kcal"),
    kg_result = document.querySelector(".kg"),
    change = document.querySelector(".activity"),
    info = document.querySelector(".info"),
    icon = document.querySelector(".bi");


const hideError = () => {
    setTimeout (() => {
        error.style.display = "none";
    }, 5000);
}

const showInfo = () => {
    if(info.style.display === 'none'){
        info.style.display = 'block';
    } else {
            info.style.display = "none";
    }
}

icon.addEventListener("mouseover", showInfo);

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

        let kgloss = (calories / 7700).toFixed(3);
        let pounds = (kgloss*2.205).toFixed(3);
        kg_result.innerHTML = `kg burnt: ${kgloss} kg / lbs burnt: ${pounds}`;
    }
}

btn.addEventListener("click", calculateCalories);

