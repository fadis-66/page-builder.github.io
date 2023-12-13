const contentContainer = document.querySelector(".content-container");
const widthInput = document.querySelector("#width-input");
const hieghtInput = document.querySelector("#hieght-input");
const form = document.getElementById("form");
const selectW = document.getElementById("selectWidth");
const selectH = document.getElementById("selectHieght");
const Kinput = document.getElementById("selectKind");
const colorInput = document.getElementById("color-input");
const bgColorInput = document.getElementById("bgColor-input");
const selectFS = document.getElementById("selectFontS");
const inputText = document.getElementById("text-input");
const fontSizeInput = document.getElementById("fontSize-input");
const borderClicked = document.getElementById("radiousCheck");
const marginClicked = document.getElementById("marginCheck");
const paddingClicked = document.getElementById("paddingCheck");
const flexClicked = document.getElementById("flexCheck");

flexClicked.addEventListener("click", () => {
	var checkBox4 = document.getElementById("flexCheck");
	if (checkBox4.checked == true) {
		checkBox4.value = true;
	} else {
		checkBox4.value = false;
	}
});
marginClicked.addEventListener("click", () => {
	var checkBox = document.getElementById("marginCheck");
	if (checkBox.checked == true) {
		checkBox.value = true;
	} else {
		checkBox.value = false;
	}
});
borderClicked.addEventListener("click", () => {
	var checkBox1 = document.getElementById("radiousCheck");
	if (checkBox1.checked == true) {
		checkBox1.value = true;
	} else {
		checkBox1.value = false;
	}
});
paddingClicked.addEventListener("click", () => {
	var checkBox2 = document.getElementById("paddingCheck");
	if (checkBox2.checked == true) {
		checkBox2.value = true;
	} else {
		checkBox2.value = false;
	}
});

widthInput.max = widthInput.getBoundingClientRect().x;
var element1 = "";

form.addEventListener("submit", (event) => {
	event.preventDefault();

	if (flexClicked.value == "true") {
		contentContainer.setAttribute("style", "display: flex; flex-direction: row; justify-content: center");
	} else {
		contentContainer.setAttribute("style", "display: block; flex-direction: row; justify-content: center");
	}

	let bgc = bgColorInput.value;
	let ca = colorInput.value;
	let fs = fontSizeInput.value;
	let fsu = selectFS.value;
	let hvu = selectH.value;
	let hvi = hieghtInput.value;
	let txti = inputText.value;

	if (borderClicked.value == "true") {
		if (marginClicked.value == "true") {
			if (paddingClicked.value == "true") {
				element1 = `<${Kinput.value} style="width: ${widthInput.value}${selectW.value}; height: ${hvi}${hvu};font-size: ${fs}${fsu}; color: ${ca}; background-color: ${bgc} ; margin : 25px; padding:10px; border-radius: 8px;white-space: wrap; 
overflow: visible;  text-overflow: ellipsis; display: flex;
justify-content: center;    align-items: center;"> ${txti}</${Kinput.value.value}>`;
			} else {
				element1 = `<${Kinput.value} style="width: ${widthInput.value}${selectW.value}; height: ${hvi}${hvu};font-size: ${fs}${fsu}; color: ${ca}; background-color: ${bgc} ; margin : 25px;  border-radius: 8px;white-space: wrap; 
overflow: visible;  text-overflow: ellipsis; display: flex;
justify-content: center;    align-items: center;"> ${txti}</${Kinput.value}>`;
			}
		} else {
			if (paddingClicked.value == "true") {
				element1 = `<${Kinput.value} style="width: ${widthInput.value}${selectW.value}; height: ${hvi}${hvu};font-size: ${fs}${fsu}; color: ${ca}; background-color: ${bgc} ;  padding:10px; border-radius: 8px;white-space: wrap; 
overflow: visible;  text-overflow: ellipsis; display: flex;
justify-content: center;    align-items: center;"> ${txti}</${Kinput.value}>`;
			} else {
				element1 = `<${Kinput.value} style="width: ${widthInput.value}${selectW.value}; height: ${hvi}${hvu};font-size: ${fs}${fsu}; color: ${ca}; background-color: ${bgc} ;   border-radius: 8px;white-space: wrap; 
overflow: visible;  text-overflow: ellipsis; display: flex;
justify-content: center;    align-items: center;"> ${txti}</${Kinput.value}>`;
			}
		}
	} else {
		if (marginClicked.value == "true") {
			if (paddingClicked.value == "true") {
				element1 = `<${Kinput.value} style="width: ${widthInput.value}${selectW.value}; height: ${hvi}${hvu};font-size: ${fs}${fsu}; color: ${ca}; background-color: ${bgc} ;  padding:10px; margin:25px;white-space: wrap; 
overflow: visible;  text-overflow: ellipsis; display: flex;
justify-content: center;    align-items: center;"> ${txti}</${Kinput.value}>`;
			} else {
				element1 = `<${Kinput.value} style="width: ${widthInput.value}${selectW.value}; height: ${hvi}${hvu};font-size: ${fs}${fsu}; color: ${ca}; background-color: ${bgc} ;   margin:25px;white-space: wrap; 
overflow: visible;  text-overflow: ellipsis; display: flex;
justify-content: center;    align-items: center;"> ${txti}</${Kinput.value}>`;
			}
		} else {
			if (paddingClicked.value == "true") {
				element1 = `<${Kinput.value} style="width: ${widthInput.value}${selectW.value}; height: ${hvi}${hvu};font-size: ${fs}${fsu}; color: ${ca}; background-color: ${bgc} ;  padding:10px; white-space: wrap; 
overflow: visible;  text-overflow: ellipsis; display: flex;
justify-content: center;    align-items: center;"> ${txti}</${Kinput.value}>`;
			} else {
				element1 = `<${Kinput.value} style="width: ${widthInput.value}${selectW.value}; height: ${hvi}${hvu};font-size: ${fs}${fsu}; color: ${ca}; background-color: ${bgc} ; white-space: wrap; 
overflow: visible;  text-overflow: ellipsis;  display: flex;
justify-content: center;    align-items: center; "> ${txti}</${Kinput.value}>`;
			}
		}
	}

	if (Kinput.value == "button") {
	}

	contentContainer.innerHTML += element1;
});

const saveBtn = document.getElementById("saveBtn");
if (saveBtn) {
	saveBtn.addEventListener("click", () => {
		localStorage.setItem("div1", contentContainer.innerHTML);
	});
}
const clearBtn = document.getElementById("clearBtn");
if (clearBtn) {
	clearBtn.addEventListener("click", () => {
		contentContainer.innerHTML = "";
	});
}
const addLastBtn = document.getElementById("addBtn");
if (addLastBtn) {
	addLastBtn.addEventListener("click", () => {
		const last = localStorage.getItem("div1");
		contentContainer.innerHTML += last;
	});
}
