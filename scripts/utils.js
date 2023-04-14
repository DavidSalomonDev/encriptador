const keys = {
	a: "ai",
	e: "enter",
	i: "imes",
	o: "ober",
	u: "ufat",
};

function hasSpecialChar(text) {
	return /[^a-zA-Z0-9\s]/.test(text);
}

function hasUppercase(text) {
	return /[A-Z]/.test(text);
}

export function encrypt(inputText) {
	if (hasSpecialChar(inputText) || hasUppercase(inputText)) {
		return undefined;
	}

	const encryptedText = inputText
		.replaceAll("e", keys.e)
		.replaceAll("i", keys.i)
		.replaceAll("a", keys.a)
		.replaceAll("o", keys.o)
		.replaceAll("u", keys.u);

	return encryptedText;
}

export function decrypt(inputText) {
	if (hasSpecialChar(inputText) || hasUppercase(inputText)) {
		return undefined;
	}

	const decryptedText = inputText
		.replaceAll(keys.e, "e")
		.replaceAll(keys.i, "i")
		.replaceAll(keys.a, "a")
		.replaceAll(keys.o, "o")
		.replaceAll(keys.u, "u");
	return decryptedText;
}
