import { Schema, model } from 'mongoose';
import { typeList } from '../../constants/contacts.js';

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      required: true,
      enum: typeList,
      default: typeList[0],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ContactsCollection = model('contacts', contactSchema);
