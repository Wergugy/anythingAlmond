const generate = (page) => {
        const menuBox = document.createElement('div');
        menuBox.classList.add('menuBox');
        const menu = document.createElement('div');
        menu.classList.add('menu');
        const menuMsg = document.createElement('div');
        menuMsg.classList.add('menuMsg');
    
        menuBox.append(menu, menuMsg);
        page.append(menuBox);
    };
    
    const createMenu = (current, page) => {
        if (current !== 'menu') {
            generate(page);
        }
    };
    export default createMenu;