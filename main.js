// code for my page navgation.
// document.addEventListener("DOMContentLoaded", () => {
//     const page1Button = document.querySelector(".page1");
//     const page2Button = document.querySelector(".page2");

//     if (page1Button) {
//         page1Button.addEventListener("click", (event) => {
//             event.preventDefault();
//             window.location.href = "main.html";
//         });
//     } else if (page2Button) {
//         page2Button.addEventListener("click", (event) => {
//             event.preventDefault();
//             window.location.href = "index.html";
//         });
//     }else {
//         console.error("Button with class 'page1' not found");
//     }
// });

// Helper function for button functionally 
document.addEventListener("DOMContentLoaded", () => {
    const buttons = [
        { class: "page1", destination: "main.html" },
        { class: "page2", destination: "index.html" }
        // Add more buttons if needed
    ];

    buttons.forEach((button) => {
        const element = document.querySelector(`.${button.class}`);
        if (element) {
            element.addEventListener("click", (event) => {
                event.preventDefault();
                window.location.href = button.destination;
            });
        } else {
            console.error(`Button with class '${button.class}' not found`);
        }
    });
});



