import {v1} from 'uuid'

export type Product = {
  id: string
  brand: string
  name: string
  type: 'diapers' | 'pants'
  size: string
  label: string
  price: number
  img: string
}

// 🦈BABY SHARK 6500 тг
//pants трусики

export const PRODUCT_DATA: Product[] = [
  {
    id: v1(),
    brand: 'BABY SHARK',
    name: '',
    type: 'pants',
    size: '3 (6-11 кг)',
    label: 'M',
    price: 6500,
    img: 'https://i.ibb.co.com/jk96bq1T/bs-diapers-m.png',
  },
  {
    id: v1(),
    brand: '🦈BABY SHARK',
    name: '',
    type: 'pants',
    size: '5 (12-20 кг)',
    label: 'XL',
    price: 6500,
    img: 'https://i.ibb.co.com/p6GkGy3w/IMG-4682.png',
  },
  {
    id: v1(),
    brand: '🦈BABY SHARK',
    name: '',
    type: 'pants',
    size: '4 (9-14 кг)',
    label: 'L',
    price: 6500,
    img: 'https://i.ibb.co.com/bRqbfms9/IMG-4681.png',
  },
  {
    id: v1(),
    brand: '🦈BABY SHARK',
    name: '',
    type: 'pants',
    size: '6 (15+ кг)',
    label: 'XXL',
    price: 6500,
    img: 'https://i.ibb.co.com/4w8kFvBV/IMG-4683.png',
  },

  {
    id: v1(),
    brand: '🦈BABY SHARK',
    name: '',
    type: 'pants',
    size: '7 (19+ кг)',
    label: 'XXXL',
    price: 6500,
    img: 'https://i.ibb.co.com/Qv7PkzZc/IMG-4684.png',
  },

  // 🦈BABY SHARK 6500 тг
  // diapers памперсы

  {
    id: v1(),
    brand: '🦈BABY SHARK',
    name: '',
    type: 'diapers',
    size: '3 (4 - 8 кг)',
    label: 'S',
    price: 6500,
    img: 'https://i.ibb.co.com/Q3QfddfB/IMG-4674.png',
  },
  {
    id: v1(),
    brand: '🦈BABY SHARK',
    name: '',
    type: 'diapers',
    size: '3 (2 - 5 кг)',
    label: 'NB',
    price: 6500,
    img: 'https://i.ibb.co.com/Z1S2vrqY/IMG-4673.png',
  },

  // 🐧Lolokitty 5000 тг
  {
    id: v1(),
    brand: '🐧Lolokitty',
    name: '',
    type: 'diapers',
    size: '3 (2 - 5 кг)',
    label: 'NB',
    price: 5000,
    img: '',
  },
  // ❤Jolico 4500 тг
  {
    id: v1(),
    brand: '❤Jolico',
    name: '',
    type: 'diapers',
    size: '3 (2 - 5 кг)',
    label: 'NB',
    price: 4500,
    img: '',
  },
  // 💛Yoyoto 4500 тг
  {
    id: v1(),
    brand: '💛Yoyoto',
    name: '',
    type: 'diapers',
    size: '3 (2 - 5 кг)',
    label: 'NB',
    price: 4500,
    img: '',
  },
  // 💙Мама знает Standard 5300 тг
  {
    id: v1(),
    brand: '💙Мама знает Standard',
    name: '',
    type: 'diapers',
    size: '3 (2 - 5 кг)',
    label: 'NB',
    price: 5300,
    img: '',
  },
  // 💙МАМА ЗНАЕТ 7200 ТГ
  {
    id: v1(),
    brand: '💙МАМА знает',
    name: '',
    type: 'diapers',
    size: '3 (2 - 5 кг)',
    label: 'NB',
    price: 7200,
    img: '',
  },
  // 🐯TIGGY 6700 тг
  {
    id: v1(),
    brand: '🐯TIGGY',
    name: '',
    type: 'diapers',
    size: '3 (2 - 5 кг)',
    label: 'NB',
    price: 6700,
    img: '',
  },
  // 🐱BB KITTY SENSITIVE 6500 тг
  {
    id: v1(),
    brand: '🐱BB KITTY SENSITIVE',
    name: '',
    type: 'diapers',
    size: '3 (2 - 5 кг)',
    label: 'NB',
    price: 6500,
    img: '',
  },
  // 🐱BB KITTY PREMIUM 7000 тг
  {
    id: v1(),
    brand: '🐱BB KITTY PREMIUM',
    name: '',
    type: 'diapers',
    size: '3 (2 - 5 кг)',
    label: 'NB',
    price: 7000,
    img: '',
  },
]
