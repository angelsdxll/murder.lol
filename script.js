// --- Enter overlay ---
const enterBtn = document.getElementById('enter-button');
const startModal = document.getElementById('startModal');
const mainSite = document.getElementById('main-site');

enterBtn.addEventListener('click', startSite);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && startModal.style.display !== 'none') {
        startSite();
    }
});

function startSite() {
    startModal.style.display = 'none';
    mainSite.style.display = 'block';

    // Welcome text
    document.getElementById('welcome-text').textContent = "Welcome!";

    // Start music
    const player = document.getElementById('bgMusic');
    const songs = [{ title: "Calm Song", file: "song.mp3" }];
    let current = 0;
    player.src = songs[current].file;
    player.play();

    // Start glitch effect
    startGlitch();
}

// --- Glitch effect ---
function startGlitch() {
    const glitchTexts = document.querySelectorAll('.glitch');

    function triggerGlitch(el) {
        el.classList.add('glitch-active');
        setTimeout(() => el.classList.remove('glitch-active'), 200);
    }

    setInterval(() => {
        const randomEl = glitchTexts[Math.floor(Math.random() * glitchTexts.length)];
        triggerGlitch(randomEl);
    }, 500 + Math.random() * 500);
}

// --- Keyboard triggers for terminal ---
document.addEventListener('keydown', function (e) {
    const keys = ['I', 'J', 'C', 'U'];
    if (keys.includes(e.key)) {
        const terminal = document.getElementById('fake-terminal');
        if (terminal.style.display !== 'block') {
            showTerminal();
        } else {
            e.preventDefault();
        }
    }
});

// --- Terminal ---
function showTerminal() {
    const terminal = document.getElementById('fake-terminal');
    terminal.style.display = 'block';

    const glitchTexts = document.querySelectorAll('.glitch');
    glitchTexts.forEach(el => el.textContent = "");

    const lines = [
        "Initializing terminal...",
        "Loading modules...",
        "Ready!"
    ];

    const outputEl = document.getElementById('terminal-output');
    let index = 0;

    function printNextLine() {
        if (index < lines.length) {
            outputEl.textContent += lines[index++] + "\n";
            setTimeout(printNextLine, 100);
        } else {
            window.scrollTo(0, document.body.scrollHeight);
        }
    }

    printNextLine();
}
function startSite() {
    const overlay = document.getElementById('enterOverlay');
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.6s ease';
    setTimeout(() => {
        overlay.style.display = 'none';
        document.querySelector('.roster').style.display = 'flex';
    }, 600);

    // Start music if needed
    const player = document.getElementById('bgMusic');
    if (player) player.play();
}
