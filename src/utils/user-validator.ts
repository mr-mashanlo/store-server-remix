import { UserInputZod } from '@/types/user';

export const validateUserData = ( data: unknown ) => {
  return UserInputZod.parse( data );
};