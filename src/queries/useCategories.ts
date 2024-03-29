import { useQuery } from 'react-query';

export type Category = {
  id: string;
  count: number;
  parent: string;
  name: string;
};

type CategoryApiResponse = { data: { categories: Category[] } };

const data = {
  data: {
    categories: [
      {
        id: '14096',
        count: 137,
        parent: '14100',
        name: 'Kleding',
      },
      {
        id: '14098',
        count: 2,
        parent: '14096',
        name: 'Badmode',
      },
      {
        id: '14100',
        count: 136,
        parent: '0',
        name: 'Dames',
      },
      {
        id: '14101',
        count: 17,
        parent: '14096',
        name: 'Broeken',
      },
      {
        id: '14104',
        count: 5,
        parent: '14096',
        name: 'Jassen en Mantels',
      },
      {
        id: '14105',
        count: 32,
        parent: '14096',
        name: 'Jurken',
      },
      {
        id: '14106',
        count: 5,
        parent: '14096',
        name: 'Lingerie en nachtmode',
      },
      {
        id: '14107',
        count: 41,
        parent: '14096',
        name: 'Shirts en Tops',
      },
      {
        id: '14108',
        count: 15,
        parent: '14096',
        name: 'Truien en Vesten',
      },
      {
        id: '14114',
        count: 3,
        parent: '14100',
        name: 'Accessoires',
      },
      {
        id: '14212',
        count: 9,
        parent: '14096',
        name: 'Jeans',
      },
      {
        id: '14213',
        count: 8,
        parent: '14212',
        name: 'Straight',
      },
      {
        id: '14214',
        count: 2,
        parent: '14212',
        name: 'Skinny',
      },
      {
        id: '14215',
        count: 9,
        parent: '14212',
        name: 'Slim',
      },
      {
        id: '14216',
        count: 38,
        parent: '14107',
        name: 'Tops',
      },
      {
        id: '14217',
        count: 6,
        parent: '14108',
        name: 'Sweaters',
      },
      {
        id: '14219',
        count: 2,
        parent: '14114',
        name: 'Riemen',
      },
      {
        id: '14220',
        count: 15,
        parent: '14107',
        name: 'Longsleeves',
      },
      {
        id: '14221',
        count: 28,
        parent: '14107',
        name: 'T-shirts',
      },
      {
        id: '14223',
        count: 9,
        parent: '16935',
        name: 'Blouses',
      },
      {
        id: '14224',
        count: 31,
        parent: '14105',
        name: 'Casual jurken',
      },
      {
        id: '14226',
        count: 1,
        parent: '14096',
        name: 'Joggingbroeken',
      },
      {
        id: '14228',
        count: 1,
        parent: '14105',
        name: 'Maxi jurken',
      },
      {
        id: '14230',
        count: 1,
        parent: '14101',
        name: 'Leggings',
      },
      {
        id: '14231',
        count: 5,
        parent: '16891',
        name: 'Mini Rokken',
      },
      {
        id: '14232',
        count: 8,
        parent: '14105',
        name: 'Mouwloze jurken',
      },
      {
        id: '14234',
        count: 3,
        parent: '14101',
        name: 'Shorts',
      },
      {
        id: '14236',
        count: 10,
        parent: '14105',
        name: 'Jurken lange mouw',
      },
      {
        id: '14237',
        count: 3,
        parent: '14101',
        name: 'Jumpsuits en Playsuits',
      },
      {
        id: '14239',
        count: 8,
        parent: '14101',
        name: 'Pantalons',
      },
      {
        id: '14240',
        count: 14,
        parent: '14105',
        name: 'Jurken korte mouw',
      },
      {
        id: '14559',
        count: 1,
        parent: '14100',
        name: 'Sport',
      },
      {
        id: '16861',
        count: 5,
        parent: '14212',
        name: 'Bootcut',
      },
      {
        id: '16877',
        count: 8,
        parent: '14212',
        name: 'Relaxed',
      },
      {
        id: '16891',
        count: 12,
        parent: '14096',
        name: 'Rokken',
      },
      {
        id: '16909',
        count: 3,
        parent: '14105',
        name: 'Cocktail jurken',
      },
      {
        id: '16915',
        count: 2,
        parent: '14105',
        name: 'Blousejurken',
      },
      {
        id: '16919',
        count: 31,
        parent: '14105',
        name: 'Overige jurken',
      },
      {
        id: '16935',
        count: 13,
        parent: '14096',
        name: 'Blouses',
      },
      {
        id: '16942',
        count: 3,
        parent: '14096',
        name: 'Overhemden',
      },
      {
        id: '16948',
        count: 10,
        parent: '16935',
        name: 'Overige blouses',
      },
      {
        id: '16968',
        count: 12,
        parent: '14101',
        name: 'Overige broeken',
      },
      {
        id: '16976',
        count: 8,
        parent: '16891',
        name: 'Kokerrok',
      },
      {
        id: '17002',
        count: 1,
        parent: '14104',
        name: 'Spijkerjassen',
      },
      {
        id: '17012',
        count: 3,
        parent: '14104',
        name: 'Winterjassen',
      },
      {
        id: '17016',
        count: 2,
        parent: '14104',
        name: 'Overige Jassen en Mantels',
      },
      {
        id: '17071',
        count: 2,
        parent: '14096',
        name: 'Badpakken',
      },
      {
        id: '17091',
        count: 1,
        parent: '14098',
        name: 'Overige Badmode',
      },
      {
        id: '17106',
        count: 1,
        parent: '14559',
        name: 'Broeken',
      },
      {
        id: '17131',
        count: 3,
        parent: '14106',
        name: "BH's",
      },
      {
        id: '17137',
        count: 2,
        parent: '14106',
        name: 'Slipjes',
      },
      {
        id: '17241',
        count: 1,
        parent: '14114',
        name: 'Mutsen en Hoeden',
      },
      {
        id: '17290',
        count: 12,
        parent: '16891',
        name: 'Overige Rokken',
      },
      {
        id: '21408',
        count: 9,
        parent: '14108',
        name: 'Cardigans',
      },
      {
        id: '21410',
        count: 8,
        parent: '16891',
        name: 'Korte Rok',
      },
      {
        id: '21459',
        count: 4,
        parent: '14104',
        name: 'Bomberjassen',
      },
      {
        id: '21464',
        count: 4,
        parent: '16891',
        name: 'Lange Rok',
      },
      {
        id: '21585',
        count: 3,
        parent: '17131',
        name: "Voorgevormde BH's",
      },
      {
        id: '21601',
        count: 1,
        parent: '17137',
        name: 'Slips',
      },
      {
        id: '21609',
        count: 1,
        parent: '14106',
        name: 'Hipsters',
      },
      {
        id: '21251',
        count: 14,
        parent: '0',
        name: 'Heren',
      },
      {
        id: '21253',
        count: 14,
        parent: '21251',
        name: 'T-shirts',
      },
      {
        id: '21249',
        count: 0,
        parent: '21251',
        name: 'Shoes',
      },
      {
        id: '21252',
        count: 14,
        parent: '14449',
        name: 'Shirts',
      },
      {
        id: '14126',
        count: 154,
        parent: '0',
        name: 'Kids',
      },
      {
        id: '14665',
        count: 69,
        parent: '14126',
        name: 'Boys',
      },
      {
        id: '14666',
        count: 93,
        parent: '14126',
        name: 'Girls',
      },
      {
        id: '21250',
        count: 15,
        parent: '14665',
        name: 'Jassen',
      },
      {
        id: '21258',
        count: 15,
        parent: '14665',
        name: 'T-shirts',
      },
      {
        id: '21260',
        count: 20,
        parent: '14665',
        name: 'Broeken',
      },
      {
        id: '21268',
        count: 3,
        parent: '14665',
        name: 'Sportkleding',
      },
      {
        id: '21274',
        count: 5,
        parent: '14665',
        name: 'Zwemkleding',
      },
      {
        id: '21276',
        count: 28,
        parent: '14665',
        name: 'Overige',
      },
      {
        id: '21284',
        count: 1,
        parent: '14666',
        name: 'Spijkerbroeken',
      },
      {
        id: '21290',
        count: 9,
        parent: '14666',
        name: 'Shirts',
      },
      {
        id: '21292',
        count: 15,
        parent: '14666',
        name: 'T-shirts',
      },
      {
        id: '21298',
        count: 27,
        parent: '14666',
        name: 'Broeken',
      },
      {
        id: '21306',
        count: 2,
        parent: '14666',
        name: 'Sportkleding',
      },
      {
        id: '21308',
        count: 2,
        parent: '14666',
        name: 'Zwemkleding',
      },
      {
        id: '21316',
        count: 27,
        parent: '14666',
        name: 'Overige',
      },
      {
        id: '21320',
        count: 1,
        parent: '14666',
        name: 'Baby rompers',
      },
      {
        id: '21326',
        count: 1,
        parent: '14666',
        name: 'Rompers',
      },
      {
        id: '21336',
        count: 14,
        parent: '14666',
        name: 'Jassen',
      },
      {
        id: '21338',
        count: 14,
        parent: '14666',
        name: 'Rokken',
      },
      {
        id: '21340',
        count: 14,
        parent: '14666',
        name: 'Jurken',
      },
    ],
  },
};

async function getCategories() {
  if (process.env.NODE_ENV === 'production') {
    return fetch('/categories').then(() => data);
  }

  return fetch('/categories').then(res => res.json());
}

export function useCategories() {
  return useQuery<CategoryApiResponse, Error>('categories', getCategories);
}
