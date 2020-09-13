const C4 = new Audio("C4.mp3");
const Db4 = new Audio("Db4.mp3");
const D4 = new Audio("D4.mp3");
const Eb4 = new Audio("Eb4.mp3");
const E4 = new Audio("E4.mp3");
const F4 = new Audio("F4.mp3");
const Gb4 = new Audio("Gb4.mp3");
const G4 = new Audio("G4.mp3");
const Ab4 = new Audio("Ab4.mp3");
const A4 = new Audio("A4.mp3");
const Bb4 = new Audio("Bb4.mp3");
const B4 = new Audio("B4.mp3");
const C5 = new Audio("C5.mp3");
const Db5 = new Audio("Db5.mp3");
const D5 = new Audio("D5.mp3");
const Eb5 = new Audio("Eb5.mp3");
const E5 = new Audio("E5.mp3");
const playsound = audio => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0.8),400);
    setTimeout(() => (clone.volume = 0.6),800);
    setTimeout(() => (clone.volume = 0.4),1200);
    setTimeout(() => (clone.volume = 0.2),1600);
    setTimeout(() => (clone.volume = 0),2000);
};

// c4
const C4key = document.querySelector(".C4");
const playC4 = () => {
    playsound(C4);
    C4key.classList.add("active");
    setTimeout(() => C4key.classList.remove("active"), 300);
};
C4key.addEventListener("click", playC4);

// Db4
const Db4key = document.querySelector(".Db4");
const playDb4 = () => {
    playsound(Db4);
    Db4key.classList.add("active");
    setTimeout(() => Db4key.classList.remove("active"), 300);
};
Db4key.addEventListener("click", playDb4);

// D4
const D4key = document.querySelector(".D4");
const playD4 = () => {
    playsound(D4);
    D4key.classList.add("active");
    setTimeout(() => D4key.classList.remove("active"), 300);
};
D4key.addEventListener("click", playD4);

// Eb4
const Eb4key = document.querySelector(".Eb4");
const playEb4 = () => {
    playsound(Eb4);
    Eb4key.classList.add("active");
    setTimeout(() => Eb4key.classList.remove("active"), 300);
};
Eb4key.addEventListener("click", playEb4);

// E4
const E4key = document.querySelector(".E4");
const playE4 = () => {
    playsound(E4);
    E4key.classList.add("active");
    setTimeout(() => E4key.classList.remove("active"), 300);
};
E4key.addEventListener("click", playE4);

// F4
const F4key = document.querySelector(".F4");
const playF4 = () => {
    playsound(F4);
    F4key.classList.add("active");
    setTimeout(() => F4key.classList.remove("active"), 300);
};
F4key.addEventListener("click", playF4);

// Gb4
const Gb4key = document.querySelector(".Gb4");
const playGb4 = () => {
    playsound(Gb4);
    Gb4key.classList.add("active");
    setTimeout(() => Gb4key.classList.remove("active"), 300);
};
Gb4key.addEventListener("click", playGb4);

// G4
const G4key = document.querySelector(".G4");
const playG4 = () => {
    playsound(G4);
    G4key.classList.add("active");
    setTimeout(() => G4key.classList.remove("active"), 300);
};
G4key.addEventListener("click", playG4);

// Ab4
const Ab4key = document.querySelector(".Ab4");
const playAb4 = () => {
    playsound(Ab4);
    Ab4key.classList.add("active");
    setTimeout(() => Ab4key.classList.remove("active"), 300);
};
Ab4key.addEventListener("click", playAb4);

// A4
const A4key = document.querySelector(".A4");
const playA4 = () => {
    playsound(A4);
    A4key.classList.add("active");
    setTimeout(() => A4key.classList.remove("active"), 300);
};
A4key.addEventListener("click", playA4);

// Bb4
const Bb4key = document.querySelector(".Bb4");
const playBb4 = () => {
    playsound(Bb4);
    Bb4key.classList.add("active");
    setTimeout(() => Bb4key.classList.remove("active"), 300);
};
Bb4key.addEventListener("click", playBb4);

// B4
const B4key = document.querySelector(".B4");
const playB4 = () => {
    playsound(B4);
    B4key.classList.add("active");
    setTimeout(() => B4key.classList.remove("active"), 300);
};
B4key.addEventListener("click", playB4);

// C5
const C5key = document.querySelector(".C5");
const playC5 = () => {
    playsound(C5);
    C5key.classList.add("active");
    setTimeout(() => C5key.classList.remove("active"), 300);
};
C5key.addEventListener("click", playC5);

// Db5
const Db5key = document.querySelector(".Db5");
const playDb5 = () => {
    playsound(Db5);
    Db5key.classList.add("active");
    setTimeout(() => Db5key.classList.remove("active"), 300);
};
Db5key.addEventListener("click", playDb5);

// D5
const D5key = document.querySelector(".D5");
const playD5 = () => {
    playsound(D5);
    D5key.classList.add("active");
    setTimeout(() => D5key.classList.remove("active"), 300);
};
D5key.addEventListener("click", playD5);

// Eb5
const Eb5key = document.querySelector(".Eb5");
const playEb5 = () => {
    playsound(Eb5);
    Eb5key.classList.add("active");
    setTimeout(() => Eb5key.classList.remove("active"), 300);
};
Eb5key.addEventListener("click", playEb5);

// E5
const E5key = document.querySelector(".E5");
const playE5 = () => {
    playsound(E5);
    E5key.classList.add("active");
    setTimeout(() => E5key.classList.remove("active"), 300);
};
E5key.addEventListener("click", playE5);

window.addEventListener("keydown", ({ keyCode }) => {
    // press Q
    if (keyCode === 81) return playC4();

    // press 2
    if (keyCode === 50) return playDb4();
    
    // press W
    if (keyCode === 87) return playD4();
    
    // press 3
    if (keyCode === 51) return playEb4();
    
    // press E
    if (keyCode === 69) return playE4();
    
    // press R
    if (keyCode === 82) return playF4();
    
    // press S
    if (keyCode === 53) return playG4();
    
    // press T
    if (keyCode === 84) return playC4();
    
    // press 6
    if (keyCode === 54) return playAb4();
    
    // press Y
    if (keyCode === 89) return playA4();
    
    // press 7
    if (keyCode === 55) return playBb4();
    
    // press U
    if (keyCode === 85) return playB4();
    
    // press I
    if (keyCode === 73) return playC5();
    
    // press 9
    if (keyCode === 57) return playDb5();
    
    // press O
    if (keyCode === 79) return playD5();
    
    // press 0
    if (keyCode === 48) return playEb5();
    
    // press P
    if (keyCode === 80) return playE5();
});
