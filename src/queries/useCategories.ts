import { useQuery } from 'react-query';

export type Category = {
  id: string;
  count: number;
  parent: string;
  name: string;
};

type CategoryApiResponse = { data: { categories: Category[] } };

async function getCategories() {
  return fetch('/categories').then(res => res.json());
}

export function useCategories() {
  return useQuery<CategoryApiResponse, Error>('categories', getCategories);
}
