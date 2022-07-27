// // CultureBots: Tool for Ideological Swarming
//July 2022
// // (work in progress)
// Concept and programming Marllon Barrios Solano

// // In the US and in most of the globalized north, we are surrounded  and chased by ideologies, trainings, iconographies, and trivializing  representations of affect supported by money and historical trails. Tragic and hilarious...
// // Play with it and share it. It is still a work in progress...
// // You can change the number of agents, the background color, you can 'draw traces', you may change the intensities of seeking behavior, separation and cohesion of the 'flock'.
// // You can save a  screenshot pressing 's'...



let flowers = [

  'https://storage.ning.com/topology/rest/1.0/file/get/10672202481?profile=original',
  'https://storage.ning.com/topology/rest/1.0/file/get/10672202076?profile=original',
  'https://storage.ning.com/topology/rest/1.0/file/get/10672201286?profile=original',
  'https://storage.ning.com/topology/rest/1.0/file/get/10672199500?profile=original',
  'https://storage.ning.com/topology/rest/1.0/file/get/10672195871?profile=original',
  'https://storage.ning.com/topology/rest/1.0/file/get/10672194697?profile=original',
  'https://storage.ning.com/topology/rest/1.0/file/get/10672194498?profile=original',
  'https://storage.ning.com/topology/rest/1.0/file/get/10672191695?profile=original',
  'https://storage.ning.com/topology/rest/1.0/file/get/10672190661?profile=original',
  'https://storage.ning.com/topology/rest/1.0/file/get/10672188687?profile=original',
  'https://storage.ning.com/topology/rest/1.0/file/get/10672183452?profile=original'

];

let faang = [
  'https://storage.ning.com/topology/rest/1.0/file/get/10672214691?profile=original',
  'https://storage.ning.com/topology/rest/1.0/file/get/10672215289?profile=original',
  'https://storage.ning.com/topology/rest/1.0/file/get/10672290255?profile=original',
  'https://storage.ning.com/topology/rest/1.0/file/get/10672290662?profile=original',
  'https://storage.ning.com/topology/rest/1.0/file/get/10672296090?profile=original',
  'https://storage.ning.com/topology/rest/1.0/file/get/10672290901?profile=original',
  'https://storage.ning.com/topology/rest/1.0/file/get/10672295660?profile=original',

]

let bots = [
  'bot.png'
  // 'https://storage.ning.com/topology/rest/1.0/file/get/10672215886?profile=original'
]

let prides = [
  'https://storage.ning.com/topology/rest/1.0/file/get/10672296070?profile=original',
]

let covid = [
  'https://storage.ning.com/topology/rest/1.0/file/get/10672218679?profile=original',
  'https://storage.ning.com/topology/rest/1.0/file/get/10672218867?profile=original',
  'https://storage.ning.com/topology/rest/1.0/file/get/10672218897?profile=original',
 
]
let fire = [
  'https://vignette.wikia.nocookie.net/wingsoffirefanon/images/6/63/Firegif.gif/revision/latest?cb=20190525014138',
  'https://storage.ning.com/topology/rest/1.0/file/get/10672286299?profile=original',
]

let ak47 = [
  'https://storage.ning.com/topology/rest/1.0/file/get/10672213057?profile=original'
]



let usaflag = [
  'https://gifimage.net/wp-content/uploads/2017/09/american-flag-gif-transparent-13.gif'
]

let crosses = [
  'https://storage.ning.com/topology/rest/1.0/file/get/10672295295?profile=original',
  'https://storage.ning.com/topology/rest/1.0/file/get/10672216278?profile=original',
  'https://storage.ning.com/topology/rest/1.0/file/get/10672220493?profile=original',
  'https://storage.ning.com/topology/rest/1.0/file/get/10672292864?profile=original'
]


