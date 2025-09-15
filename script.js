// Birthday Unlock Logic

const birthDate = new Date("2003-09-16"); // Replace with her real birthdate if needed
const currentDate = new Date();
const contentList = document.getElementById("content-list");

for (let age = 22; age <= 80; age++) {
  const unlockDate = new Date(birthDate);
  unlockDate.setFullYear(birthDate.getFullYear() + age);

  const isUnlocked = currentDate >= unlockDate;

  const div = document.createElement("div");
  div.className = "card" + (isUnlocked ? "" : " locked");

  div.innerHTML = `
    <h2>🎂 ${age}th Birthday</h2>
    ${
      isUnlocked
        ? `<a href="content/${age}.html" target="_blank">Your Love Note Awaits tasfi 💌</a>`
        : `<p>🔒 Will unlock on: <strong>${unlockDate.toDateString()}</strong></p>`
    }
  `;

  contentList.appendChild(div);
}
