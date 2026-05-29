/*PLAYLIST POP OUT!*/

/* this did not end up working unfortunately and I ran out of time to debug */
let particles = [];
let opening = false;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);

    canvas.style('pointer-events', 'none');
    canvas.style('z-index', '500');

    clear();
}

function draw() {
    clear();

    if (opening) {

        for (let i = particles.length - 1; i >= 0; i--) {

            particles[i].update();
            particles[i].display();

            if (particles[i].finished()) {
                particles.splice(i, 1);
            }
        }
    }
}

class Ring {

    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.size = 20;
        this.alpha = 255;
    }

    update() {
        this.size += 8;
        this.alpha -= 5;
    }

    display() {
        noFill();

        stroke(255, 105, 180, this.alpha);
        strokeWeight(3);

        ellipse(this.x, this.y, this.size);
    }

    finished() {
        return this.alpha <= 0;
    }
}

function openPlaylist() {

    let panel = document.getElementById('playlist-panel');

    panel.classList.add('show');

    opening = true;

    let ipod = document.querySelector('.ipod');
    let rect = ipod.getBoundingClientRect();

    let x = rect.left + rect.width / 2;
    let y = rect.top + rect.height / 2;

    /* rings */
    for (let i = 0; i < 12; i++) {
        particles.push(new Ring(x, y));
    }
}

function closePlaylist() {

    let panel = document.getElementById('playlist-panel');

    panel.classList.remove('show');

    opening = false;
}