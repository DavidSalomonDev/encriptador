import { encrypt, decrypt } from "./utils.js";

const textarea = document.getElementById("input-textarea");
const encryptBtn = document.getElementById("encrypt");
const decryptBtn = document.getElementById("decrypt");
const copyBtn = document.getElementById("copy");
const resultText = document.getElementById("result-text");
const textPlaceHolderEl = document.querySelector(".output-text__placeholder");
const textResultEl = document.querySelector(".output-text__result");

encryptBtn.addEventListener("click", encryptText);
decryptBtn.addEventListener("click", decryptText);
copyBtn.addEventListener("click", copyToClipboard);

function encryptText() {
	removeElement();
	const textValue = textarea.value;
	const encryptedText = encrypt(textValue);
	if (!encryptedText) {
		alert(
			"No se puede encriptar tu mensaje. Verifica que no tengas mayúsculas o caracteres especiales"
		);
		return;
	}
	resultText.innerText = encryptedText;
}

function decryptText() {
	removeElement();
	const textValue = textarea.value;
	const decryptedText = decrypt(textValue);
	if (!decryptedText) {
		alert(
			"No se puede desencriptar tu mensaje. Verifica que no tengas mayúsculas o caracteres especiales"
		);
		return;
	}
	resultText.innerText = decryptedText;
}

function copyToClipboard() {
	const text = resultText.innerText;
	navigator.clipboard.writeText(text).then(() => {
		alert("Tu mensaje ha sido copiado al portapapeles");
	});
}

function removeElement() {
	textPlaceHolderEl.classList.add("disable");
	textResultEl.classList.remove("disable");
}
