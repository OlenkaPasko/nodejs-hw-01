import * as fs from "node:fs/promises"
import { PATH_DB } from '../constants/contacts.js';

const getAllContacts = async () => {
    const data = await fs.readFile(PATH_DB, "utf-8");//читаємо дані
     return JSON.parse(data);//повертаємо дані пропушені через джейсон.парс
};
console.log(await getAllContacts());

export default getAllContacts;

