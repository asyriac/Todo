let ans = document.querySelectorAll("#category");

// Adding background color to the category option
for (let i = 0; i < ans.length; i++) {
  console.log(ans[i].innerHTML.trim());
  ans[i].classList.add("text-white");
  ans[i].classList.add("p-2");
  if (ans[i].innerHTML.trim() === "Work") {
    ans[i].style.backgroundColor = "coral";
  } else if (ans[i].innerHTML.trim() === "Home") {
    ans[i].style.backgroundColor = "dodgerBlue";
  } else if (ans[i].innerHTML.trim() === "School") {
    ans[i].style.backgroundColor = "darkkhaki";
  } else if (ans[i].innerHTML.trim() === "Cleaning") {
    ans[i].style.backgroundColor = "mediumOrchid";
  } else {
    ans[i].style.backgroundColor = "black";
  }
}
