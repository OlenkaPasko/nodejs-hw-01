import { createFakeContact } from '../utils/createFakeContact.js';

import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
    const contactList = await getAllContacts();
    const newContact = createFakeContact();
    contactList.push(newContact);
};

addOneContact();
