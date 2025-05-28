const members = [
  {
    name: "cat",
    status: "online",
    img: "images/profile1.png",
    about: "https://guns.lol/operaa"
  },
  {
    name: "death",
    status: "dnd",
    img: "images/profile1.png",
    about: "“I’m drinking an energy drink.”"
  }
];

const memberList = document.getElementById("memberList");
const profilePanel = document.getElementById("profilePanel");

members.forEach(member => {
  const div = document.createElement("div");
  div.className = "member";
  div.innerHTML = `
    <div style="position: relative;">
      <img src="${member.img}" alt="${member.name}" />
      <span class="status-dot status-${member.status}"></span>
    </div>
    <span>${member.name}</span>
  `;

  div.onclick = () => {
    document.getElementById("profileImage").src = member.img;
    document.getElementById("profileName").textContent = member.name;
    document.getElementById("profileAbout").textContent = member.about;
  };

  memberList.appendChild(div);
});
