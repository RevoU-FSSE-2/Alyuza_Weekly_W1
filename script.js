function button(){
    let x = 'Hi ';
    let y = document.getElementById('name').value;
    let z = ' Nice to Meet You ^^';
    let message = x + y + z;

    if (y==''){
        alert('Input Your Name Please');
    }      
    else{
        alert(message);
    }
}