//Function to show/hide password
document.getElementById('eye').addEventListener('mousedown', function(){
    document.getElementById('pass').type = 'text';
});

document.getElementById('eye').addEventListener('mouseup', function(){
    document.getElementById('pass').type = 'password';
});

document.getElementById('eye').addEventListener('mousemove', function(){
    document.getElementById('pass').type = 'password';
});