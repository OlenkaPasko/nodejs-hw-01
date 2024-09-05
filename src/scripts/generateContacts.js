//import { PATH_DB } from '../constants/contacts.js';

import createFakeContact from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const newContItems = Array(number).fill().map(()=>createFakeContact());
  console.log(newContItems);
};

generateContacts(5);
