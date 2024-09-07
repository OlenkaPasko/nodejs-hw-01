//import * fs from "node:fs"
import { PATH_DB } from '../constants/contacts.js';

import getAllContacts from './getAllContacts.js';
import createFakeContact from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const contactList = getAllContacts();
  const newContList = Array(number).fill().map(()=>createFakeContact());
  console.log(newContList);
};

generateContacts(5);
//крок перший,створити масив контактів, крок другий:d масив контактів записуємо масив об'ктів, фаїл джсон.стрігіфай, тоюто перетворити на сторку,а потім вже посилати другим аргументом

