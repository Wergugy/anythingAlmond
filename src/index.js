const mainContainer = document.createElement('div');
mainContainer.classList.add('mainContainer');
const tabBox = document.createElement('div');
tabBox.classList.add('tabBox');
const bottomBar = document.createElement('div');
bottomBar.classList.add('bottomBar');
const homeTab = document.createElement('div');
homeTab.classList.add('homeTab');
const menuTab = document.createElement('div');
menuTab.classList.add('menuTab');
const contactTab = document.createElement('div');
contactTab.classList.add('contactTab');

tabBox.append(homeTab, menuTab, contactTab, bottomBar);
mainContainer.append(tabBox);

document.body.append(mainContainer);
