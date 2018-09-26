import * as React from 'react';
import * as Scrivito from 'scrivito';

Scrivito.provideComponent('SectionWidget', ({ widget }) => {
  return (
    <Scrivito.ContentTag content={ widget } attribute="content" />
  );
});
