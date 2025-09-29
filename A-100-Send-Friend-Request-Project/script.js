var istatus = document.querySelector("h5")
var btn = document.querySelector("#add")
var cheke = 0


btn.addEventListener("click", function () {
    if (cheke == 0) {
        istatus.innerHTML = "Friends"
        istatus.style.color = "green";
        btn.innerHTML = "Remove Friend "

        cheke = 1
    }

    else {
        istatus.innerHTML = " Add  Friend  "
        istatus.style.color = "red"
        btn.innerHTML = "Add Friend "
        cheke = 0
    }
})

