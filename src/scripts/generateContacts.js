import * fs from "node:fs"
import { PATH_DB } from '../constants/contacts.js';

import createFakeContact from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const newContList = Array(number).fill().map(()=>createFakeContact());
  console.log(newContList);
};

generateContacts(5);
