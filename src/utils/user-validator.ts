import { UserInputZod } from '@/types/user.js';

export const validateUserData = ( data: unknown ) => {
  return UserInputZod.parse( data );
};