let emojis = [
'https://storage.ning.com/topology/rest/1.0/file/get/10672288652?profile=original',
'https://storage.ning.com/topology/rest/1.0/file/get/10672288899?profile=original',
'https://storage.ning.com/topology/rest/1.0/file/get/10672225301?profile=original',
'https://storage.ning.com/topology/rest/1.0/file/get/10672295062?profile=original',
'https://storage.ning.com/topology/rest/1.0/file/get/10672294895?profile=original',
'https://storage.ning.com/topology/rest/1.0/file/get/10672225083?profile=original',
'https://storage.ning.com/topology/rest/1.0/file/get/10672289667?profile=original', 
'https://storage.ning.com/topology/rest/1.0/file/get/10672294278?profile=original',
'https://storage.ning.com/topology/rest/1.0/file/get/10672438888?profile=original',
'https://storage.ning.com/topology/rest/1.0/file/get/10672444690?profile=original',
'https://storage.ning.com/topology/rest/1.0/file/get/10672446494?profile=original',
'https://storage.ning.com/topology/rest/1.0/file/get/10672449869?profile=original',
'https://storage.ning.com/topology/rest/1.0/file/get/10672454463?profile=original'
]

let warhols = [
 
  'https://storage.ning.com/topology/rest/1.0/file/get/10672293472?profile=original'
]



let spritesFlowers = [];
let spritesBots = [];
let spritesEmojis = [];
let spritesCovid = [];
let spritesFire = [];
let spritesAk47 = [];

let spritesUSA = [];
let spritesCrosses = [];
let spritesFaang = [];
let spritesWarhols = [];
let spritesPrides = [];
let group = [];




let settings = {
  circle: false,
  flowers: false,
  bots: true,
  emojis: false,
covid: false,
fire: false,
ak47: false,

usaFlag: false,
crosses: false,
faang: false,
warhols: false,
prides:  false,
  redraw_bg: true,
  damping: 1,
  transparency: 0.5,
  seek: 0.2,
  rotate: false,
  twitch: 0.3, 

  separate: 1.5, 
  cohesion: 1, 
  align: 1,

  numberOfAgents: 50,

};

let bg_color = {
  bg_red: 0,
  bg_green:0,
  bg_blue: 0,
bg_alpha: 10
}


let gui;

let paused = false; 
//----------------------------------------------

function preload() {
  for ( let flower of flowers) {
    let img = loadImage(flower);
    spritesFlowers.push(img);
  }

  for ( let bot of bots) {
    let img = loadImage(bot);
    spritesBots.push(img);
    
  }

  for ( let emoji of emojis) {
    let img = loadImage(emoji);
    spritesEmojis.push(img);
  }

  for ( let c of covid) {
    let img = loadImage(c);
    spritesCovid.push(img);
    
  }

  for ( let f of fire) {
    let img = loadImage(f);
    spritesFire.push(img);
    
  }
  for ( let a of ak47) {
    let img = loadImage(a);
    spritesAk47.push(img);
  }

  for ( let u of usaflag) {
    let img = loadImage(u);
    spritesUSA.push(img);
  }

  for ( let c of crosses) {
    let img = loadImage(c);
    spritesCrosses.push(img);
  }
  for ( let f of faang) {
    let img = loadImage(f);
    spritesFaang.push(img);
  }
  for ( let w of warhols) {
    let img = loadImage(w);
    spritesWarhols.push(img);
  }
  for ( let p of prides) {
    let img = loadImage(p);
    spritesPrides.push(img);
  }
}


