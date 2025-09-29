// Finding the button and model to display the model
const buttons = document.querySelectorAll('.modal-btn');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

// Event listener for each button
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        modals[index].style.display = 'flex';
    });
});

// Event listener for each close button
closeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const modalId = event.target.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'none';
    });
});

// Close the modal when clicked
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

// Close the modal when pressing Esc

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
    }
});
