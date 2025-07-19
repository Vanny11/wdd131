const quotes = [
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { quote: "With the new day comes new strength and new thoughts.", author: "Eleanor Roosevelt" },
  { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" }
];

const prompts = [
  "What are three things you're grateful for today?",
  "What is one thing you want to accomplish today?",
  "Describe a moment that made you smile recently.",
  "Write about how you will take care of yourself today."
];

const focusTips = [
  "Stay hydrated and stretch every hour for a healthy body and mind.",
  "Use the Pomodoro technique to boost focus and productivity.",
  "Take regular eye breaks—look 20 feet away for 20 seconds every 20 minutes.",
  "Keep your workspace clean and organized to reduce mental clutter.",
  "Plan your top 3 tasks the night before.",
  "Listen to calming instrumental music to stay in the zone.",
  "Practice deep breathing for 1 minute to reset your mind.",
  "Turn off non-essential notifications while working.",
  "Celebrate small wins throughout your day."
];

function generateQuote() {
  const { quote, author } = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').textContent = quote;
  document.getElementById('author').textContent = `- ${author}`;
}

function generatePrompt() {
  const prompt = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById('prompt').textContent = prompt;
}

function showRandomTip() {
  const tip = focusTips[Math.floor(Math.random() * focusTips.length)];
  const tipElement = document.getElementById('focusTip');
  if (tipElement) {
    tipElement.textContent = tip;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  generateQuote();
  generatePrompt();
  showRandomTip();
});
