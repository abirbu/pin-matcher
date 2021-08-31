//hidding two matched and dont matched 
document.getElementById('dont-matched').style.display = 'none';
document.getElementById('matched').style.display = 'none';

//pin
//pin-generator
 document.getElementById('pin-generator').addEventListener('click', function(){
     const randomPin = Math.floor(1000 + Math.random() * 9000);
     document.getElementById('pin').value = randomPin ;
 })

 document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

document.getElementById('submit-btn').addEventListener('click', function(){
    const generatedPin = document.getElementById('pin').value;
    const typedNum = document.getElementById('typed-numbers').value;
    if (generatedPin == typedNum){
        document.getElementById('matched').style.display = 'block';
        document.getElementById('dont-matched').style.display = 'none';
    }
    else{
        document.getElementById('dont-matched').style.display = 'block';
        document.getElementById('matched').style.display = 'none';
    }
})