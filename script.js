let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    }else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Hey, ${myName}`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hey, ${storedName}`
  }

  myButton.onclick = () => {
    setUserName();
  }