function getById(id) {
  return document.getElementById(id);
}

// favorite count
const favorites = document.querySelectorAll(".favorite-btn");

for (let favorite of favorites) {
  favorite.addEventListener("click", function (e) {
    let favoriteCount = parseInt(getById("favorite-count").innerText);
    favoriteCount++;
    getById("favorite-count").innerText = favoriteCount;
  });
}
// copy count
const copyButtons = document.querySelectorAll(".copy-btn");
for (const copyBtn of copyButtons) {
  copyBtn.addEventListener("click", function (e) {
    const card = copyBtn.closest(".hotline-card-body");
    const numberToCopy = card.querySelector(".hotline-number").innerText;
    navigator.clipboard.writeText(numberToCopy).then(() => {
      alert(numberToCopy + " number copied");
    });
    let copyCount = parseInt(document.getElementById("copy-number").innerText);
    copyCount++;
    document.getElementById("copy-number").innerText = copyCount;
  });
}
// call btn
const callButtons = document.querySelectorAll(".call-btn");
for (const callBtn of callButtons) {
  callBtn.addEventListener("click", function (e) {
    const coin = parseInt(getById("coin").innerText);
    const coinCut = coin - 20;
    const card = callBtn.closest(".hotline-card-body");
    const serviceTitle = card.querySelector(".card-title").innerText;
    const serviceNumber = card.querySelector(".hotline-number").innerText;

    if (coin >= 20) {
      alert(`${serviceTitle} calling in ${serviceNumber} `);
      document.getElementById("coin").innerText = coinCut;
    } else {
      alert("You have not sufficient balance");
      return;
    }
    // call history
    const callHistory = document.getElementById("call-history");

    const history = document.createElement("div");
    history.classList.add(
      "bg-gray-50",
      "flex",
      "flex-col",
      "lg:flex-row",
      "justify-between",
      "lg:items-center",
      "flex-wrap",
      "gap-2",
      "rounded-2xl",
      "p-4",
      "mt-2"
    );
    const service = document.createElement("div");
    // left side service title
    const callHistoryTitle = document.createElement("h3");
    callHistoryTitle.innerText = serviceTitle;
    callHistoryTitle.classList.add("text-lg", "font-semibold");
    const callHistoryTitleText = callHistoryTitle.innerText;

    // number
    const callHistoryNumber = document.createElement("p");
    callHistoryNumber.innerText = serviceNumber;
    callHistoryNumber.classList.add(
      "text-base",
      "font-normal",
      "text-gray-500"
    );
    const callHistoryNumberText = callHistoryNumber.innerText;
    service.appendChild(callHistoryTitle);
    service.appendChild(callHistoryNumber);
    // right side time
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    const time = document.createElement("div");
    time.innerText = currentTime;
    const timeText = time.innerText;

    history.appendChild(service);
    history.appendChild(time);
    callHistory.prepend(history);

    // clear btn
    document
      .getElementById("clear-history-btn")
      .addEventListener("click", function (e) {
        callHistory.innerHTML = "";
        
      });
  });
}
