import Restaurant from '@models/Restaurant';

const restaurants: Restaurant[] = [
  {
    id: 'a67bd7fc-d90d-4d53-801f-2a7879a3543e',
    name: '',
    open: false,
  },
  {
    id: 'd652d351-3ba4-46d0-8068-cd4779f32f84',
    name: '',
    open: false,
  },
  {
    id: 'f059b5d2-47a8-4760-993c-7332a0dc099f',
    name: '',
    open: false,
  },
  {
    id: '4623b7d7-0879-4071-a8f1-1a727476df7b',
    name: '',
    open: false,
  },
  {
    id: 'f05695b1-d6b0-4d7f-a8d9-4a18835b0f78',
    name: '',
    open: false,
  },
  {
    id: '86f21f40-7425-4fb7-b62a-653b5e75926c',
    name: '',
    open: false,
  },
  {
    id: 'cfc5d470-8409-44e5-8cf1-21749556d3bf',
    name: '',
    open: false,
  },
];

export default class RestaurantService {
  static async list(): Promise<Restaurant[]> {
    return restaurants;
  }
}
