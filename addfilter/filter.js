
var img=null;
var originalimage=null;
var nored=null;
var gray=null;
var rainbow=null;
var noyellow=null;
var noblue=null;
var redImage=null;

function setimg()
{
    var fileInput = document.getElementById("fillFile");
    var canvas = document.getElementById("pic1");
    img=new SimpleImage(fileInput);
    originalimage=new SimpleImage(fileInput);
    gray=new SimpleImage(fileInput);
    nored=new SimpleImage(fileInput);
    rainbow=new SimpleImage(fileInput);
    noyellow=new SimpleImage(fileInput);
    noblue=new SimpleImage(fileInput);
    redImage=new SimpleImage(fileInput);
    img.drawTo(canvas);
}

function Rainbow()
{
    var img_Y = rainbow.getHeight();
    for (var pixel of rainbow.values()) 
    {
        var pix_Y = pixel.getY();
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 7;
    
        if ((pix_Y < img_Y / 7) && (avg < 128)) 
        {
          pixel.setRed(avg * 2);
          pixel.setGreen(0);
          pixel.setBlue(0);
        } 
        else if ((pix_Y < img_Y / 7) && (avg >= 128)) 
        {
          pixel.setRed(255);
          pixel.setGreen(avg * 2 - 255);
          pixel.setBlue(avg * 2 - 255);
        }
        if ((pix_Y < 2 * img_Y / 7) && (pix_Y > img_Y / 7) && (avg < 128)) 
        {
          pixel.setRed(2 * avg);
          pixel.setGreen(0.8 * avg);
          pixel.setBlue(0);
        } 
        else if ((pix_Y <= 2 * img_Y / 7) && (pix_Y > img_Y / 7) && (avg >= 128)) 
        {
          pixel.setRed(255);
          pixel.setGreen(1.2 * avg - 51);
          pixel.setBlue(2 * avg - 255);
        }
        if ((pix_Y <= 3 * img_Y / 7) && (pix_Y > 2 * img_Y / 7) && (avg < 128)) 
        {
          pixel.setRed(2 * avg);
          pixel.setGreen(2 * avg);
          pixel.setBlue(0);
        } 
        else if ((pix_Y <= 3 * img_Y / 7) && (pix_Y > 2 * img_Y / 7) && (avg >= 128)) 
        {
          pixel.setRed(255);
          pixel.setGreen(255);
          pixel.setBlue(2 * avg - 255);
        }
        if ((pix_Y <= 4 * img_Y / 7) && (pix_Y > 3 * img_Y / 7) && (avg < 128)) 
        {
          pixel.setRed(0);
          pixel.setGreen(2 * avg);
          pixel.setBlue(0);
        } 
        else if ((pix_Y <= 4 * img_Y / 7) && (pix_Y > 3 * img_Y / 7) && (avg >= 128))
        {
          pixel.setRed(2 * avg - 255);
          pixel.setGreen(255);
          pixel.setBlue(2 * avg - 255);
        }
    
        if ((pix_Y <= 5 * img_Y / 7) && (pix_Y > 4 * img_Y / 7) && (avg < 128)) 
        {
          pixel.setRed(0);
          pixel.setGreen(0);
          pixel.setBlue(2 * avg);
        } 
        else if ((pix_Y <= 5 * img_Y / 7) && (pix_Y > 4 * img_Y / 7) && (avg >= 128)) 
        {
          pixel.setRed(2 * avg - 255);
          pixel.setGreen(2 * avg - 255);
          pixel.setBlue(255);
        }
    
        if ((pix_Y <= 6 * img_Y / 7) && (pix_Y > 5 * img_Y / 7) && (avg < 128)) 
        {
          pixel.setRed(0.8 * avg);
          pixel.setGreen(0);
          pixel.setBlue(2 * avg);
        } 
        else if ((pix_Y <= 6 * img_Y / 7) && (pix_Y > 5 * img_Y / 7) && (avg >= 128)) 
        {
          pixel.setRed(1.2 * avg - 51);
          pixel.setGreen(2 * avg - 255);
          pixel.setBlue(255);
        } 
        else if ((pix_Y >= 6 * img_Y / 7) && (avg < 128)) 
        {
          pixel.setRed(1.6 * avg);
          pixel.setGreen(0);
          pixel.setBlue(1.6 * avg);
        } 
        else if ((pix_Y >= 6 * img_Y / 7) && (avg >= 128)) 
        {
          pixel.setRed(0.4 * avg + 153);
          pixel.setGreen(2 * avg - 255);
          pixel.setBlue(0.4 * avg + 153);
        }
    }
      var canvas = document.getElementById("pic1");
      rainbow.drawTo(canvas);
}

function makeGray() 
{ 
    for (var pixel of gray.values()) 
    {
        var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var canvas = document.getElementById("pic1");
    gray.drawTo(canvas);
}

function noRed()
{
    for(var pixel of nored.values())
    {
        pixel.setRed(0);
    }
    var canvas = document.getElementById("pic1");
    nored.drawTo(canvas);
}

function noYellow()
{
    for( var pixel of noyellow.values() )
    {
        if(pixel.getRed()+pixel.getGreen() >pixel.getBlue())
        {
            var x=pixel.getRed();
            var y=pixel.getGreen();
            pixel.setRed((x+y)/2);
            pixel.setGreen((x+y)/2);
        }
        
    }
    var canvas=document.getElementById("pic1");
    noyellow.drawTo(canvas);
}
function noBlue()
{
  for( var pixel of noblue.values())
  {
    pixel.setBlue(0);
  }
  var canvas=document.getElementById("pic1");
  noblue.drawTo(canvas);

}

function makeRed()
{
    var threshold = 128;
    for(var pixel of redImage.values()) 
    {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        if(avg > threshold) 
        {
          pixel.setRed(255);
          pixel.setGreen(2 * avg - 255);
          pixel.setBlue(2 * avg - 255);
        }
        else 
        {
          pixel.setRed(2 * avg);
          pixel.setGreen(0);
          pixel.setBlue(0);
        }
    }
    var canvas=document.getElementById("pic1");
    redImage.drawTo(canvas);
}
function reset() 
{
    var canvas =document.getElementById("pic1");
    originalimage.drawTo(canvas);
}