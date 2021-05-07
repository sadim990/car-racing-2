canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");


car1_width = "100";
car1_height = "100";
car1_x = 10;
car1_y = 10;
car1_image = "car.png";
background_image = "background_image.jpg"

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar;
    car1_imgTag.src = car1_image;
}


function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

window.addEventListener("keydown" , my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed); 
    if (keyPressed == '38') 
    {
        car1_up();
       console.log("up");
        } 

    if (keyPressed == '40') 
    {
       car1_down();
       console.log("down");
        } 
    if (keyPressed == '37') 
    {
        car1_left();
       console.log("left");
        } 
    if (keyPressed == '39') 
    {
        car1_right();
       console.log("right");
    } 
   }


   function car1_up(){
    if(car1_y>=0)
    {
        car1_y=car1_y - 10;
        console.log("When up arrow is pressed, x = " + car_x + " | y = " +car_y);
        uploadBackground();
        uploadCar();
    }
}
function car1_down(){
    if(car1_y<=500)
    {
        car1_y=car1_y + 10;
        console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
        uploadCar();
    }
}
    function car1_left(){
        if(car1_x>=0)
        {
            car1_x=car1_x - 10;
            console.log("When left arrow is pressed, x = " + car1_x + " | y = " +car1_y);
            uploadBackground();
            uploadCar();
        }
    }
        function car1_right(){
            if(car1_x<=700)
            {
                car1_x=car1_x + 10;
                console.log("When right arrow is pressed, x = " + car1_x + " | y = " +car1_y);
                uploadBackground();
                uploadCar();
            }
        }
            
