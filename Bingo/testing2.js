document.addEventListener("DOMContentLoaded", () => {
    const size = 4; // Bingo grid size (4x4)
    const totalCells = size * size;
    const grid = document.getElementById("bingo-grid");
    const clicked = Array.from({ length: size }, () => Array(size).fill(false));
    let clickCount = 0;
    const counterDisplay = document.getElementById("click-counter");

    // Word sets for each theme
    const themes = {
        esitykset: [
            "Presentation", "Audience", "Speech", "PowerPoint", "Slide", "Pitch", "Handout", "Notes",
            "Timekeeper", "Audience questions", "Q&A", "Debate", "Public speaking", "Stage fright", "Microphone",
            "Presentation skills", "Body language", "Visual aids", "Slideshows", "Feedback", "Rehearsal", 
            "Stage", "Conference", "Workshop", "Seminar"
        ],
        kokous: [
            "Meeting", "Agenda", "Minutes", "Conference call", "Presentations", "Action points", "Feedback", 
            "Project updates", "Time management", "Meeting room", "Coffee break", "Team collaboration", 
            "Deadlines", "Brainstorming", "Decision making", "Follow-up", "Emails", "Task assignment",
            "Teamwork", "Participants", "Summarize", "Proposals", "Discussions", "Objectives", "Networking"
        ],
        koulu: [
            "Classroom", "Teacher", "Student", "Homework", "Exam", "Grades", "Assignment", "Learning", 
            "Textbook", "Blackboard", "Quiz", "Presentation", "Library", "Lecture", "Subjects", "Recess",
            "Timetable", "Subjective", "Peer review", "Group project", "Homework deadlines", "Notes", "Cramming"
        ],
        diat: [
            "Slides", "PowerPoint", "Visuals", "Charts", "Graphs", "Design", "Font", "Text", "Headers", 
            "Colors", "Transitions", "Animation", "Background", "Images", "Presentation style", "Handouts", 
            "Projector", "Discussion", "Timetable", "Software", "Design tips", "Presentation tools", 
            "Screen", "Projector", "Keynote"
        ],
        tyokaverit: [
            "Co-workers", "Teamwork", "Collaboration", "Feedback", "Team spirit", "Communication", "Meetings", 
            "Work environment", "Goals", "Projects", "Management", "Supervision", "Work culture", 
            "Brainstorming", "Problem-solving", "Motivation", "Support", "Team building", "Respect", "Innovation",
            "Leadership", "Coaching", "Development", "Productivity", "Team dynamics"
        ],
        politiikka: [
            "Donald Trump", "War", "Europe", "*2 opposing sides agree on 1 thing*", "Rigged elections", 
            "Global warming", "Who did you vote?", "China", "If at least 3 people have different political parties", 
            "*Someone says something incredibly controversial*", "Why did we X?", "Oligarchy", "Democracy", 
            "Republican", "If the argument turns heated", "If someone uses a derogatory term", 
            "If the topic of migration is brought up more than 3 times", "If 3 different presidents or leaders are mentioned", 
            "Asia", "Africa", "The Middle-East", "America", "What is wrong with you?", "Are you dumb/stupid?", 
            "Illegal", "If 3 different drugs are mentioned", "*If someone changes their opinions*", 
            "*Someone who's not a part of the convo starts to interrupt it*", "Terrorist/ terrorist organization", 
            "Israel", "Palestine", "The military", "Russia", "Vladimir Putin", "Greenland", "Military spending", 
            "*B.R.I.C.S gets mentioned*", "Where even is (country's name)?", "Antarctica", "Atlantic Ocean", 
            "Artificial intelligence", "If the LGBTQ is mentioned negatively", "*Crime rates get brought up*", 
            "*Tariffs get brought up*", "*Other one starts ignoring the other*", 
            "If they interrupt each other at least 5 times", "If either admits on being wrong", "European Union", "NATO"
        ]
    };

    // Get selected theme from localStorage
    const selectedTheme = localStorage.getItem("selectedTheme");
    console.log("Selected theme:", selectedTheme);  // For debugging

    if (!selectedTheme || !themes[selectedTheme]) {
        alert("No theme selected or invalid theme. Returning to main menu.");
        window.location.href = "index.html";
        return;
    }

    // Get the words for the selected theme
    const themeWords = themes[selectedTheme];

    if (themeWords.length < totalCells) {
        alert(`Not enough sentences (${themeWords.length}) to fill the bingo board.`);
        return;
    }

    shuffle(themeWords);
    const selected = themeWords.slice(0, totalCells);

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

            clickCount += clicked[row][col] ? 1 : -1;
            counterDisplay.textContent = `Clicked: ${clickCount}`;

            document.querySelectorAll(".cell").forEach(c => c.classList.remove("win"));
            const winLine = checkWin(clicked);

            if (winLine) {
                console.log("Win detected:", winLine);
                winLine.forEach(([r, c]) => {
                    const selector = `.cell[data-row="${r}"][data-col="${c}"]`;
                    document.querySelector(selector).classList.add("win");
                });
                setTimeout(() => alert("BINGO!"), 100);
            }
        });

        grid.appendChild(cell);
    });

    // Check if the user won
    function checkWin(grid) {
        for (let i = 0; i < size; i++) {
            if (grid[i].every(v => v)) return Array.from({ length: size }, (_, j) => [i, j]);
        }
        for (let j = 0; j < size; j++) {
            if (grid.map(row => row[j]).every(v => v)) return Array.from({ length: size }, (_, i) => [i, j]);
        }
        if ([0, 1, 2, 3].every(i => grid[i][i])) return [0, 1, 2, 3].map(i => [i, i]);
        if ([0, 1, 2, 3].every(i => grid[i][size - 1 - i])) return [0, 1, 2, 3].map(i => [i, size - 1 - i]);
        return null;
    }

    // Shuffle the array to randomize the grid
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
});