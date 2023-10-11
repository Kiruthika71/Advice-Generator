const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const generate = document.getElementById("generate-btn");
const url = "https://api.adviceslip.com/advice";


async function getAdvice() {

    try {
        let response = await fetch(url);

        let {slip: {id,advice}} = await response.json();
        adviceId.innerText = id;
        adviceText.innerText = advice; 
    }
    catch(error) {
        console.log(error);
    }
}

getAdvice()

generate.addEventListener("click", getAdvice);
