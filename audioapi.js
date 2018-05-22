// const context = new (window.AudioContext || window.webkitAudioContext)();

// class Buffer {

//     constructor(context, urls) {
//       this.context = context;
//       this.urls = urls;
//       this.buffer = [];
//     }

//     loadSound(url, index) {
//       let request = new XMLHttpRequest();
//       request.open('get', url, true);
//       request.responseType = 'arraybuffer';
//       let thisBuffer = this;
//       request.onload = function() {
//         thisBuffer.context.decodeAudioData(request.response, function(buffer) {
//           thisBuffer.buffer[index] = buffer;
//           updateProgress(thisBuffer.urls.length);
//           if(index == thisBuffer.urls.length-1) {
//             thisBuffer.loaded();
//           }
//         });
//       };
//       request.send();
//     };

//     loadAll() {
//       this.urls.forEach((url, index) => {
//         this.loadSound(url, index)
//       })
//     }

//     loaded() {
//       // what happens when all the files are loaded


//     context.decodeAudioData(audioData).then(function(decodedData) {
//         // use the decoded data here
//       });

//     class Sound() {

//         constructor(context, buffer) {
//           this.context = context;
//           this.buffer = buffer;
//         }

//         init() {
//           this.gainNode = this.context.createGain();
//           this.source = this.context.createBufferSource();
//           this.source.buffer = this.buffer;
//           this.source.connect(this.gainNode);
//           this.gainNode.connect(this.context.destination);
//         }

//         play() {
//           this.setup();
//           this.source.start(this.context.currentTime);
//         }

//         stop() {
//           this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.5);
//           this.source.stop(this.context.currentTime + 0.5);
//         }

//       }
//   }

//   let buffer = new Buffer(context, sounds);
// buffer.loadAll();

// sound = new Sound(context, buffer.getSoundByIndex(id));
// sound.play();

// let sounds = [
//     "/loops/bareDrums.wav"

// ]

