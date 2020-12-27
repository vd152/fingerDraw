const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');
let model;
let x;
let y;

const modelParams = {
    flipHorizontal: true,  
    imageScaleFactor: 0.7, 
    maxNumBoxes: 20,      
    iouThreshold: 0.5,   
    scoreThreshold: 0.50, 
};

handTrack.startVideo(video).then(status => {
    if(status){
        navigator.getUserMedia({video: {}}, (stream) => {

            video.srcObject = stream;
            setInterval(runDetection, 2000);
        }, err=> console.log(err));
    }
});

runDetection = () => {
    model.detect(video).then(predictions=>{
        //console.log(predictions);
        predictions.forEach(prediction => {
            x = prediction.bbox[0];
            y = prediction.bbox[1];
            console.log(x);
            console.log(y);
        });
       // model.renderPredictions(predictions, canvas, context, video);
    });
}

handTrack.load(modelParams).then(loadedModel => {
    model = loadedModel;
});