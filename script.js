<<<<<<< HEAD
// Birthday Unlock Logic

const birthDate = new Date("2003-09-16");
const currentDate = new Date();
const contentList = document.getElementById("content-list");

for (let age = 23; age <= 40; age++) {
  const unlockDate = new Date(birthDate);
  unlockDate.setFullYear(birthDate.getFullYear() + age);

  const isUnlocked = currentDate >= unlockDate;

  const div = document.createElement("div");
  div.className = "card" + (isUnlocked ? "" : " locked");

  div.innerHTML = `
    <h2>🎂 ${age}th Birthday</h2>
    ${
      isUnlocked
        ? `<a href="content/${age}.html" target="_blank">Open Your Message</a>`
        : `<p>🔒 Will unlock on: <strong>${unlockDate.toDateString()}</strong></p>`
    }
  `;

  contentList.appendChild(div);
}
=======
// Birthday Unlock Logic

const birthDate = new Date("2003-09-16");
const currentDate = new Date();
const contentList = document.getElementById("content-list");

for (let age = 23; age <= 40; age++) {
  const unlockDate = new Date(birthDate);
  unlockDate.setFullYear(birthDate.getFullYear() + age);

  const isUnlocked = currentDate >= unlockDate;

  const div = document.createElement("div");
  div.className = "card" + (isUnlocked ? "" : " locked");

  div.innerHTML = `
    <h2>🎂 ${age}th Birthday</h2>
    ${
      isUnlocked
        ? `<a href="content/${age}.html" target="_blank">Open Your Message</a>`
        : `<p>🔒 Will unlock on: <strong>${unlockDate.toDateString()}</strong></p>`
    }
  `;

  contentList.appendChild(div);
}
>>>>>>> 053fa8b (Test: checking if connected to GitHub)
