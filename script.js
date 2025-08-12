const container = document.querySelector('.container');

const colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

const boxCount = 9; // Number of boxes per row and column

// Set grid template dynamically
container.style.gridTemplateColumns = `repeat(${boxCount}, 1fr)`;
container.style.gridTemplateRows = `repeat(${boxCount}, 1fr)`;

// Create boxes
for (let i = 0; i < boxCount * boxCount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = "#0b0b0eff";
    box.classList.add("box");
    container.appendChild(box);

    box.addEventListener('mouseenter', () => {
        box.style.backgroundColor = generateRandom();
    });
    box.addEventListener('mouseleave', () => {
        box.style.backgroundColor = "#0b0b0eff";
    });
    box.addEventListener('click', () => {
        box.style.backgroundColor = generateRandom();
    });


}

function generateRandom() {
    let randomColor = "#";
    for (let j = 0; j < 6; j++) {
        randomColor += colors[Math.floor(Math.random() * colors.length)]
    }
    return randomColor;
};
