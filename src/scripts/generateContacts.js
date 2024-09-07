import getAllContacts from './getAllContacts.js';
import createFakeContact from '../utils/createFakeContact.js';
import updateContacts from './updateContacts.js';

const generateContacts = async (number) => {
  const contactList = getAllContacts();
  const newContList = Array(number).fill(0).map(createFakeContact);
  contactList.push(...newContactList);
  await updateContacts(contactList);
};

generateContacts(5);
//крок перший,створити масив контактів, крок другий:d масив контактів записуємо масив об'ктів, фаїл джсон.стрігіфай, тоюто перетворити на сторку,а потім вже посилати другим аргументом

