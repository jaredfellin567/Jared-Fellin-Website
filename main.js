let homeButton = document.getElementById('home');
let cyberFellinButton = document.getElementById('webName');
let projectsButton = document.getElementById('projects');
let aboutMeButton = document.getElementById('aboutMe');

let dropDownButton = document.getElementsByClassName('dropbtn');
let drophomeButton = document.getElementById('drophome');
let dropaboutButton = document.getElementById('dropabout');
let dropprojectsButton = document.getElementById('dropprojects');
let dropresumeeButton = document.getElementById('dropresumee');

function goHome(){
    window.location.href = "home.html"
}

function goProjects(){
        window.location.href = 'projects.html'
}

function goAbout(){
        window.location.href = 'aboutMe.html'
}


cyberFellinButton.addEventListener('click', goHome)
homeButton.addEventListener('click', goHome)
drophomeButton.addEventListener('click', goHome)

dropaboutButton.addEventListener('click', goAbout)
aboutMeButton.addEventListener('click', goAbout)

dropprojectsButton.addEventListener('click', goProjects)
projectsButton.addEventListener('click', goProjects)