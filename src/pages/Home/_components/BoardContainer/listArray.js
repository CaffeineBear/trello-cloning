import uuid from 'react-uuid';

const listArray = [
  {
    title: 'List1',
    id: `list1-${uuid()}`,
    cardItems: [
      {
        id: uuid(),
        title: 'Helloooooooooooooooooooooooooooooooooooo',
      },
      {
        id: uuid(),
        title: 'Hello2',
      },
      {
        id: uuid(),
        title: 'Hello3',
      },
      {
        id: uuid(),
        title: 'Hello4',
      },
    ],
  },
  {
    title: 'List2',
    id: `list2-${uuid()}`,
    cardItems: [
      {
        id: uuid(),
        title: 'Hello',
      },
      {
        id: uuid(),
        title: 'Hello2',
      },
      {
        id: uuid(),
        title: 'Hello3',
      },
      {
        id: uuid(),
        title: 'Hello4',
      },
    ],
  },
  {
    title: 'List3',
    id: `list3-${uuid()}`,
    cardItems: [
      {
        id: uuid(),
        title: 'Hello',
      },
      {
        id: uuid(),
        title: 'Hello2',
      },
      {
        id: uuid(),
        title: 'Hello3',
      },
      {
        id: uuid(),
        title: 'Hello4',
      },
    ],
  },
  {
    title: 'List4',
    id: `list4-${uuid()}`,
    cardItems: [
      {
        id: uuid(),
        title: 'Hello',
      },
      {
        id: uuid(),
        title: 'Hello2',
      },
      {
        id: uuid(),
        title: 'Hello3',
      },
      {
        id: uuid(),
        title: 'Hello4',
      },
    ],
  },
];

export default listArray;
