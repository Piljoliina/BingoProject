document.addEventListener("DOMContentLoaded", () => {
    const size = 4;
    const totalCells = size * size;
    const grid = document.getElementById("bingo-grid");
    const clicked = Array.from({ length: size }, () => Array(size).fill(false));

    // ✅ Hardcoded sentences instead of sanat.txt
    const sentences = [
       "Everythings messed up",
"Donald trump",
"War",
"Europe",
"*2 opposing sides agree on 1 thing*",
"rigged elections",
"global warming",
"Who did you vote?",
"China",
"If atleast 3 people have different political parties",
"*Someone says something incredibly controversial*",
"Why did we X?",
"Oligarchy",
"Democracy",
"Republican",
"If the argument turns heated",
"If someone uses a derogatory term",
"If the topic of migration is brought up more than 3 times",
"If 3 different presidents/leaders are mentioned",
"Asia",
"Africa",
"The middle-east",
"America",
"What is wrong with you?",
"Are you dumb/stupid?",
"Illegal",
"If 3 different drugs are mentioned",
"*If someone changes their opinions*",
"*Someone who's not a part of the convo starts to interrupt it*",
"Terrorist/ terrorist organization",
"Israel",
"Palestine",
"The military",
"Russia",
"Vladimir putin",
"Greenland",
"Military spending",
"*B.R.I.C.S get's mentioned*",
"Where even is (country's name)?",
"antarctica",
"Atlantic ocean",
"Artificial intellegence",
"If the LGBTQ is mentioned negatively",
"*Crimerates get brought up*",
"*Tariffs get brought up*",
"*Other one starts ignoring the other*",
"If they interrupt each other atleast 5 times",
"If either admits on being wrong",
"European union",
"Nato"
    ]; 

    if (sentences.length < totalCells) {
        alert(`Not enough sentences (${sentences.length}) to fill the bingo board.`);
        return;
    }

    shuffle(sentences);
    const selected = sentences.slice(0, totalCells);

    selected.forEach((sentence, index) => {
        const row = Math.floor(index / size);
        const col = index % size;

        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = sentence;
        cell.dataset.row = row;
        cell.dataset.col = col;

        cell.addEventListener("click", function () {
            clicked[row][col] = !clicked[row][col];
            this.classList.toggle("clicked");

            document.querySelectorAll(".cell").forEach(c => c.classList.remove("win"));
            const winLine = checkWin(clicked);

            if (winLine) {
                winLine.forEach(([r, c]) => {
                    const selector = `.cell[data-row="${r}"][data-col="${c}"]`;
                    document.querySelector(selector).classList.add("win");
                });
                setTimeout(() => alert("BINGO!"), 100);
            }
        });

        grid.appendChild(cell);
    });

    function checkWin(grid) {
        for (let i = 0; i < size; i++) {
            if (grid[i].every(v => v)) return Array.from({ length: size }, (_, j) => [i, j]);
        }
        for (let j = 0; j < size; j++) {
            if (grid.map(row => row[j]).every(v => v)) return Array.from({ length: size }, (_, i) => [i, j]);
        }
        if ([0,1,2,3].every(i => grid[i][i])) return [0,1,2,3].map(i => [i, i]);
        if ([0,1,2,3].every(i => grid[i][size - 1 - i])) return [0,1,2,3].map(i => [i, size - 1 - i]);
        return null;
    }

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
});