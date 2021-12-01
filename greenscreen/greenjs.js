var imgFG = null;
var imgBG = null;
  
// This function takes forward image as input
function frontimg() 
{
    var fileInput = document.getElementById("fgFile");
    var canvas = document.getElementById("pic1");
    imgFG = new SimpleImage(fileInput);
    imgFG.drawTo(canvas);
}
  
 // This function takes background image as output
function backimg() 
{
    var fileInput = document.getElementById("bgFile");
    var canvas = document.getElementById("pic2");
    imgBG = new SimpleImage(fileInput);
    imgBG.drawTo(canvas);
}
  
// This function merges both the image and
// produces the resultant image as output
// Implementation of Green Screen Algorithm
function merge() 
{          
    var pic3 = document.getElementById("pic3");
    var outputImage = new SimpleImage(imgFG.width, imgFG.height);
    for (var pixel of imgFG.values()) 
    {
        if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()) 
        {
            var x = pixel.getX();
            var y = pixel.getY();
            var newPixel = imgBG.getPixel(x, y);
            outputImage.setPixel(x, y, newPixel);
        }
        else 
        {
            outputImage.setPixel(pixel.getX(),pixel.getY(), pixel);
        }
    }
    outputImage.drawTo(pic3);
}
