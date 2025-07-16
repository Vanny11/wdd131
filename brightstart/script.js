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

function generateQuote() {
  const { quote, author } = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').textContent = quote;
  document.getElementById('author').textContent = `- ${author}`;
}

function generatePrompt() {
  const prompt = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById('prompt').textContent = prompt;
}

function addTask() {
  const input = document.getElementById('taskInput');
  const value = input.value.trim();
  if (value) {
    const li = document.createElement('li');
    li.classList.add('task');
    li.innerHTML = `<div><input type="checkbox"> ${value}</div><button onclick="this.parentElement.remove()">X</button>`;
    document.getElementById('taskList').appendChild(li);
    input.value = '';
  }
}

function filterTasks(type) {
  const tasks = document.querySelectorAll('#taskList li');
  tasks.forEach(task => {
    const checked = task.querySelector('input[type="checkbox"]').checked;
    task.style.display = (type === 'all' || (type === 'incomplete' && !checked)) ? 'flex' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  generateQuote();
  generatePrompt();
});
