import Dexie from 'dexie';
import { v4 as uuidv4 } from 'uuid';

const dbName = 'wizard_form';
const dbVersion = 1;
const tempFormDataIndex = '';

const db = new Dexie(dbName);
db.version(dbVersion).stores({ tempFormData: tempFormDataIndex, users: 'userId' });

/* eslint-disable no-return-await */

// tempFormData
const getFormData = async () => await db.tempFormData.get(tempFormDataIndex);

const updateFormData = async (formData) => {
  await db.tempFormData.put(
    { ...formData, userId: !formData.userId ? uuidv4() : formData.userId },
    tempFormDataIndex,
  );
  return await getFormData();
};

const clearFormData = async () => await db.tempFormData.clear();

// users
const getUserById = async (id) => await db.users.get(id);

const getUsers = async () => await db.users.toArray();

const addUser = async (user) => {
  await db.users.add({ ...user, lastUpdate: new Date().toISOString() });
  return await getUserById(user.userId);
};

const updateUser = async (user) => {
  const { userId } = user;
  await db.users.put({ ...user, lastUpdate: new Date().toISOString() }, userId);
  return await getUserById(userId);
};

const deleteUser = async (id) => {
  await db.users.delete(id);
  return await getUsers();
};

export {
  getFormData,
  updateFormData,
  getUserById,
  getUsers,
  addUser,
  clearFormData,
  updateUser,
  deleteUser,
};
