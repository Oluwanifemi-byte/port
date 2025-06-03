const passcodeInput = document.getElementById("passcode");
const unlockButton = document.getElementById("unlock-btn");
const dairySection = document.getElementById("dairy-section");
const dairyEntry = document.getElementById("dairy-entry");
const saveButton = document.getElementById("save-btn");
const errorMsg = document.getElementById("error-msg");

unlockButton.addEventListener("click", function () {
	const passcode = passcodeInput.value;

	if (passcode === "1234") {
		dairySection.style.display = "block";
		errorMsg.textContent = "";	
	} else {
		errorMsg.textContent = "Invalid passcode!";
	}
});

saveButton.addEventListener("click", function () {
	const entry = dairyEntry.value;
	// Save the entry to a database or do something with it
	console.log("Entry saved:", entry);
	alert("Entry saved!");
    // Clear the entry field
    dairyEntry.value = "";
});
