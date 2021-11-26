//menu js
function openNav() {
    let x = document.getElementById('s-n')
    x.style.marginLeft = 0;
    let n = document.getElementById('btn')
    n.style.marginLeft = '-200px';
}
function closeNav(){
    let x = document.getElementById('s-n')
    x.style.marginLeft = '-500px';
    let n = document.getElementById('btn')
    n.style.marginLeft = 0;
}

//more js
function openContact(){
    var x = document.getElementById('cd')
    x.style.display = 'block';
    x.style.marginTop = '300px'
    
}
function closeC(){
    var n = document.getElementById('cd')
    n.style.display = 'none';
}