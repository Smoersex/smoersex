

const links = document.querySelectorAll(".person");
links.forEach(element => {

    element.addEventListener('click', actionScoring)
});

function actionScoring (event) {
    window.location.href = `räkna.html?id=${event.currentTarget.id}`;
}

document.querySelectorAll(".person").forEach((btn) => {
  btn.addEventListener("click", () => {
    const person = btn.innerText;
    localStorage.setItem("selectedPerson", person);
    window.location.href = "form.html";
  });
});