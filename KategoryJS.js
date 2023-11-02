const kategoryArchit = document.querySelector('.section-nav-a-archit');
const kategoryFash = document.querySelector('.section-nav-a-fash');
const kategoryBio = document.querySelector('.section-nav-a-bio');
const kategoryBiss = document.querySelector('.section-nav-a-biss');


const svgDot = document.querySelector('.section-div-svg');

let svgDotCount = 0;
let svgDotWidth = 36;

kategoryArchit.addEventListener('click', archit);
kategoryFash.addEventListener('click', fash);
kategoryBio.addEventListener('click', bio);
kategoryBiss.addEventListener('click', biss);

function archit() {
    if(kategoryArchit) {
        kategoryArchit.className = 'section-nav-a-active';
        kategoryFash.className = 'section-nav-a';
        kategoryBio.className = 'section-nav-a';
        kategoryBiss.className = 'section-nav-a';

        function rollDot() {
            svgDot.style.transform = `translateY(${svgDotCount}px)`;
        }
        rollDot();
    } 
}

function fash() {
    if(kategoryFash) {
        kategoryFash.className = 'section-nav-a-active';
        kategoryArchit.className = 'section-nav-a';
        kategoryBio.className = 'section-nav-a';
        kategoryBiss.className = 'section-nav-a';

        function rollDot() {
            svgDot.style.transform = `translateY(${svgDotCount + svgDotWidth}px)`;
        }
        rollDot();
    } 

    localStorage();
}

function bio() {
    if(kategoryBio) {
        kategoryBio.className = 'section-nav-a-active';
        kategoryArchit.className = 'section-nav-a';
        kategoryFash.className = 'section-nav-a';
        kategoryBiss.className = 'section-nav-a';

        function rollDot() {
            svgDot.style.transform = `translateY(${svgDotCount + svgDotWidth*2}px)`;
        }
        rollDot();
    } 
}

function biss() {
    if(kategoryBiss) {
        kategoryBiss.className = 'section-nav-a-active';
        kategoryArchit.className = 'section-nav-a';
        kategoryFash.className = 'section-nav-a';
        kategoryBio.className = 'section-nav-a';

        function rollDot() {
            svgDot.style.transform = `translateY(${svgDotCount + svgDotWidth*3}px)`;
        }
        rollDot();
    } 
}