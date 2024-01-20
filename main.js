var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
	frabic.image.fromURL('birthdayImage.jpg', function(Img) {
	blockImageObject = Img;
    
    blockImageObject.scaleToWidth(700);
    blockImageObject.scaleToHeight(500);
    blockImageObject.set({

        top: 0,
        left:0
    });
    canvas.add(blockImageObject);
});

}

function playSound(){
	x.play();
}
