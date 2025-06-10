const alphabetRegex = /^[a-zA-Z\s]+$/;
const nameField = document.getElementById("nameField");

function validateForm() {
    const nameValue = nameField.value.trim();

    if (!alphabetRegex.test(nameValue)) {
        alert("Please enter only alphabets.");
        highlightField();
        return false;
    }

    return true; 
}

function highlightField() {
    nameField.classList.add("highlight");
    nameField.focus();

    setTimeout(() => {
        nameField.classList.remove("highlight");
    }, 5000);
}

nameField.addEventListener("input", function () {
    nameField.classList.remove("highlight");
});