import './style.css';
import createHome from './home';
import createContact from './contact';
import createMenu from './menu';

const mainContainer = document.createElement('div');
mainContainer.classList.add('mainContainer');
const tabBox = document.createElement('div');
tabBox.classList.add('tabBox');
const bottomBar = document.createElement('div');
bottomBar.classList.add('bottomBar', 'home');
const homeTab = document.createElement('div');
homeTab.classList.add('home', 'tab', 'current');
const menuTab = document.createElement('div');
menuTab.classList.add('menu', 'tab');
const contactTab = document.createElement('div');
contactTab.classList.add('contact', 'tab');
const contentBox = document.createElement('div');
contentBox.classList.add('contentBox', 'home');
const page = document.createElement('div');
page.classList.add('page');

contentBox.append(page);
tabBox.append(homeTab, menuTab, contactTab, bottomBar);
mainContainer.append(tabBox, contentBox);
document.body.append(mainContainer);

const allTabs = Array.from(document.querySelectorAll('.tab'));

let prevTab = 'home';
createHome(null, page);

const setCurrentTab = (l) => {
    if (allTabs.some((e) => e.classList.contains('current'))) {
        allTabs
            .find((e) => e.classList.contains('current'))
            .classList.toggle('current');
    }
    l.target.classList.add('current');
};

const matchTheDrapes = (l) => {
    page.replaceChildren();
    const currentTab = Array.from(l.target.classList).filter(
        (c) => c !== 'tab' && c !== 'current'
    ).toString();
    switch (currentTab) {
        case 'home':
            createHome(prevTab, page);
            bottomBar.classList.replace(
                bottomBar.classList.contains('menu') ? 'menu' : 'contact',
                currentTab
            );
            contentBox.classList.replace(
                contentBox.classList.contains('menu') ? 'menu' : 'contact',
                currentTab
            );
            break;
        case 'menu':
            createMenu(prevTab, page);
            bottomBar.classList.replace(
                bottomBar.classList.contains('home') ? 'home' : 'contact',
                currentTab
            );
            contentBox.classList.replace(
                contentBox.classList.contains('home') ? 'home' : 'contact',
                currentTab
            );
            break;
        case 'contact':
            createContact(prevTab, page);
            bottomBar.classList.replace(
                bottomBar.classList.contains('home') ? 'home' : 'menu',
                currentTab
            );
            contentBox.classList.replace(
                contentBox.classList.contains('home') ? 'home' : 'menu',
                currentTab
            );
            break;
        // no default
    }
    prevTab = currentTab
};

const selectTab = (l) => {
    l.preventDefault();
    setCurrentTab(l);
    matchTheDrapes(l);
};

allTabs.forEach((e) => e.addEventListener('click', selectTab));
