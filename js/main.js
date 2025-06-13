function redirectTo(page) {
  // Add any animation or delay here if needed
  window.location.href = page;
}


var titles = ["Home", "?", "Users", "?", "Murdered", ".lol", "I am your father"];
    var currentTitleIndex = 0;
    function changeTitle() {
      document.title = titles[currentTitleIndex];
      currentTitleIndex = (currentTitleIndex + 1) % titles.length;
    }
    setInterval(changeTitle, 500);