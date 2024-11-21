const carContainer = document.querySelector('.carContainer');
let position = 0; 
let speedy = 5;
let keys = {};   


function updatePosition() {
  if (keys['a'] || keys['ArrowLeft']) {
    position = Math.max(0, position - speedy);
  }
  if (keys['d'] || keys['ArrowRight']) {
    position = Math.min(window.innerWidth - 120, position + speedy); 
  }
  carContainer.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(updatePosition);
}


window.addEventListener('keydown', (e) => {
  keys[e.key.toLowerCase()] = true;

 
  if (e.key === 'ArrowUp') {
    speedy = Math.min(30, speedy + 10); 
  }
  if (e.key === 'ArrowDown') {
    speedy = Math.max(10, speedy - 10); 
  }
});


window.addEventListener('keyup', (e) => {
  keys[e.key.toLowerCase()] = false;
});


updatePosition();



let lightStatus = false;
$('#lightControll').click(function () {
    if (lightStatus == false) {
        $('.frontLignt').css('opacity', 1);
        $('.backLight').css('opacity', 1);
        lightStatus = true;
    } else {
        $('.frontLignt').css('opacity', 0);
        $('.backLight').css('opacity', 0);
        lightStatus = false;
    }
})


$('#driver').click(function(){
  $('.driver').css('opacity',1)
})




let block1 = document.getElementById('backwheel1');
let block2 = document.getElementById('frontwheel2');
let rotationAngle1 = 0;
let rotationAngle2 = 0;
let speede = 10; 
let isRotatingLeft = false;
let isRotatingRight = false;


function rotate() {
    if (isRotatingLeft) {
        rotationAngle1 -= speede; 
        rotationAngle2 -= speede; 
    }
    if (isRotatingRight) {
        rotationAngle1 += speede; 
        rotationAngle2 += speede;
    }

    block1.style.transform = `rotate(${rotationAngle1}deg)`;
    block2.style.transform = `rotate(${rotationAngle2}deg)`;
}


document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        isRotatingLeft = true;
    }
    if (event.key === 'd') {
        isRotatingRight = true;
    }
    if (event.key === 'ArrowUp') {
       speede = Math.min(10, speede += 10); 
    }
    if (event.key === 'ArrowDown') {
        speede = Math.max(10, speede - 10); 
    }
});


document.addEventListener('keyup', (event) => {
    if (event.key === 'a') {
        isRotatingLeft = false; 
    }
    if (event.key === 'd') {
        isRotatingRight = false; 
    }
});


function animate() {
    rotate();
    requestAnimationFrame(animate);
}

animate(); 



const ruchka = document.querySelector('.ruchka');
let positions = 0;
const maxPosition = 110; 
const minPosition = 0;  

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        positions += 55;
        if (positions > maxPosition) {
            positions = maxPosition; 
        }
    } 
    if (e.key === 'ArrowDown') {
        positions -= 55;
        if (positions < minPosition) {
            positions = minPosition;
        }
    }
    ruchka.style.left = positions + 'px'; 
});






const block = document.querySelector('.carContainer');
const background = document.querySelector('.road');

let blockPosition = 0; 
let isInCenter = false;
let backgroundOffset = 0;
let speed = 10; 
const maxSpeed = 50;
const minSpeed = 10; 
let speedBoostCount = 0;
const roadWidth = 2000; 
const screenWidth = window.innerWidth;
const blockWidth = 100; 

document.addEventListener('keydown', (e) => {
  
    if (e.key === 'ArrowUp') {
        if (speedBoostCount < 2) {
            speed += 15;
            speedBoostCount++;
        }
    }

    
    if (speed > maxSpeed) {
        speed = maxSpeed;
    }

    if (!isInCenter) {
        if (e.key === 'a' || e.key === 'A') {
            blockPosition -= speed; 
        } else if (e.key === 'd' || e.key === 'D') {
            blockPosition += speed; 
        }

       
        block.style.transform = `translateX(${blockPosition}px) translateY(-50%)`;

        
        if (Math.abs(blockPosition) >= screenWidth / 2 - blockWidth / 2) {
            isInCenter = true; 
        }
    }

 
    if (isInCenter) {
        if (e.key === 'a' || e.key === 'A') {
            backgroundOffset += speed; 
        } else if (e.key === 'd' || e.key === 'D') {
            backgroundOffset -= speed; 
        }

     
        background.style.transform = `translateX(${backgroundOffset}px)`;
    }

    if (blockPosition < 0) {
        blockPosition = 0; 
    } else if (blockPosition > roadWidth - blockWidth) {
        blockPosition = roadWidth - blockWidth; 
    }


    if (backgroundOffset < -(roadWidth - screenWidth)) {
        backgroundOffset = -(roadWidth - screenWidth); 
    } else if (backgroundOffset > 0) {
        backgroundOffset = 0; 
    }
});
