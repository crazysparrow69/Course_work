/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { users } from './users.js';

// Object that stores data about the page
export const page = {
  status: 'not-logged',
  user: null,
};

// Check for users that are logged in
const checkForLoggedIn = () => {
  for (const user of users) {
    if (user.status === 'logged-in') {
      page.status = 'logged';
      page.user = user;
    }
  }
};

checkForLoggedIn();
