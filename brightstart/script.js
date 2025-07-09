const quotes = [
    "Believe you can and you're halfway there.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Sometimes later becomes never. Do it now.",
    "Great things never come from comfort zones."
  ];
  
  function newQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = quote;
  }
  
  function showPage(pageId) {
    document.querySelectorAll(".page").forEach(section => {
      section.classList.add("hidden");
      section.classList.remove("active");
    });
    const page = document.getElementById(pageId);
    page.classList.remove("hidden");
    page.classList.add("active");
  }
  
  function addTask() {
    const input = document.getElementById("todoInput");
    const task = input.value.trim();
    if (task !== "") {
      const li = document.createElement("li");
      li.textContent = task;
      li.addEventListener("click", () => li.classList.toggle("done"));
      document.getElementById("todoList").appendChild(li);
      input.value = "";
    }
  }
  
  // Initialize with first quote
  window.onload = function () {
    newQuote();
    showPage('home');
  };
  