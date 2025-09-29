const display = document.getElementById("display");

document.getElementById("keys").addEventListener("click", (ev) => {
  const value = ev.target.value;
  if (!value) return;

  if (value === "=") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = " ⚠️  Syntax Error";
    }
  } else if (value === "AC") {
    display.value = "";
  } else if (value === "Del") {
    display.value = display.value.slice(0, -1);
  } else {
    display.value += value;
  }
});
