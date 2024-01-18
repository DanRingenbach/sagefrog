
function toggleMenu() {
    var nav = document.querySelector('.nav ul');
    var mobilePhone = document.querySelector('.mobile-phone-number');
    nav.classList.toggle('open');
    mobilePhone.classList.toggle('open');
    
}

function openOverlay(imageSrc, bioText, headerText, positionText) {
    var overlay = document.querySelector('.overlay');
    var overlayImg = document.getElementById('overlay-img');
    var overlayHeader = document.getElementById('overlay-header');
    var overlayBio = document.getElementById('overlay-bio');
    var overlayPosition = document.getElementById('overlay-position');
    
    overlayImg.src = imageSrc;
    overlayBio.innerHTML = bioText;
    overlayHeader.innerHTML = headerText;
    overlayPosition.innerHTML =positionText;

    overlay.classList.add('show');
}

function closeOverlay() {
    var overlay = document.querySelector('.overlay');
    overlay.classList.remove('show');
}

function underlineActive(clickedLink) {
    console.log(clickedLink.firstChild);
    var links = document.querySelectorAll('.nav-link');
    links.forEach(function(link) {
        link.firstChild.classList.remove('active');
    });
    
    clickedLink.firstChild.classList.add('active');
}