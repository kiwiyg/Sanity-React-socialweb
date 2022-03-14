import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'es0uy3hz',
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: 'sktz4O8Zu1W1TkXj7IVqlWy11BlQnNKmqLE5fCy82mj1ipnkvwc1jk3PR6grPRcR3j0I0O3uTqOHdycWLVmAnqPcP2ecjboMbDecsdvNmkP3nLDpzJdaIcc2fFT5Q5tIYBROnJQirFTjlUUhqDv8ACW9LpNFXY4dDqgW8d1rEMQaIzPDBVjD',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);