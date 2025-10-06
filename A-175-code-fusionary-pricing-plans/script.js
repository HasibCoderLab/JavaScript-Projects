// Toggle show/hide plan options
document.querySelector(".toggle-btn").addEventListener("click", () => {
    const options = document.getElementById("plan-options-std");
    if (options.style.display === "flex") {
        options.style.display = "none";
    }else{
        options.style.display = "flex";
    }
    
});
const setPlan = (plan, type) => {
    if (plan === "std") {
        if (type === "month") {
            document.getElementById("price-std").innerText = "$19";
            document.getElementById("duration-std").innerText = "/per month";

        } else if (type === "year") {
            document.getElementById("price-std").innerText = "$59";
            document.getElementById("duration-std").innerText = "/per year";
        }
    }
    document.getElementById("plan-options-std").style.display = "none";
}