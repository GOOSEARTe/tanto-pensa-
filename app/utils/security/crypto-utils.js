import { encode, decode } from '@nativescript/core/text';

export const CryptoUtils = {
  // Basic encoding/decoding utilities
  encodeBase64(str) {
    return encode(str).toBase64String();
  },

  decodeBase64(base64Str) {
    return decode(base64Str).toString();
  },

  // Simple hash function for non-sensitive data
  hash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash.toString(36);
  }
};