//----------------------------------------------
// Create a new canvas to match the browser size
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  gui = new dat.GUI();

  gui.add(settings, 'numberOfAgents', 0, 200, step=1).name('Number of agents');
  gui.add(settings, 'damping', 0.1, 1).name('Speed');
  gui.add(settings, 'rotate', false, true).name('Rotate');
  gui.add(settings, 'twitch', 0, 2).name('Twitch');
  gui.add(settings, 'seek', 0.01, 0.9).name('Seek the Mouse');
  gui.add(settings, 'separate', 0, 3).name('Separation');
  gui.add(settings, 'cohesion', 0, 2).name('Cohesion');
  gui.add(settings, 'align', 0, 2).name('Alignment');

  gui.add(settings, 'redraw_bg').name('Redraw Background');
  gui.add(settings, 'circle', false, true).name('Circular Boids');
  gui.add(settings, 'bots', false, true).name('Robots');
  gui.add(settings, 'emojis', false, true).name('Emojis'),
  gui.add(settings, 'warhols', false, true).name('Marilyns'),
  gui.add(settings, 'usaFlag', false, true).name('USA Flags'),
 
  
  gui.add(settings, 'faang', false, true).name('FAANG'),
  gui.add(settings, 'crosses', false, true).name('Bedfellows'),
  gui.add(settings, 'ak47', false, true).name('Ak47s'),
  gui.add(settings, 'fire', false, true).name('Burning Earths'),
  gui.add(settings, 'prides', false, true).name('Rainbow Flags'),
  gui.add(settings, 'covid', false, true).name('Covids'),
  //brands
  //ants
  //bitcoin
  //poop
  //peace and love
  //campbell soups
 

  gui.add(settings, 'flowers', false, true).name('Flowers & friends');
  
 



  // gui.add(bg_color, 'bg_red', 0, 255).name(('Background Red'));
  // gui.add(bg_color, 'bg_green', 0, 255).name(('Background Green'));
  // gui.add(bg_color, 'bg_blue', 0, 255).name(('Background Blue'));

 

  gui.remember(settings);
  gui.width = 300;
  gui.close();
  
  background(bg_color.bg_red, bg_color.bg_green, bg_color.bg_blue, bg_color.bg_alpha);
}

//----------------------------------------------
// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bg_color.bg_red, bg_color.bg_green, bg_color.bg_blue, bg_color.bg_alpha);
}

//----------------------------------------------
function keyPressed() { 
  if (key == ' ') {
    if (paused == false) {
      noLoop();  
      paused = true;
    }  
    else {
      loop(); 
      paused = false;
    }    
  }
  
  if (key == 's') {
    save("culture_bot.jpg");
  }
}

//----------------------------------------------
// Main render loop 
function draw() {
  // Fill in the background
 
  if (settings.redraw_bg){
  background(bg_color.bg_red, bg_color.bg_green, bg_color.bg_blue, bg_color.alpha);
};  
  
  if (settings.numberOfAgents > group.length) {
    let agent = createAgent(); 
    group.push(agent);
  }  
  if (settings.numberOfAgents < group.length) {
    group.pop();
  }
 


  let mouse = new p5.Vector(mouseX, mouseY);
    
  for (let agent of group) { 
    // behaviours
    seek(agent, mouse, settings.seek);
  
    twitch(agent, settings.twitch);
    
    separate(agent, group, settings.separate);
    
    align(agent, group, settings.align);
    
    cohesion(agent, group, settings.cohesion);
     
    move(agent);
   
    wrap(agent);  // teleport the agent back to the other side
    
    render(agent);
  }
}

//----------------------------------------------
function createAgent() {
 
  let newAgent = { 
  
    pos: new p5.Vector(random(width), random(height)),  // pos -> position   
    vel: new p5.Vector(random(-1, 1), random(-1, 1)),   // vel -> velocity 
    acc: new p5.Vector(),  
    maxspeed: random(2, 6), 
    maxforce: settings.damping,
    color: [random(255), random(255), random(255)],
    spritesFlowers: random(spritesFlowers),
    spritesBots: random(spritesBots),
    spritesEmojis: random(spritesEmojis),
    spritesCovid: random(spritesCovid),
    spritesFire: random(spritesFire),
    spritesAk47: random(spritesAk47),
    spritesUSA: random(spritesUSA),
    spritesCrosses: random(spritesCrosses),
    spritesFaang: random(spritesFaang),
    spritesWarhols: random(spritesWarhols),
    spritesPrides: random(spritesPrides)
  };  
  return newAgent; 
}

