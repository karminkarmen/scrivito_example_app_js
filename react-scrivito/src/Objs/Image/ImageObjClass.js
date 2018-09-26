import * as Scrivito from 'scrivito';

const Image = Scrivito.provideObjClass('Image', {
  attributes: {
    blob: 'binary',
  },
});

export default Image;
