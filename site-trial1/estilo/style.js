function clickMenu() {
  if (items.style.display == "block") {
    items.style.display = "none"
  } else {
    items.style.display = "block"
  }
}

function sizeChange() {
  if (window.innerWidth >= 768) {
    items.style.display = "block"
  } else {
    items.style.display = "none"
  }
}