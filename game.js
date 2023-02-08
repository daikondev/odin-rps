const div = document.querySelector('div');

const btn1 = document.createElement('button');
div.appendChild(btn1);
btn1.addEventListener('click', function(){
    console.log('Rock');
});

const btn2 = document.createElement('button');
div.appendChild(btn2);
btn2.addEventListener('click', function () {
    console.log('Paper')
});

const btn3 = document.createElement('button');
div.appendChild(btn3);
btn3.addEventListener('click',function(){
    console.log('Scissors');
});