const skills = [
    "Analista de Sistemas          ",
    "Analista de Dados          ",
    "Analista de BI          ",
    "Desenvolvedor SQL - PL/SQL         "
];

const dynamicText = document.getElementById("dynamicText");
let currentIndex = 0;
let currentText = "";
let isDeleting = false;
let typingSpeed = 50; // Ajuste este valor para tornar o apagamento mais rápido

function typeText() {
    currentText = skills[currentIndex].substring(0, isDeleting ? currentText.length - 1 : currentText.length + 1);
    dynamicText.textContent = currentText;

    if (!isDeleting && currentText === skills[currentIndex]) {
        isDeleting = true;
        typingSpeed = 200; // Tempo de pausa após digitar o texto completo
    } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % skills.length;
        typingSpeed = 50; // Ajuste este valor para tornar o apagamento mais rápido
    }

    setTimeout(typeText, typingSpeed);
}

typeText();
