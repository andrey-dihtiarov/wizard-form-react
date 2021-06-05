// TODO remove mocks after adding indexDB
import { subMinutes, subHours, subYears } from 'date-fns';
import avatar from './images/avatar.jpg';

/* eslint-disable */
export let users = [
  {
    id: '1',

    userName: 'jondoe',
    avatar: avatar,
    password: 'password',

    firstName: 'Jon',
    lastName: 'Doe',
    email: 'englishMotherFuckerDoYouSpeakIt@mail.com',
    address: 'USA, Miami, some cool street 234',
    birthDate: subYears(Date.now(), 19),
    gender: 'Male',

    company: 'Company',
    githubLink: 'github.com/user_idw',
    facebookLink: 'www.facebook.com/user_id',
    mainLanguage: 'English',
    fax: '+1 (093)-95-31-593',
    phoneNumbers: ['+38 (034)-34-23-897'],

    skills: ['js', 'react', 'typescript'],
    additionalInfo: 'some additional info',
    myHobbies: ['programming', 'traveling', 'playing piano'],

    lastUpdate: subHours(Date.now(), 3),
  },
  {
    id: '2',

    userName: 'jondoe2',
    avatar: null,
    password: 'password',

    firstName: 'Jon2',
    lastName: 'Doe2',
    email: 'englishMotherFuckerDoYouSpeakIt@mail.com',
    address: 'USA, Miami, some cool street 6',
    birthDate: subYears(Date.now(), 21),

    company: 'Company2',
    githubLink: 'github.com/user_idw',
    facebookLink: 'www.facebook.com/user_id2',
    mainLanguage: 'English',
    fax: '+1 (093)-95-31-359',
    phoneNumbers: ['+38 (034)-34-23-175'],

    skills: ['c++', 'assembler', 'rust'],
    additionalInfo: 'some additional info',
    myHobbies: ['programming', 'traveling', 'playing piano'],

    lastUpdate: subMinutes(Date.now(), 3),
  },
];
/* eslint-enable */
