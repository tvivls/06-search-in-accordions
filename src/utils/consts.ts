export const data = [
  {
    id: 1,
    title: 'common_title_1',
    children: [
      {
        id: 2,
        title: 'rare_title_1',
        children: [
          {
            id: 4,
            title: 'minor_title_1',
            children: [
              {
                id: 7,
                title: 'nested_title_1',
                children: [
                  { id: 10, title: 'deep_title_1', children: [] },
                  { id: 11, title: 'deep_title_2', children: [] },
                ],
              },
            ],
          },
          { id: 5, title: 'sub_rare_title_1', children: [] },
          { id: 6, title: 'sub_rare_title_2', children: [] },
        ],
      },
      { id: 3, title: 'normal_title_1', children: [] },
    ],
  },
  {
    id: 12,
    title: 'common_title_2',
    children: [
      { id: 13, title: 'normal_title_2', children: [] },
      { id: 14, title: 'rare_title_2', children: [] },
      {
        id: 15,
        title: 'super_rare_title_1',
        children: [
          {
            id: 16,
            title: 'ultra_rare_title_1',
            children: [
              { id: 17, title: 'deepest_title_1', children: [] },
              { id: 18, title: 'deepest_title_2', children: [] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 19,
    title: 'common_title_3',
    children: [
      { id: 20, title: 'normal_title_3', children: [] },
      {
        id: 21,
        title: 'rare_title_3',
        children: [
          {
            id: 22,
            title: 'super_rare_title_2',
            children: [
              {
                id: 23,
                title: 'ultra_rare_title_2',
                children: [
                  { id: 24, title: 'deepest_title_3', children: [] },
                  { id: 25, title: 'deepest_title_4', children: [] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
