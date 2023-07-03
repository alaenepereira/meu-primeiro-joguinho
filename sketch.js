let personagem;
let grama;
let comida;
let tamanho = 64;

let andarx = 0;
let andary = 0;
let velocidade = 64;
let restart;

function setup() {
  createCanvas(576, 576);
  personagem = loadImage("cachorro.png");
  comida = loadImage("tigeladecachorro.png");
  grama = loadImage("ggr.jpg");
}

function draw() {
  if (andarx < 0) {
    andarx = 0;
  }
  if (andary < 0) {
    andary = 0;
  }
  if (andarx > tamanho * 8) {
    andarx = tamanho * 8;
  }
  if (andary > tamanho * 8) {
    andary = tamanho * 8;
  }
  background(220);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      image(grama, tamanho * i, tamanho * j, tamanho, tamanho);
    }
  }
  image(comida, tamanho * 8, tamanho * 8, tamanho, tamanho);
  image(personagem, andarx, andary, tamanho, tamanho);

  if (andarx === tamanho * 8 && andary === tamanho * 8) {
    rect(160, 160, 256, 256);
    textSize(35);
    text("ganhou", 220, 300);
    restart = createButton("reiniciar");
    noLoop();
    restart.mousePressed(reset);
  }
}

function reset() {
  andarx = 0;
  andary = 0;
  restart.remove();
  loop();
}

function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    andary -= velocidade;
  }
  if (keyIsDown(DOWN_ARROW)) {
    andary += velocidade;
  }
  if (keyIsDown(LEFT_ARROW)) {
    andarx -= velocidade;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    andarx += velocidade;
  }
}
