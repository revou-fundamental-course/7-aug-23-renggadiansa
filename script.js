document.addEventListener("DOMContentLoaded", function() {
    const baseInput = document.getElementById("base");
    const heightInput = document.getElementById("height");
    const calculateButton = document.getElementById("calculate");
    const resultElement = document.getElementById("result");

    const sideAInput = document.getElementById("sideA");
    const sideBInput = document.getElementById("sideB");
    const sideCInput = document.getElementById("sideC");
    const calculatePerimeterButton = document.getElementById("calculatePerimeter");
    const resultPerimeterElement = document.getElementById("resultPerimeter");
    const resetKelilingBtn = document.getElementById("resetKeliling");
    const resetLuasBtn = document.getElementById("resetLuas");



    calculateButton.addEventListener("click", function() {
        const base = parseFloat(baseInput.value);
        const height = parseFloat(heightInput.value);

        if (isNaN(base) || isNaN(height)) {
            resultElement.textContent = "Masukkan angka yang sesuai.";
        } else {
            const area = 0.5 * base * height;
            resultElement.textContent = `L = 1/2 x ${base} x ${height} = ${area}`;
        }
    });
    resetLuasBtn.addEventListener("click", function() {
        baseInput.value = "";
        heightInput.value = "";
        resultElement.textContent = "";
    });

    calculatePerimeterButton.addEventListener("click", function() {
        const sideA = parseFloat(sideAInput.value);
        const sideB = parseFloat(sideBInput.value);
        const sideC = parseFloat(sideCInput.value);

        if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
            resultPerimeterElement.textContent = "Masukkan angka yang sesuai untuk setiap sisi.";
        } else {
            const perimeter = sideA + sideB + sideC;
            resultPerimeterElement.textContent = `K = {${sideA} + ${sideB} + ${sideC}} = ${perimeter}`;
        }
    });

    resetKelilingBtn.addEventListener("click", function() {
        sideAInput.value = "";
        sideBInput.value = "";
        sideCInput.value = "";
        resultPerimeterElement.textContent = "";
    });
});
