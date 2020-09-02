import crypto from 'crypto';

const gravatarUrl = 'https://s.gravatar.com/avatar';
const query = 's=60';

// Returns the Gravatar image for an email
const getGravatar = (email: string): string => {
  // Gravatar uses MD5 hashes from an email address (all lowercase) to get the image
  const hash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
  // Return the full avatar URL
  return `${gravatarUrl}/${hash}?${query}`;
};

export default getGravatar;
