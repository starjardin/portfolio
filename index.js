const profilePic = document.querySelector(".profile");
const profileBigPic = document.querySelector(".profile-big")
profilePic.addEventListener("click", () => {
  if (profilePic.classList.contains("open")) {
    profilePic.classList.remove("open")
    document.body.style.overflow = "scroll"
  } else {
    profilePic.classList.add("open")
    document.body.style.overflow = "hidden"
  }
})