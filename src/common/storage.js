import { startsWith } from 'lodash';
import contacts from '../contacts';

export const initStore = () => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

export const getContacts = () => new Promise(resolve => {
  setTimeout(() => resolve({
    status: 200,
    response: JSON.parse(localStorage.getItem('contacts')),
  }), 1000)
});

const filterContacts = specs => {
  const { name, city, active } = specs;
  let contacts = JSON.parse(localStorage.getItem('contacts'));

  if (name) {
    contacts = contacts.filter(c => startsWith(c.name, name));
  }

  if (city) {
    contacts = contacts.filter(c => startsWith(c.city, city));
  }

  if (active) {
    contacts = contacts.filter(c => c.active);
  }

  return contacts;
};

export const getFilteredContacts = filter => new Promise(resolve => {
  setTimeout(() => resolve({
    status: 200,
    response: filterContacts(filter),
  }), 1000)
});
