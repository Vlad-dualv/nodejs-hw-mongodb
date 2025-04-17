import createHttpError from 'http-errors';
import { ContactsCollection } from '../db/models/contact.js';

export const checkUser = async (req, res, next) => {
  const { _id: userId } = req.user;
  const { contactId } = req.params;

  if (!userId) {
    throw createHttpError(401, 'User not authenticated');
  }
  const contact = await ContactsCollection.findOne({ _id: contactId, userId });

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  next();
};