//----------------------------------------------
function render(agent) { 


  push(); 
  // if (settings.square) {
   
    // let n = sin((agent.id+frameCount)*0.)
    // let s = map(n, -1, 1, 1, 10);
    
    stroke(agent.color);
    fill(agent.color);
    // strokeWeight(s);
    //let n = noise((agent.id+frameCount)*0.01);
    //let n = random(1);
    translate(agent.pos.x, agent.pos.y);

    if (settings.bots == true)  {
      
      imageMode(CENTER);
      image(agent.spritesBots, 0, 0, 80, 80);
    } 
    else if (settings.rotate == false && settings.circle == true) {
  
    ellipseMode(CENTER);
    ellipse(0, 0, 20, 20);  
  } 


  else if (settings.rotate == false && settings.flowers == true)  {
    imageMode(CENTER);
    image(agent.spritesFlowers, 0, 0, 80, 80);
  }
  else if (settings.rotate == false && settings.emojis == true)  {
    imageMode(CENTER);
    image(agent.spritesEmojis, 0, 0, 80, 80);
  }
  else if (settings.rotate == false && settings.covid == true)  {
   
    imageMode(CENTER);
    image(agent.spritesCovid, 0, 0, 80, 80);
  }
  else if (settings.rotate == false && settings.fire == true)  {
  
    imageMode(CENTER);
    image(agent.spritesFire, 0, 0, 80, 80);
  }

  else if (settings.rotate == false && settings.ak47 == true)  {
   
    imageMode(CENTER);
    image(agent.spritesAk47, 0, 0, 100, 100);
  }

  else if (settings.rotate == false  && settings.usaFlag == true)  {
  
    imageMode(CENTER);
    image(agent.spritesUSA, 0, 0, 80, 80);
  }
  else if (settings.rotate == false && settings.crosses == true)  {
 
    imageMode(CENTER);
    image(agent.spritesCrosses, 0, 0, 80, 80);
  }

  else if (settings.rotate == false && settings.faang == true)  {
 
    imageMode(CENTER);
    image(agent.spritesFaang, 0, 0, 80, 80);
  }

  else if (settings.rotate == false && settings.warhols == true)  {
  
    imageMode(CENTER);
    image(agent.spritesWarhols, 0, 0, 80, 80);
  }

  else if (settings.prides == true)  {
  
    imageMode(CENTER);
    image(agent.spritesPrides, 0, 0, 80, 80);
  }
else if (settings.circle == true)  {

 ellipseMode(CENTER);
 ellipse(0, 0, 20, 20);  
} 


if (settings.rotate == true && settings.bots == true)  {
      rotate(agent.vel.heading());
      imageMode(CENTER);
      image(agent.spritesBots, 0, 0, 80, 80);
    } 
    else if (settings.rotate == true && settings.circle == true) {
    rotate(agent.vel.heading());
    ellipseMode(CENTER);
    ellipse(0, 0, 20, 20);  
  } 
  else if (settings.rotate == true && settings.flowers == true)  {
    rotate(agent.vel.heading());
    imageMode(CENTER);
    image(agent.spritesFlowers, 0, 0, 80, 80);
  }
  else if (settings.rotate == true && settings.emojis == true)  {
    rotate(agent.vel.heading());
    imageMode(CENTER);
    image(agent.spritesEmojis, 0, 0, 80, 80);
  }
  else if (settings.rotate == true && settings.covid == true)  {
    rotate(agent.vel.heading());
    imageMode(CENTER);
    image(agent.spritesCovid, 0, 0, 80, 80);
  }
  else if (settings.rotate == true && settings.fire == true)  {
    rotate(agent.vel.heading());
    imageMode(CENTER);
    image(agent.spritesFire, 0, 0, 80, 80);
  }

  else if (settings.rotate == true && settings.ak47 == true)  {
    rotate(agent.vel.heading());
    imageMode(CENTER);
    image(agent.spritesAk47, 0, 0, 100, 100);
  }

  else if (settings.rotate == true && settings.usaFlag == true)  {
    rotate(agent.vel.heading());
    imageMode(CENTER);
    image(agent.spritesUSA, 0, 0, 80, 80);
  }
  else if (settings.rotate == true && settings.crosses == true)  {
    rotate(agent.vel.heading());
    imageMode(CENTER);
    image(agent.spritesCrosses, 0, 0, 80, 80);
  }
  else if (settings.rotate == true && settings.faang == true)  {
    rotate(agent.vel.heading());
    imageMode(CENTER);
    image(agent.spritesFaang, 0, 0, 80, 80);
  }

  else if (settings.rotate == true && settings.warhols == true)  {
    rotate(agent.vel.heading());
    imageMode(CENTER);
    image(agent.spritesWarhols, 0, 0, 80, 80);
  }

  else if (settings.rotate == true && settings.prides == true)  {
    rotate(agent.vel.heading());
    imageMode(CENTER);
    image(agent.spritesPrides, 0, 0, 80, 80);
  }
else if (settings.rotate == true && settings.circle == true)  {

 ellipseMode(CENTER);
 ellipse(0, 0, 20, 20);  
} 




pop();
}




