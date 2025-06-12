// Smooth navigation highlight and page scrolling handled by anchors.

    // Font size control
    (function() {
      const minFont = 14;
      const maxFont = 22;
      let currentFont = 16;
      const htmlEl = document.documentElement;

      const adjustFont = (change) => {
        currentFont = Math.min(maxFont, Math.max(minFont, currentFont + change));
        htmlEl.style.fontSize = currentFont + "px";
      };

      document.getElementById('font-increase').addEventListener('click', e => {
        e.preventDefault();
        adjustFont(2);
      });
      document.getElementById('font-decrease').addEventListener('click', e => {
        e.preventDefault();
        adjustFont(-2);
      });
    })();

    // Multi-language simulation: toggles text content on key elements (for demo)
    const languages = {
      en: {
        homeTitle: "Empowering Digital Literacy!",
        homePara: "Welcome to the Digital Literacy Course, designed especially for parents and elderly users to easily learn the digital tools they need in today’s world. Explore tutorials, ask DigiBuddy your questions, and give us feedback to keep improving!",
        tutorialsTitle: "Tutorials",
        aichatTitle: "Ask DigiBuddy - Your Digital Assistant",
        aichatPara: "DigiBuddy is here to answer your questions about digital tools and help you learn more effectively. Click the chat icon at the bottom right to start chatting!",
        feedbackTitle: "Your Feedback",
        nameLabel: "Name",
        emailLabel: "Email address",
        suggestLabel: "Suggestions / Feedback",
        ratingLabel: "How would you rate this course?",
        feedbackSubmit: "Submit Feedback"
      },
      hi: {
        homeTitle: "डिजिटल साक्षरता को सशक्त बनाना!",
        homePara: "डिजिटल साक्षरता पाठ्यक्रम में आपका स्वागत है, जो विशेष रूप से माता-पिता और वृद्ध उपयोगकर्ताओं के लिए डिज़ाइन किया गया है ताकि वे आज की दुनिया में आवश्यक डिजिटल उपकरणों को आसानी से सीख सकें। ट्यूटोरियल देखें, DigiBuddy से अपने सवाल पूछें, और हमें प्रतिक्रिया दें ताकि हम सुधार कर सकें!",
        tutorialsTitle: "ट्यूटोरियल्स",
        aichatTitle: "DigiBuddy से पूछें - आपका डिजिटल सहायक",
        aichatPara: "DigiBuddy यहां आपके डिजिटल उपकरणों से संबंधित प्रश्नों का उत्तर देने और आपकी बेहतर सीखने में मदद करने के लिए है। चैट शुरू करने के लिए नीचे दाईं ओर चैट आइकन पर क्लिक करें!",
        feedbackTitle: "आपकी प्रतिक्रिया",
        nameLabel: "नाम",
        emailLabel: "ईमेल पता",
        suggestLabel: "सुझाव / प्रतिक्रिया",
        ratingLabel: "आप इस कोर्स को कैसे रेट करेंगे?",
        feedbackSubmit: "प्रतिक्रिया भेजें"
      },
      es: {
        homeTitle: "¡Empoderando la alfabetización digital!",
        homePara: "Bienvenido al Curso de Alfabetización Digital, diseñado especialmente para padres y usuarios mayores para que aprendan fácilmente las herramientas digitales que necesitan en el mundo actual. Explora tutoriales, pregunta a DigiBuddy tus dudas y danos feedback para seguir mejorando.",
        tutorialsTitle: "Tutoriales",
        aichatTitle: "Pregunta a DigiBuddy - Tu asistente digital",
        aichatPara: "DigiBuddy está aquí para responder tus preguntas sobre herramientas digitales y ayudarte a aprender más efectivamente. Haz clic en el ícono de chat en la parte inferior derecha para empezar a chatear.",
        feedbackTitle: "Tus comentarios",
        nameLabel: "Nombre",
        emailLabel: "Correo electrónico",
        suggestLabel: "Sugerencias / Comentarios",
        ratingLabel: "¿Cómo calificarías este curso?",
        feedbackSubmit: "Enviar comentarios"
      }
    };

    const updateLanguage = (lang) => {
      const text = languages[lang];

      document.querySelector("#home h1").textContent = text.homeTitle;
      document.querySelector("#home p").textContent = text.homePara;
      document.getElementById("tutorials-title").textContent = text.tutorialsTitle;
      document.getElementById("aichat-title").textContent = text.aichatTitle;
      document.querySelector("#aichat p").textContent = text.aichatPara;
      document.getElementById("feedback-title").textContent = text.feedbackTitle;
      document.querySelector('label[for="fb-name"]').textContent = text.nameLabel;
      document.querySelector('label[for="fb-email"]').textContent = text.emailLabel;
      document.querySelector('label[for="fb-suggestions"]').textContent = text.suggestLabel;
      document.querySelector('label[for="fb-rating"]').textContent = text.ratingLabel;
      document.querySelector('#feedback-form button').textContent = text.feedbackSubmit;
    };

    const languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', (e) => {
      updateLanguage(e.target.value);
    });
    updateLanguage('en');

    // Feedback form submission
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackMsg = document.getElementById('feedback-msg');
    feedbackForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple front-end validation already enforced through required fields

      // Sends feedback to backend here (mock)
      feedbackMsg.textContent = "Thank you for your feedback!";
      feedbackForm.reset();

      setTimeout(() => {
        feedbackMsg.textContent = "";
      }, 7000);
    });

    // Chatbot UI functionality - mock bot that responds with canned answers
    const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotInputContainer = document.getElementById('chatbot-input-container');

    chatbotToggleBtn.addEventListener('click', () => {
      chatbotContainer.classList.remove('hidden');
      chatbotToggleBtn.style.display = 'none';
      chatbotInput.focus();
      // Add welcome message if empty
      if(chatbotMessages.childElementCount === 0){
        appendBotMessage("Hello! I am DigiBuddy, your digital assistant. Ask me anything about WhatsApp, Paytm, Google Maps, or general digital tools!");
      }
    });
    chatbotCloseBtn.addEventListener('click', () => {
      chatbotContainer.classList.add('hidden');
      chatbotToggleBtn.style.display = 'flex';
      chatbotMessages.innerHTML = '';
    });

    function appendBotMessage(text) {
      const div = document.createElement('div');
      div.className = 'chat-message chatbot-message';
      div.textContent = text;
      chatbotMessages.appendChild(div);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    function appendUserMessage(text) {
      const div = document.createElement('div');
      div.className = 'chat-message user-message';
      div.textContent = text;
      chatbotMessages.appendChild(div);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Simple canned responses for demo
    const cannedResponses = {
      whatsapp: "WhatsApp is a user-friendly messaging app where you can chat, call, and share media with friends and family. To get started, open the app and create an account with your phone number.",
      paytm: "Paytm allows you to make payments, recharge your phone, pay bills, and transfer money digitally using your mobile device.",
      'google maps': "Google Maps helps you find places, get directions, and explore the world. You can use it to navigate while driving, walking, or using public transport.",
      default: "I'm here to help! Could you please ask about WhatsApp, Paytm, or Google Maps?"
    };

    chatbotInputContainer.addEventListener('submit', e => {
      e.preventDefault();
      const userText = chatbotInput.value.trim();
      if(!userText) return;
      appendUserMessage(userText);
      chatbotInput.value = '';
      // Bot response - simple matching
      setTimeout(() => {
        const lower = userText.toLowerCase();
        let response = cannedResponses.default;
        Object.keys(cannedResponses).forEach(key => {
          if(lower.includes(key)){
            response = cannedResponses[key];
          }
        });
        appendBotMessage(response);
      }, 800);
    });

    // Accessibility - Voice commands: demo implementation (Start/stop and interpret - simple)
    const voiceBtn = document.getElementById('voice-command-btn');
    let recognition;
    let isListening = false;
    if(window.SpeechRecognition || window.webkitSpeechRecognition) {
      recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        isListening = true;
        voiceBtn.classList.add('listening');
        voiceBtn.setAttribute('aria-pressed', 'true');
        voiceBtn.textContent = '🎤 Listening...';
      };
      recognition.onend = () => {
        isListening = false;
        voiceBtn.classList.remove('listening');
        voiceBtn.setAttribute('aria-pressed', 'false');
        voiceBtn.innerHTML = '<span class="material-icons" aria-hidden="true">keyboard_voice</span> Voice';
      };
      recognition.onerror = (event) => {
        isListening = false;
        voiceBtn.classList.remove('listening');
        voiceBtn.setAttribute('aria-pressed', 'false');
        voiceBtn.innerHTML = '<span class="material-icons" aria-hidden="true">keyboard_voice</span> Voice';
        alert('Voice recognition error: ' + event.error);
      };

      recognition.onresult = event => {
        const voiceText = event.results[0][0].transcript.toLowerCase();
        // Notify user about recognized command and navigate or perform
        if(voiceText.includes('tutorials')) {
          location.hash = '#tutorials';
          alert('Navigating to Tutorials');
        } else if(voiceText.includes('home')) {
          location.hash = '#home';
          alert('Navigating to Home');
        } else if(voiceText.includes('chat') || voiceText.includes('digibuddy')) {
          chatbotToggleBtn.click();
          alert('Opening DigiBuddy chat');
        } else if(voiceText.includes('feedback')) {
          location.hash = '#feedback';
          alert('Navigating to Feedback');
        } else {
          alert(`You said: "${voiceText}". Try saying "Go to Tutorials" or "Open Chat".`);
        }
      };
    } else {
      voiceBtn.disabled = true;
      voiceBtn.title = "Voice commands not supported in this browser";
    }

    voiceBtn.addEventListener('click', () => {
      if(!recognition) return;
      if(isListening) {
        recognition.stop();
      } else {
        recognition.start();
      }
    });