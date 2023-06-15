function button(){
    var letters = /^[A-Za-z]+$/;
    let x = 'Hi ';
    let y = document.getElementById('name').value;
    let z = ', Nice to Meet You ^^';
    let message = x + y + z;

    if(y.match(letters)){
        alert(message)
    }else{
        alert('Please Input Correct Name')
    }
}