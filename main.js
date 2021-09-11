status=""
function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:detecting object";
}
function start()
{
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("Status").innerHTML="status:Detecting Objects";
}
function modelLoaded()
{
    console.log("model is loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function draw()
{
    image(video,0,0,480,380);
    if(status!="")
    {
        objectDetector=ml5.objectDetector(video,gotResult);
        for(i=0;i<objects.length;i++)
        {
            document.getElementById("Status").innerHTML="status:Objects Detected";
            document.getElementById("numberOfObjects").innerHTML="number of objects detected are:"+objects.length;
            fill("#fcb3ee");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("#fcb3ee");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}