import './style.css';

const mainContainer = document.createElement('div');
mainContainer.classList.add('mainContainer');
const tabBox = document.createElement('div');
tabBox.classList.add('tabBox');
const bottomBar = document.createElement('div');
bottomBar.classList.add('bottomBar');
const homeTab = document.createElement('div');
homeTab.classList.add('home', 'tab');
const menuTab = document.createElement('div');
menuTab.classList.add('menu', 'tab');
const contactTab = document.createElement('div');
contactTab.classList.add('contact', 'tab');

tabBox.append(homeTab, menuTab, contactTab, bottomBar);
mainContainer.append(tabBox);
document.body.append(mainContainer);

const allTabs = Array.from(document.querySelectorAll('.tab'));

const clearCurrent = () => {
  if (allTabs.some((e) => e.classList.contains('current'))) {
    allTabs
      .find((e) => e.classList.contains('current'))
      .classList.toggle('current');
  }
};

const selectCurrent = (l) => {
  l.preventDefault();
  clearCurrent();
  l.target.classList.add('current');
};

allTabs.forEach((e) => e.addEventListener('click', selectCurrent));
