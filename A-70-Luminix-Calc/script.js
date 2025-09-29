const display = document.getElementById("display")
document.getElementById("keys").addEventListener("click",ev => {
    if(ev.target.value === "="){
        try {
            display.value = eval(display.value)
        } catch  {
            display.value = `Sytax Error🔪`
        }
    }

    else if (ev.target.value === "AC"){
display.value = ""
    }

    else if (ev.target.value === "Del"){
        display.value = display.value.slice(0,-1)
    }
    else display.value += ev.target.value
})