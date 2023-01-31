import homeHeroPic from './images/home-page-hero.jpg';
import introMsg from './text/home-intro.txt';

const generate = (page) => {
    const heroBox = document.createElement('div');
    heroBox.classList.add('heroBox');

    const hero = document.createElement('div');
    hero.classList.add('hero');

    const heroImg = document.createElement('img');
    heroImg.classList.add('heroImg');
    heroImg.src = homeHeroPic;

    const heroMsg = document.createElement('div');
    heroMsg.classList.add('heroMsg');
    heroMsg.textContent = introMsg;

    hero.append(heroImg);
    heroBox.append(hero, heroMsg);
    page.append(heroBox);
};

const createHome = (current, page) => {
    if (current !== 'home') {
        generate(page);
    }
};
export default createHome;
