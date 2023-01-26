const generate = (page) => {
    const heroBox = document.createElement('div');
    heroBox.classList.add('heroBox');
    const hero = document.createElement('div');
    hero.classList.add('hero');
    const heroMsg = document.createElement('div');
    heroMsg.classList.add('heroMsg');

    heroBox.append(hero, heroMsg);
    page.append(heroBox);
};

const createHome = (current, page) => {
    if (current !== 'home') {
        generate(page);
    }
};
export default createHome;
