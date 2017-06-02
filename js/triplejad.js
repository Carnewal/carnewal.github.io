
var vid = document.getElementById("jadVid");

var btnPrayRanged = document.getElementById("btnPrayRanged");
var btnPrayMage = document.getElementById("btnPrayMage");
var btnPrayMelee = document.getElementById("btnPrayMelee");

var olOverhead = document.getElementById("olOverhead");

var ifChat = document.getElementById("ifChat");

var btnReset = document.getElementById("btnReset");

var lostTicks = 9; // Ticks lost after spawn before first hit

var prayerElements = [
  btnPrayRanged,
  btnPrayMage,
  btnPrayMelee
]

var attacksText = ["Ranged", "Magic", "Melee"]

var attacks = [
  0,1,1,
  0,0,1,
  0,1,1,
  1,1,1,
  1,1,1,
  0,1,0,
  1,1,1,
  1,0,1,
  1,0,1,
  0,-1,0,
  1,-1,0,
  0,-1,1,
  1,-1,0,
  0,-1,0,
  1,-1,1,
  1,-1,0,
  0,-1,1,
  0,-1,0,
  0,-1,1,
]


var ticker;
var tickCounter = 0;

var lastPrayer = -1;
var currentPrayer = -1;
var activatingPrayers = [0, 0, 0];
var startPrayer = 0;
var activePrayer;

var playing = false;


function timeUpdate(e) {
  console.log(e)
}

function reset() {
  clearInterval(ticker);
  vid.pause();
  tickCounter = 0 - lostTicks;
  ticker = setInterval(tick, 600);
  playing = false;
  activePrayer = -1;
  prayerElements[0].style.opacity = 0;
  prayerElements[1].style.opacity = 0;
  prayerElements[2].style.opacity = 0;
  activatingPrayers = [0,0,0];
  ifChat.innerHTML = "Pray ranged to start. Good luck!"
}

function tick() {
  if(!playing && activePrayer === startPrayer) {
    vid.play();
    vid.currentTime = 0;
    playing = true;
  }

  if(playing) {
    prayerTick();
    checkDeath();
    tickCounter++;
  }
}

function prayerTick() {
  prayerElements[0].style.opacity = 0;
  prayerElements[1].style.opacity = 0;
  prayerElements[2].style.opacity = 0;

  activatingPrayers = [0,0,0];

  if(prayerElements[activePrayer]) {
    prayerElements[activePrayer].style.opacity = 0.5;
    olOverhead.style.background = "#b7a36d url('./img/Pray_" + attacksText[activePrayer] + ".png')"
    olOverhead.style.backgroundRepeat = "no-repeat"
    olOverhead.style.backgroundPosition = "center"
    activatingPrayers[activePrayer] = 1
  } else {
    olOverhead.style.background = "#b7a36d"

  }

}

function activatePrayer(id) {
  if(prayerElements[id]) {
    activatingPrayers[id] = 1 - activatingPrayers[id];
    if(activatingPrayers[id] === 1) {
      prayerElements[id].style.opacity = 0.5
      activePrayer = id;
    } else {
      prayerElements[id].style.opacity = 0
      activePrayer = -1;
    }
  }
}

vid.addEventListener("timeupdate", timeUpdate);

btnPrayRanged.addEventListener("click", function() {
  if(playing || 0 === startPrayer) {
    activatePrayer(0)
  }
});
btnPrayMage.addEventListener("click", function() {
  if(playing || 1 === startPrayer) {
    activatePrayer(1)
  }
});
btnPrayMelee.addEventListener("click", function() {
  if(playing || 2 === startPrayer) {
    activatePrayer(2)
  }
});
btnReset.addEventListener("click", reset);



reset();



//0= ranged, 1= mage
