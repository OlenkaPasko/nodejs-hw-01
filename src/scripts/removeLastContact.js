import getAllContacts from './getAllContacts.js';//отримати весь список
import updateContacts from './updateContacts.js';//перезаписати джейсон

export const removeLastContact = async () => {
    const contactList = await getAllContacts();
    contactList.pop();
    await updateContacts(contactList);
};

removeLastContact();
