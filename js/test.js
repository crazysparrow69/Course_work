const div = document.getElementById("hidden-menu");

const func = () => {
  div.style.visibility = "visible";
};

div.addEventListener("mouseover", func);

function shit() {
  console.log("shit");
}

document.getElementById("serial").addEventListener("click", shit);