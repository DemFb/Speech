const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// 

const intro = ['Salut, comment ça va'];
const greetings  = ['Je vais bien merci' ];
const weatherSun = ['Il fera beau toute la journée'];
const weatherCold = ['Il fera froid le matin mais pour le reste de la journée il fera beau'];
const weatherRain = ['il va pleuvoir toute la journée, penses à prendre un parapluie'];
const thanks = ['de rien, bon, je dois partir chasser au revoir'];


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('voice is activated, you can to microphone');
};

recognition.onresult = function (event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};


// add the listener to the btn

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'Je ne comprend pas ce que tu dis, ';

    if (message.includes('Salut')) {
        const introText = intro[Math.floor(Math.random() * intro.length)]
        speech.text = introText;
    } else if(message.includes('ça va et toi')) {
       const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    } else if (message.includes('fera-t-il beau')) {
        const weatherSunText = weatherSun[Math.floor(Math.random() * weatherSun.length)];
        speech.text = weatherSunText;
    } else if(message.includes('fera-t-il froid')) {
        const weatherColdText = weatherCold[Math.floor(Math.random() * weatherCold.length)];
        speech.text = weatherColdText;
    } else if(message.includes('va-t-il pleuvoir')) {
        const weatherRainText = weatherRain[Math.floor(Math.random() * weatherRain.length)];
        speech.text = weatherRainText;
    } else if (message.includes('merci')) {
        const thanksText = thanks[Math.floor(Math.random() * thanks.length)];
        speech.text = thanksText; 
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    
    window.speechSynthesis.speak(speech);
}
