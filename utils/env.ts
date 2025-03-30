import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

export const ENV = {
  BASE_URL: process.env.BASE_URL || 'https://hudl.com',
  USERNAME: process.env.USERNAME || '',
  PASSWORD: process.env.PASSWORD || '',
  INVALID_PASSWORD: process.env.INVALID_PASSWORD || 'Test@123',
};