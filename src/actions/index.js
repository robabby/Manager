import { EMAIL_CHANGED } from './types';

export const emailChanged = (text) => {
   return {
     type: EMAIL_CHANGED,
     paylaod: text
   }
}
