const generate = (page) => {
    const contactBox = document.createElement('div');
    contactBox.classList.add('contactBox');
    const contact = document.createElement('div');
    contact.classList.add('contact');
    const contactMsg = document.createElement('div');
    contactMsg.classList.add('contactMsg');

    contactBox.append(contact, contactMsg);
    page.append(contactBox);
};

const createContact = (current, page) => {
    if (current !== 'contact') {
        generate(page);
    }
};
export default createContact;
