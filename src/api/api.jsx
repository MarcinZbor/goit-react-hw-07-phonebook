import axios from 'axios';

const CONTACTS_URL = 'contacts';

const instance = axios.create({
  baseURL: 'https://648abf8017f1536d65e99681.mockapi.io',
  headers: {
    'Content-Type': 'application/json',
  },
});


