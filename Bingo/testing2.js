//Tää scripti toimii jesarilla ja ainoa jokaa tietää miksi se toimii on jeesus.


document.addEventListener("DOMContentLoaded", () => {
    const snapSound = document.getElementById("snap-sound");
    const size = 4; // 4x4
    const totalCells = size * size;
    const grid = document.getElementById("bingo-grid");
    const clicked = Array.from({ length: size }, () => Array(size).fill(false));
    let clickCount = 0;
    const counterDisplay = document.getElementById("click-counter");
    let bingoAchieved = false;

    // Sanoja
    const themes = {
        esitykset: [
            "Presentation", "Audience", "Speech", "PowerPoint", "Slide", "Pitch", "Handout", "Notes",
            "Timekeeper", "Audience questions", "Q&A", "Debate", "Public speaking", "Stage fright", "Microphone",
            "Presentation skills", "Body language", "Visual aids", "Slideshows", "Feedback", "Rehearsal", 
            "Stage", "Conference", "Workshop", "Seminar"
        ],
        kokous: [
            "Staff",
            "Email","assignment","Forgets They're muted","Forgets to mute themselfs","long Oookaayy","Reaction with any emoji","Lunch break","Someone goes to the bathroom","5min smoke break","Sorry, could you repeat that?"  ,"Silence for atleast 15 seconds"  ,"The word What? is said 5 times"  ,"Someone's dog barks 7 times"  ,
            "During the call people cough atleast 20 times"  ,"Any questions?","Vacation","2 people start talking with no correlation to the Project"  ,
            "Gimme a sec","Someone's child walks in the room"  ,"Any ideas?","Are you sure?","The Project","Someone puts a Gif in the chat",
            "Someone disconnects accidentally","Someone's wifi stops working","Why is it not working?","Slideshow isn't working","Technical difficulties","Call needs to be restarted","Someone oversleeps","atleast 3 people don't show up",
            "Someones webcam doesn't work","The call needs to be postponed","Someone has very bad internet","someone is in a hurry","How's everyone doing?","How long will this call last?","Any comments?","Talking about weather","Good job","Atleast 5 people join late","If someones name is said 10 times","Does anyone know how to X?","I need help with XX","For some reason","If atleast 3 slideshows presented","Atleast 3 people say Be right back","If the Meet lasts less than an hour","If someone has trouble sharing their screen"
        ],
        koulu: [
            "can I go to the bathroom?", "can I borrow a pencil?", "did you do your homework?", "dog ate my homework", "I forgot to do my homework", "can I copy your homework?", "can I copy your notes?", "what did you get for X?", "how did you get the answer?", "I'm going to fail",
            "when is the break?", "what's for lunch", "I wish it was weekend", "I wish it was Friday", "This is so boring", "I forgot my book", "does anyone know the answer?", "When does the class end?", "yelling in the hallway", "someone falls from a chair",
            "someone is caught playing", "teacher gets a call", "teacher forgets something", "silence after teacher asks a question", "hysteric laughter", "someone falls asleep in class", "someone opens a can", "someone opens a bottle", "someones phone rings during class", "teacher yawns",
            "someone arrives late", "someone drops a pencil", "Someone draws on their desk", "Someone knocks on the door", "Someone forgets their books", "Someone gets into an argument with the teacher", "Teacher forgot something", "People yawn at least 5 times", "At least 2 people sneeze", "Something is thrown",
            "Someone skips class", "An exam is announced", "Teacher leaves the classroom", "Someone complains about the temperature", "Teacher can't stick to the topic", "People talk about the weather", "Network problems", "Someone breaks their pencil", "At least 3 people go to the bathroom", "Two people go to the bathroom at the same time"
        ],
        diat: [
            "Funny Picture in the Slideshow", "As you can see", "huge emoji somewhere in the slideshow", "slideshow is written in comic sans", "slideshow gets interrupted by an animal", "Screenshare randomly shuts off", "person presenting goes to the bathroom",
            "slideshow has atleast 9 slides", "call bursts into a bunch of laughter", "more than 4 people made the slideshow", "Where did my mouse/cursor go?", "slideshow lasts longer than 2 hours", "silence that lasts longer than 10 seconds", "slideshow has more than 15 attendants",
            "Any questions?", "Next slide", "I know what your thinking/Wondering", "Gimme a sec", "1 slide has only 1 Word in it", "people presenting wonder into a different topic", "That comes later in the show",
            "1 slide is Missing", "presentators sneeze atleast 4 times", "People start laughing because of an image", "when asked about having any questions no one has any", "presentators skip a slide"
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


    // Valitse teema
    const selectedTheme = localStorage.getItem("selectedTheme");
    console.log("Selected theme:", selectedTheme);  // Debug kaks miljoonaa

    if (!selectedTheme || !themes[selectedTheme]) {
        alert("No theme selected or invalid theme. Returning to main menu.");
        window.location.href = "index.php";
        return;
    }

    // Hae sanat
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
            if (bingoAchieved) return; // Estä bingon toimiminen

            // Snap ääni
            snapSound.currentTime = 0;
            snapSound.play().catch(() => {});

            clicked[row][col] = !clicked[row][col];
            this.classList.toggle("clicked");

            clickCount += clicked[row][col] ? 1 : -1;
            counterDisplay.textContent = `Clicked: ${clickCount}`;

            document.querySelectorAll(".cell").forEach(c => c.classList.remove("win"));
            const winLine = checkWin(clicked);

            if (winLine && !bingoAchieved) {
                bingoAchieved = true; // Lukkoon peli

                winLine.forEach(([r, c]) => {
                    const selector = `.cell[data-row="${r}"][data-col="${c}"]`;
                    document.querySelector(selector).classList.add("win");
                });

                // PHP läpä läpä luu. +1 databaseen score
                fetch('increment_bingo.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.text())
                .then(data => console.log(data))
                .catch(error => console.error('Error updating bingo:', error));

                setTimeout(() => showBingoPopup(), 100);
            }
        });

        grid.appendChild(cell);
    });

    // Voititko? wtf does this even mean.
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

    // Randomizer
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
});

function showBingoPopup() {
    const popup = document.getElementById("bingo-popup");
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 2000);
}