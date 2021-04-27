const select = el => (document.querySelector(el)),
    selectAll = el => [].slice.call(document.querySelectorAll(el)),
    container = select("#container"),
    rgbToHex = () => {
        const r = () => Math.round(Math.random() * 255),
            g = r.bind(),
            b = r.bind();
        return "#" + [r(), g(), b()].map(num => {
            let hex = Number(num).toString(16);
            if (hex.length < 2) hex = "0" + hex;
            return hex;
        }).join("");
    },
    squares = 500,
    setColor = element => {
        const randomColor = rgbToHex()
        element.setAttribute("style", `background-color:${randomColor};box-shadow: 0 0 .2rem ${randomColor} ,0 0 1rem ${randomColor}`);
    },
    removeColor = element => element.removeAttribute("style"),
    createSquares = () => {
        for (let i = 0; i < squares; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", () => setColor(square));
            square.addEventListener("mouseout", () => removeColor(square));
            container.appendChild(square);
        }
    };

createSquares();