function bannerFunction() {
  var banner = document.getElementById("banner");
  const sticky = banner.offsetTop;
  if (window.scrollY > sticky) {
    banner.classList.remove("pt-[184px]");
    banner.classList.add("pt-[64px]");
    banner.classList.remove("duration-200");
    banner.classList.add("duration-500");
  } else {
    banner.classList.remove("pt-[64px]");
    banner.classList.add("pt-[184px]");
    banner.classList.remove("duration-500");
    banner.classList.add("duration-200");
  }
}

window.onscroll = () => {
  bannerFunction();
};
