let box = document.querySelector(".cookie-jar")

function drop() {
box.remove()
}

const selectTemp = document.getElementById("temp");


selectTemp.addEventListener('change', (e) => {
    const value = e.target.value;
    const firstvalue = document.getElementById("one");
    const secondvalue = document.getElementById("two");
    const threevalue = document.getElementById("three");
    const fourvalue = document.getElementById("four");
    const fiveValue = document.getElementById("five");
    const sixValue = document.getElementById("six");
    const sevenValue = document.getElementById("seven");
    const eightValue = document.getElementById("eight");

    if(value === 'C') { 
        firstvalue.textContent = "24°"
        secondvalue.textContent = "18°"
        threevalue.textContent = "18°"
        fourvalue.textContent = "23°"
        fiveValue.textContent = "45°"
        sixValue.textContent = "18°"
        sevenValue.textContent = "38°"
        eightValue.textContent = "60°"
    }

    if(value === 'F') { 
        firstvalue.textContent = "45°"
        secondvalue.textContent = "56°"
        threevalue.textContent = "21°"
        fourvalue.textContent = "28°"
        fiveValue.textContent = "78°"
        sixValue.textContent = "46°"
        sevenValue.textContent = "48°"
        eightValue.textContent = "90°"


    }

});