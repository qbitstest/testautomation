import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

export const ENV = {
  BASE_URL: process.env.BASE_URL || '',
  USERNAME: process.env.USERNAME || '',
  PASSWORD: process.env.PASSWORD || '',
  INVALID_PASSWORD: process.env.INVALID_PASSWORD || '',
};