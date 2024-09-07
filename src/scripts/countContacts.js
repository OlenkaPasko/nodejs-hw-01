import getAllContacts from './getAllContacts.js';

export const countContacts = async () => {
const contacts = await getAllContacts();//отримуємо список пісень
return contacts.length; //повернули кількість

};

console.log(await countContacts());
