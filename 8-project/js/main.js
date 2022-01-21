let menus = document.getElementsByTagName("article");

function menu(p) {
  if (p === ``) {
    for (let i = 0; i < menus.length; i++) {
      menus[i].style.display = `flex`;
    }
  } else if (p === `breakfast`) {
    for (let i = 0; i < menus.length; i++) {
      if (menus[i].className !== `breakfast`) {
        menus[i].style.display = `none`;
      } else {
        menus[i].style.display = `flex`;
      }
    }
  } else if (p === `lunch`) {
    for (let i = 0; i < menus.length; i++) {
      if (menus[i].className !== `lunch`) {
        menus[i].style.display = `none`;
      } else {
        menus[i].style.display = `flex`;
      }
    }
  } else if (p === `shakes`) {
    for (let i = 0; i < menus.length; i++) {
      if (menus[i].className !== `shakes`) {
        menus[i].style.display = `none`;
      } else {
        menus[i].style.display = `flex`;
      }
    }
  } else if (p === `dinner`) {
    for (let i = 0; i < menus.length; i++) {
      if (menus[i].className !== `dinner`) {
        menus[i].style.display = `none`;
      } else {
        menus[i].style.display = `flex`;
      }
    }
  }
}
