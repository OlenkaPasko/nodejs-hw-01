//import { PATH_DB } from '../constants/contacts.js';

import createFakeContact from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const items = [];
  for (let i = 0; i < number; i += 1) {
    const contactList = createFakeContact();
    items.push(contactList);
  }
  console.log(items);
};

generateContacts(5);
