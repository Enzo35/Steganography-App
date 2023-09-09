const canvas = document.querySelector("canvas");
const targetInput = documeny.querySelector("#target");
const encryptionInput = document.querySelector("#encryption");
const saveButton = document.querySelector("button");
let target;
let encryption;

canvas.width = 300;
canvas.height = 300;

targetInput.onchange = (e) => {
    const img = new SimpleImage(targetInput);
    img.setSize(300, 300);
    target = img;
};

encryptionInput.onchange = (e) => {
    const img = new SimpleImage(encryptionInput);
    img.setSize(300, 300);
    encryption = img;
}

saveButton.onclick = save;

function getValue(x) {
    return x - (x % 16);
}