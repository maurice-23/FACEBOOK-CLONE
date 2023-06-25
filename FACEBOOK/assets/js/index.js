
document.getElementById('scroll').onmouseover = function(){
    document.getElementById('scroll').classList.replace('scroll', 'maurice');
}

document.getElementById('scroll').onmouseleave = function(){mouseLeave()};

function mouseLeave(){
    document.getElementById('scroll').classList.replace('maurice', 'scroll');
}


function navbarLinks(){
    document.getElementById('video').classList.remove('active');
    document.getElementById('group').classList.remove('active');
    document.getElementById('feed').classList.remove('active');
    document.getElementById('update').classList.remove('active');
    document.getElementById('active').classList.remove('active');
}
function video(){
    navbarLinks();
    document.getElementById('video').classList.add('active');
}
function group(){
    navbarLinks();
    document.getElementById('group').classList.add('active');
}

function feeds(){
    navbarLinks();
    document.getElementById('feed').classList.add('active');
}
function updates(){
    navbarLinks();
    document.getElementById('update').classList.add('active');
}
function active(){
    navbarLinks();
    document.getElementById('active').classList.add('active');
}
