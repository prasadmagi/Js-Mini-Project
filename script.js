
let text = document.querySelector(".final-text");
let modal = document.querySelector(".modal");
let result = document.querySelector(".parent");
let maxattemptmodel = document.querySelector(".max-attempt-model");
let score = document.querySelector(".score");
let finaloutput = document.querySelector(".final-output");

let attempt = 10;

var no = Math.floor(Math.random() * 100) + 1;
console.log(no);//check the number

// function for playagain
function playagain() {

  location.reload();
}

// speak function 
function speak() {
  var speech = true;
  window.SpeechRecognition = window.webkitSpeechRecognition;
  const r = new SpeechRecognition();
  r.interimResults = true;


  r.addEventListener("result", e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)

    if (isNaN(transcript)) {
      text.innerHTML = `<h3>${transcript}</h3>
                        <h3>Please speak number only</h3>`

    } else if (transcript > 100 || transcript < 1) {
      text.innerHTML = `<h3>${transcript}</h3>
                        <h3>Please speak number between 1 to 100 only</h3>`

    } else if (transcript > no) {
      text.innerHTML = `<h3>${transcript}</h3>
                        <h3>Go lower</h3>`

    } else if (transcript < no) {
      text.innerHTML = `<h3>${transcript}</h3>
                        <h3>Go higher</h3>`

    } else if (transcript == no) {

      modal.style.display = "block";
      result.style.display = "none";
      finaloutput.innerHTML = `Congrats your guess number ${transcript} is correct`;
    }

  })

  if (speech == true) {
    r.start();
  }

  attempt--;
  // console.log(attempt);
  score.innerHTML = ` You have ${attempt} attempt only`

  if (attempt == 0) {
    maxattemptmodel.style.display = "block";
    result.style.display = "none";
  }
}