//----------------------------------------------
function move(agent) {  
  agent.vel.add(agent.acc);       // vel = vel + acc   
  agent.vel.mult(settings.damping);
  agent.pos.add(agent.vel);       // pos = pos + vel    
  agent.acc.mult(0);              // acc = acc * 0 --> resets
}

//----------------------------------------------
function wrap(agent) {
  if (agent.pos.x < -100) agent.pos.x = width+100; 
  if (agent.pos.y < -100) agent.pos.y = height+100; 
  if (agent.pos.x > width+100) agent.pos.x = -100; 
  if (agent.pos.y > height+100) agent.pos.y = -100;   
}


//----------------------------------------------
function applyForce(agent, force, strength=1) {
  force.mult(strength);
  agent.acc.add(force);           // add the force to the agent's acceleration 
}

//----------------------------------------------
function seek(agent, target, strength=1) {
  let targetDirection = p5.Vector.sub(target, agent.pos); // targetDirection = target - agent.pos 
  targetDirection.normalize();  // 
  targetDirection.mult(agent.maxspeed);
  
  steer(agent, targetDirection, strength);
}

//----------------------------------------------
function steer(agent, targetDirection, strength=1) { 
  let steer = p5.Vector.sub(targetDirection, agent.vel); 
  steer.limit(agent.maxforce);
  applyForce(agent, steer, strength);
}

//----------------------------------------------
function separate(agent, group, strength=1) {
  
  let separation = 40;  // radius neightbourhood/sensorium
  
  let sum = new p5.Vector(); 
  let count = 0;
  
  for (let other of group) {
    let d = agent.pos.dist(other.pos);    
    if (d > 0 && d < separation) { 
      let diff = p5.Vector.sub(agent.pos, other.pos); 
      diff.normalize();  // weight in favor of the closer objects
      diff.div(d);       
      sum.add(diff);
      count++;  // keep track of how many we've added to sum 
    }    
  }
   
  if (count > 0) {
    sum.div(count);
    sum.setMag(agent.maxspeed);
    // steer towards the averaged sum 
    steer(agent, sum, strength);  
  }
}

//----------------------------------------------
function align(agent, group, strength=1) {
   
  let neighborhood = 50;  // radius neightbourhood/sensorium
  
  let sum = new p5.Vector(); 
  let count = 0;
  
  for (let other of group) {
    let d = agent.pos.dist(other.pos);    
    if (d > 0 && d < neighborhood) { 
      sum.add(other.vel); // velocity -> heading 
      count++;
    }
  }
  
  if (count > 0) {
    sum.div(count);    
    sum.normalize(); 
    sum.mult(agent.maxspeed);
    // steer towards the averaged sum 
    steer(agent, sum, strength);  
  }
}


//----------------------------------------------
function cohesion(agent, group, strength=1) {
   
  let neighborhood = 50; 
  
  let sum = new p5.Vector(); 
  let count = 0;
  
  for (let other of group) {
    let d = agent.pos.dist(other.pos);    
    if (d > 0 && d < neighborhood) { 
      sum.add(other.pos); // velocity -> heading 
      count++;
    }
  }
  
  if (count > 0) {
    sum.div(count);
    // seek the averaged position 
    seek(agent, sum, strength);  
  }
}

//----------------------------------------------
function twitch(agent, strength=1, twitchRadius=PI/2, twitchRate=0.01) {
  let twitchDirection = agent.vel.copy(); 
  let n = noise((agent.pos.x + frameCount) * twitchRate);
  let twitchAngle = map(n, 0, 1, -twitchRadius, twitchRadius);
  twitchDirection.rotate(twitchAngle);   
  steer(agent, twitchDirection, strength);  
}