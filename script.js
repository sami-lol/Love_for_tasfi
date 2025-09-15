// Tasfi's Birthday Unlock Script
const birthDate = new Date("2003-09-16"); // Tasfi's birthday

// Function to reset time to midnight for fair date comparison
function resetTime(date) {
  date.setHours(0, 0, 0, 0);
  return date;
}

const currentDate = resetTime(new Date());
const contentList = document.getElementById("content-list");

// Function to get correct ordinal (st, nd, rd, th)
function getOrdinal(n) {
  if (n % 100 >= 11 && n % 100 <= 13) return n + "th";
  switch (n % 10) {
    case 1: return n + "st";
    case 2: return n + "nd";
    case 3: return n + "rd";
    default: return n + "th";
  }
}

// Generate cards for ages 22–80
for (let age = 22; age <= 80; age++) {
  const unlockDate = resetTime(new Date(birthDate));
  unlockDate.setFullYear(birthDate.getFullYear() + age);

  const isUnlocked = currentDate >= unlockDate;

  const div = document.createElement("div");
  div.className = "card" + (isUnlocked ? "" : " locked");

  div.innerHTML = `
    <h2>🎂 ${getOrdinal(age)} Birthday</h2>
    ${isUnlocked 
      ? `<a href="content/${age}.html" target="_blank">Your Love Note Awaits Tasfi 💌</a>` 
      : `<p>🔒 Will unlock on: <strong>${unlockDate.toDateString()}</strong></p>`}
  `;

  contentList.appendChild(div);
}
