import { collections, type CollectionType } from './types';

/**
 * Type-guard to check if a collection link is valid.
 * @param {string} collectionLink the collection to check
 * @returns {boolean} true if the collection link is valid
 */
export function isValidCollection(collectionLink?: string): collectionLink is CollectionType {
  return !!collectionLink && collections.some((c) => c.link === collectionLink);
}
