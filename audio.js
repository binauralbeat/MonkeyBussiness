//------------------------------
// Buffer Loader Class
//------------------------------

function BufferLoader(context, urlList, callback) {
  this.context = context;
  this.urlList = urlList;
  this.onload = callback;
  this.bufferList = new Array();
  this.loadCount = 0;
}

BufferLoader.prototype.loadBuffer = function(url, index) {
  // Load buffer asynchronously
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  var loader = this;

  request.onload = function() {
    // Asynchronously decode the audio file data in request.response
    loader.context.decodeAudioData(
      request.response,
      function(buffer) {
        if (!buffer) {
          alert("error decoding file data: " + url);
          return;
        }
        loader.bufferList[index] = buffer;
        if (++loader.loadCount == loader.urlList.length)
          loader.onload(loader.bufferList);
      },
      function(error) {
        console.error("decodeAudioData error", error);
      }
    );
  };

  request.onerror = function() {
    alert("BufferLoader: XHR error");
  };

  request.send();
};

BufferLoader.prototype.load = function() {
  for (var i = 0; i < this.urlList.length; ++i)
    this.loadBuffer(this.urlList[i], i);
};

// --------------------------------
// Click Handlers
// --------------------------------

$("#button-loop-1").click(() => {
  source1GainNode.gain.value = source1GainNode.gain.value > 0 ? 0 : .3;
  console.log("clicked 1");
});

$("#button-loop-2").click(() => {
  source2GainNode.gain.value = source2GainNode.gain.value > 0 ? 0 : .3;
  console.log("clicked 2");
});

$("#button-loop-3").click(() => {
  source3GainNode.gain.value = source3GainNode.gain.value > 0 ? 0 : .3;
  console.log("clicked 3");
});

$("#button-loop-4").click(() => {
  source4GainNode.gain.value = source4GainNode.gain.value > 0 ? 0 : .3;
  console.log("clicked 4");
});

$("#button-loop-5").click(() => {
  source5GainNode.gain.value = source5GainNode.gain.value > 0 ? 0 : .3;
  console.log("clicked 5");
});

$("#button-loop-6").click(() => {
  source6GainNode.gain.value = source6GainNode.gain.value > 0 ? 0 : .3;
  console.log("clicked 6");
});

$("#button-loop-7").click(() => {
  source7GainNode.gain.value = source7GainNode.gain.value > 0 ? 0 : .3;
  console.log("clicked 7");
});

$("#button-loop-8").click(() => {
  source8GainNode.gain.value = source8GainNode.gain.value > 0 ? 0 : .3;
  console.log("clicked 8");
});

$("#button-loop-9").click(() => {
  source9GainNode.gain.value = source9GainNode.gain.value > 0 ? 0 : .3;
  console.log("clicked 9");
});

$("#button-loop-10").click(() => {
  source10GainNode.gain.value = source10GainNode.gain.value > 0 ? 0 : .3;
  console.log("clicked 10");
});

// ----------------------------
// Global Definitions
// ----------------------------

var context;
var bufferLoader;

var source1;
var source2;
var source3;
var source4;
var source5;
var source6;
var source7;
var source8;
var source9;
var source10;

var source1GainNode;
var source2GainNode;
var source3GainNode;
var source4GainNode;
var source5GainNode;
var source6GainNode;
var source7GainNode;
var source8GainNode;
var source9GainNode;
var source10GainNode;

function init() {
  // Fix up prefixing
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  context = new AudioContext();

  bufferLoader = new BufferLoader(
    context,
    [
      "./loops/bass.wav",
      "./loops/thunder.wav",
      "./loops/chimes.wav",
      "./loops/bareDrums.wav",
      "./loops/kalimbaOne.wav",
      "./loops/kalimbaTwo.wav",
      "./loops/synthOne.wav",
      "./loops/synthVox.wav",
      "./loops/synthTwo.wav",
      "./loops/hHat.wav"

    ],
    finishedLoading
  );

  bufferLoader.load();
}

function finishedLoading(bufferList) {
  // for each loop create a buffer source
  source1 = context.createBufferSource();
  source2 = context.createBufferSource();
  source3 = context.createBufferSource();
  source4 = context.createBufferSource();
  source5 = context.createBufferSource();
  source6 = context.createBufferSource();
  source7 = context.createBufferSource();
  source8 = context.createBufferSource();
  source9 = context.createBufferSource();
  source10 = context.createBufferSource();


  // for add the audio file loaded into the bufferList to the source
  source1.buffer = bufferList[0];
  source2.buffer = bufferList[1];
  source3.buffer = bufferList[2];
  source4.buffer = bufferList[3];
  source5.buffer = bufferList[4];
  source6.buffer = bufferList[5];
  source7.buffer = bufferList[6];
  source8.buffer = bufferList[7];
  source9.buffer = bufferList[8];
  source10.buffer = bufferList[9];

  // set loop to be true
  source1.loop = true;
  source2.loop = true;
  source3.loop = true;
  source4.loop = true;
  source5.loop = true;
  source6.loop = true;
  source7.loop = true;
  source8.loop = true;
  source9.loop = true;
  source10.loop = true;

  // make sure all the audio files loop for the same durration
  source1.loopEnd = 10.6556111;
  source2.loopEnd = 10.6556111;
  source3.loopEnd = 10.6556111;
  source4.loopEnd = 10.6556111;
  source5.loopEnd = 10.6556111;
  source6.loopEnd = 10.6556111;
  source7.loopEnd = 10.6556111;
  source8.loopEnd = 10.6556111;
  source9.loopEnd = 10.6556111;
  source10.loopEnd = 10.6556111;

  // Create a gain node.
  // Connect the source to the gain node.
  // Connect the gain node to the destination.
  source1GainNode = context.createGain();
  source1.connect(source1GainNode);
  source1GainNode.connect(context.destination);

  source2GainNode = context.createGain();
  source2.connect(source2GainNode);
  source2GainNode.connect(context.destination);

  source3GainNode = context.createGain();
  source3.connect(source3GainNode);
  source3GainNode.connect(context.destination);

  source4GainNode = context.createGain();
  source4.connect(source4GainNode);
  source4GainNode.connect(context.destination);

  source5GainNode = context.createGain();
  source5.connect(source5GainNode);
  source5GainNode.connect(context.destination);

  source6GainNode = context.createGain();
  source6.connect(source6GainNode);
  source6GainNode.connect(context.destination);

  source7GainNode = context.createGain();
  source7.connect(source7GainNode);
  source7GainNode.connect(context.destination);

  source8GainNode = context.createGain();
  source8.connect(source8GainNode);
  source8GainNode.connect(context.destination);

  source9GainNode = context.createGain();
  source9.connect(source9GainNode);
  source9GainNode.connect(context.destination);

  source10GainNode = context.createGain();
  source10.connect(source10GainNode);
  source10GainNode.connect(context.destination);

  // set the inital volume to 0
  source1GainNode.gain.value = 0;
  source2GainNode.gain.value = 0;
  source3GainNode.gain.value = 0;
  source4GainNode.gain.value = 0;
  source5GainNode.gain.value = 0;
  source6GainNode.gain.value = 0;
  source7GainNode.gain.value = 0;
  source8GainNode.gain.value = 0;
  source9GainNode.gain.value = 0;
  source10GainNode.gain.value = 0;

  // start each of the loops
  source1.start(0);
  source2.start(0);
  source3.start(0);
  source4.start(0);
  source5.start(0);
  source6.start(0);
  source7.start(0);
  source8.start(0);
  source9.start(0);
  source10.start(0);
}

window.onload = init;