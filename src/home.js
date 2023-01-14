const createHome = (page) => {
  const heroBox = document.createElement('div');
  heroBox.classList.add('heroBox');
  const hero = document.createElement('div');
  hero.classList.add('hero');
  const heroMsg = document.createElement('div');
  heroMsg.classList.add('heroMsg');

  heroBox.append(hero, heroMsg);
  page.append(heroBox);
};

export default createHome;
