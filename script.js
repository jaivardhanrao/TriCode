const questions = [
    {
      question:
        "In the past two weeks, how often have you felt down, depressed, or hopeless?",
      answers: [
        "I have never felt down, depressed, or hopeless in the past two weeks.",
        "I have rarely felt down, depressed, or hopeless in the past two weeks.",
        "I have sometimes felt down, depressed, or hopeless in the past two weeks.",
        "I have often felt down, depressed, or hopeless in the past two weeks.",
        "I have always felt down, depressed, or hopeless in the past two weeks.",
      ],
    },
    {
      question:
        "In the past two weeks, how often have you had little interest or pleasure in doing things you usually enjoy?",
      answers: [
        "I have never had little interest or pleasure in doing things I usually enjoy in the past two weeks.",
        "I have rarely had little interest or pleasure in doing things I usually enjoy in the past two weeks.",
        "I have sometimes had little interest or pleasure in doing things I usually enjoy in the past two weeks.",
        "I have often had little interest or pleasure in doing things I usually enjoy in the past two weeks.",
        "I have always had little interest or pleasure in doing things I usually enjoy in the past two weeks.",
      ],
    },
    {
      question:
        "In the past two weeks, how often have you felt nervous, anxious, or on edge?",
      answers: [
        "I have never felt nervous, anxious, or on edge in the past two weeks.",
        "I have rarely felt nervous, anxious, or on edge in the past two weeks.",
        "I have sometimes felt nervous, anxious, or on edge in the past two weeks.",
        "I have often felt nervous, anxious, or on edge in the past two weeks.",
        "I have always felt nervous, anxious, or on edge in the past two weeks.",
      ],
    },
    {
      question:
        "In the past two weeks, how often have you found it difficult to stop worrying once you start?",
      answers: [
        "I have never found it difficult to stop worrying once I start in the past two weeks.",
        "I have rarely found it difficult to stop worrying once I start in the past two weeks.",
        "I have sometimes found it difficult to stop worrying once I start in the past two weeks.",
        "I have often found it difficult to stop worrying once I start in the past two weeks.",
        "I have always found it difficult to stop worrying once I start in the past two weeks.",
      ],
    },
    {
      question: "Over the past two weeks, how would you rate your sleep quality?",
      answers: [
        "I would rate my sleep quality as excellent over the past two weeks.",
        "I would rate my sleep quality as good over the past two weeks.",
        "I would rate my sleep quality as fair over the past two weeks.",
        "I would rate my sleep quality as poor over the past two weeks.",
        "I would rate my sleep quality as very poor over the past two weeks.",
      ],
    },
    {
      question:
        "In the past two weeks, how often have you felt tired or had little energy, even after rest?",
      answers: [
        "I have never felt tired or had little energy, even after rest in the past two weeks.",
        "I have rarely felt tired or had little energy, even after rest in the past two weeks.",
        "I have sometimes felt tired or had little energy, even after rest in the past two weeks.",
        "I have often felt tired or had little energy, even after rest in the past two weeks.",
        "I have always felt tired or had little energy, even after rest in the past two weeks.",
      ],
    },
    {
      question:
        "In the past two weeks, how often have you had thoughts that you are a failure or have let yourself or your family down?",
      answers: [
        "I have never had thoughts that I am a failure or have let myself or my family down in the past two weeks.",
        "I have rarely had thoughts that I am a failure or have let myself or my family down in the past two weeks.",
        "I have sometimes had thoughts that I am a failure or have let myself or my family down in the past two weeks.",
        "I have often had thoughts that I am a failure or have let myself or my family down in the past two weeks.",
        "I have always had thoughts that I am a failure or have let myself or my family down in the past two weeks.",
      ],
    },
    {
      question:
        "In the past two weeks, how often have you noticed changes in your appetite, such as eating significantly more or less than usual?",
      answers: [
        "I have never noticed changes in my appetite, such as eating significantly more or less than usual, in the past two weeks.",
        "I have rarely noticed changes in my appetite, such as eating significantly more or less than usual, in the past two weeks.",
        "I have sometimes noticed changes in my appetite, such as eating significantly more or less than usual, in the past two weeks.",
        "I have often noticed changes in my appetite, such as eating significantly more or less than usual, in the past two weeks.",
        "I have always noticed changes in my appetite, such as eating significantly more or less than usual, in the past two weeks.",
      ],
    },
    {
      question:
        "In the past two weeks, how often have you had trouble concentrating on tasks like reading, working, or watching TV?",
      answers: [
        "I have never had trouble concentrating on tasks like reading, working, or watching TV in the past two weeks.",
        "I have rarely had trouble concentrating on tasks like reading, working, or watching TV in the past two weeks.",
        "I have sometimes had trouble concentrating on tasks like reading, working, or watching TV in the past two weeks.",
        "I have often had trouble concentrating on tasks like reading, working, or watching TV in the past two weeks.",
        "I have always had trouble concentrating on tasks like reading, working, or watching TV in the past two weeks.",
      ],
    },
    {
      question:
        "In the past two weeks, how often have you felt so restless that you found it hard to sit still?",
      answers: [
        "I have never felt so restless that I found it hard to sit still in the past two weeks.",
        "I have rarely felt so restless that I found it hard to sit still in the past two weeks.",
        "I have sometimes felt so restless that I found it hard to sit still in the past two weeks.",
        "I have often felt so restless that I found it hard to sit still in the past two weeks.",
        "I have always felt so restless that I found it hard to sit still in the past two weeks.",
      ],
    },
  ];
  let preBuilt =
    "Give me mental health response according to the responses to a quiz a person made the responses are as follows. and dont use any kind of star of any other symbol in your response just plain text no bold italic nothing also give a score of the mental health wellness according to the response out of 10 and show this score at the end of the response";
  let selectedAnswers = [];
  let currentQuestion = 0;
  let promp2;
  
  document
    .getElementById("start-quiz-btn")
    .addEventListener("click", function () {
      document.querySelector(".hero").style.display = "none";
      document.getElementById("quiz-container").style.display = "block";
      getQuestion(currentQuestion);
    });
  
  function getQuestion(index) {
    const questionText = document.getElementById("question");
    const answersList = document.getElementById("answers");
  
    questionText.textContent = questions[index].question;
    answersList.innerHTML = "";
  
    questions[index].answers.forEach((answer, i) => {
      const li = document.createElement("li");
      li.textContent = answer;
      li.classList.toggle("selected", selectedAnswers[index] === answer);
      li.addEventListener("click", () => selectAnswer(answer, li));
      answersList.appendChild(li);
    });
  
    document.getElementById("next").disabled =
      selectedAnswers[index] === undefined;
  }
  
  function selectAnswer(answer, liElement) {
    selectedAnswers[currentQuestion] = answer;
  
    const allOptions = document.querySelectorAll("#answers li");
    allOptions.forEach((li) => li.classList.remove("selected"));
    liElement.classList.add("selected");
  
    document.getElementById("next").disabled = false;
  }
  
  function navigate() {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      getQuestion(currentQuestion);
    } else {
      selectedAnswers.unshift(preBuilt);
      promp2 = selectedAnswers.join(" ");
      // alert(promp2); // ye hai
    }
  }
  
  const ageInput = document.getElementById("age");
  const genderInputs = document.querySelectorAll('input[name="gender"]');
  const countrySelect = document.querySelector(".hero-country-dropdown select");
  const startQuizButton = document.getElementById("start-quiz-btn");
  
  let age;
  let gender;
  let country;
  
  startQuizButton.disabled = true;
  
  ageInput.addEventListener("input", validateForm);
  genderInputs.forEach((input) => input.addEventListener("change", validateForm));
  countrySelect.addEventListener("change", validateForm);
  
  function validateForm() {
    age = ageInput.value.trim();
    gender = Array.from(genderInputs).find((input) => input.checked)?.value;
    country = countrySelect.value;
  
    if (age && gender && country) {
      startQuizButton.disabled = false;
    } else {
      startQuizButton.disabled = true;
    }
  }
  
  startQuizButton.addEventListener("click", function (event) {
    if (!age || !gender || !country) {
      alert(
        "As you have not entered your details we have assumed you prefer not to say your gender, we set your country as India and your age as 30 which is the average age of Indians (If you have filled neither of them)"
      );
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  });

  





  const API_KEY="apikey";
  const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" + API_KEY;


let cnt = 0;

let btn4 = document.querySelector('#next')

btn4.addEventListener('click' , (e)=>{
    cnt++
    if(cnt == 10){
        document.getElementById("quiz-container").style.display = "none";
        document.querySelector(".loader").style.display = "block";

        btn4.disabled = true;
        async function getResponse(event) {
            event.preventDefault();
            console.log("Sending request...");
            
            const requestBody = {
                contents: [{
                    parts: [{ text: promp2 }],
                }]
            };
        
            try {
                console.log("Request Body:", requestBody);
                const response = await fetch(API_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(requestBody)
                });
        
                if (response.ok) {
                    const data = await response.json();
                    displayResponse(data); // Function to display the API response in the DOM
                } else {
                    console.error("Failed to fetch response:", response.statusText);
                }
            } catch (error) {
                console.error("Error occurred:", error);
            }
        }


        
        function displayResponse(data) {
            const text = data.candidates[0].content.parts[0].text;
            document.querySelector('.response').innerText = text;
            console.log(text);
            document.querySelector(".loader").style.display = "none";
            document.querySelector(".response-parent").style.display = "block";


        }

        getResponse(e);
        
    }
    console.log(cnt);
});


  
