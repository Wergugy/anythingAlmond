import './style.css';

const mainContainer = document.createElement('div');
mainContainer.classList.add('mainContainer');
const tabBox = document.createElement('div');
tabBox.classList.add('tabBox');
const bottomBar = document.createElement('div');
bottomBar.classList.add('bottomBar', 'baseColor');
const homeTab = document.createElement('div');
homeTab.classList.add('home', 'tab');
const menuTab = document.createElement('div');
menuTab.classList.add('menu', 'tab');
const contactTab = document.createElement('div');
contactTab.classList.add('contact', 'tab');
const contentBox = document.createElement('div');
contentBox.classList.add('contentBox');
const pageContainer = document.createElement('div');
pageContainer.classList.add('pageContainer');

contentBox.append(pageContainer);
tabBox.append(homeTab, menuTab, contactTab, bottomBar);
mainContainer.append(tabBox, contentBox);
document.body.append(mainContainer);

const allTabs = Array.from(document.querySelectorAll('.tab'));

const clearCurrent = () => {
  if (allTabs.some((e) => e.classList.contains('current'))) {
    allTabs
      .find((e) => e.classList.contains('current'))
      .classList.toggle('current');
  }
};

const matchBottomBar = (l) => {
  const currentTab = Array.from(l.target.classList).filter(
    (c) => c !== 'tab' && c !== 'current'
  );
  if (bottomBar.classList.contains('baseColor'))
    bottomBar.classList.replace('baseColor', currentTab);
  else
    switch (currentTab.toString()) {
      case 'home':
        bottomBar.classList.replace(
          bottomBar.classList.contains('menu') ? 'menu' : 'contact',
          currentTab
        );
        break;
      case 'menu':
        bottomBar.classList.replace(
          bottomBar.classList.contains('home') ? 'home' : 'contact',
          currentTab
        );
        break;
      case 'contact':
        bottomBar.classList.replace(
          bottomBar.classList.contains('home') ? 'home' : 'menu',
          currentTab
        );
        break;
      // no default
    }
};

const selectCurrent = (l) => {
  l.preventDefault();
  clearCurrent();
  l.target.classList.add('current');
  matchBottomBar(l);
};

allTabs.forEach((e) => e.addEventListener('click', selectCurrent));
