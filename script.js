document.getElementById("date").textContent = new Date().toDateString();

const searchInput = document.getElementById("search");
const output = document.getElementById("output");
const validAliases = ["net", "tragic", "sim", "resist"];

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const val = searchInput.value.trim().toLowerCase();
    if (validAliases.includes(val)) {
      window.location.href = `members.html?alias=${val}`;
    } else {
      output.textContent = `>>> ACCESS DENIED: No match for "${val}"`;
    }
  }
});
