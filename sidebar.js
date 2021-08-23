import React from 'react';
import { MdHome as icon } from 'react-icons/md';

import S from '@sanity/desk-tool/structure-builder'; // sanity tool to build custom side bar

// build a custom sidebar
export default function Sidebar() {
  return S.list()
    .title('Big Saucer')
    .items([
      // create a new sub item
      S.listItem().title('Home Page').icon(icon).child(
        S.editor()
          .schemaType('storeSettings')
          // make a document id so that we don't have a random string ofnumbers
          .documentId('koramangala')
      ),
      // add in the rest of our docuemnt items
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
