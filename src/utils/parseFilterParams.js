import { typeList } from '../constants/contacts.js';

const parseContactType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;
  const isContactType = (contactType) => typeList.includes(contactType);
  if (isContactType(contactType)) return contactType;
};

const parseIsFavorite = (isFavorite) => {
  if (typeof isFavorite === 'string') {
    const normalizedString = isFavorite.toLowerCase().trim();
    if (normalizedString === 'true') return true;
    if (normalizedString === 'false') return false;
  }
  if (typeof isFavorite === 'boolean') {
    return isFavorite;
  }
  return undefined;
};

export const parseFilterParams = (query) => {
  const { type, isFavorite } = query;
  const parsedContactType = parseContactType(type);
  const parsedIsFavorite = parseIsFavorite(isFavorite);
  return {
    contactType: parsedContactType,
    isFavorite: parsedIsFavorite,
  };
};
