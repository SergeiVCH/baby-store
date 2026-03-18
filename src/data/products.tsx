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

export const PRODUCT_DATA: Product[] = [
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

  // 🦈BABY SHARK 6500 тг
  //pants трусики
  {
    id: v1(),
    brand: '🦈BABY SHARK',
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

  // 🐯TIGGY 6700 тг
  {
    id: v1(),
    brand: '🐯TIGGY',
    name: '',
    type: 'pants',
    size: '3 (6 - 11 кг)',
    label: 'M',
    price: 6700,
    img: 'https://i.ibb.co.com/SXnP9ZMt/Whats-App-Image-2026-03-18-at-12-41-34.jpg',
  },
  {
    id: v1(),
    brand: '🐯TIGGY',
    name: '',
    type: 'pants',
    size: '4 (9 - 14 кг)',
    label: 'L',
    price: 6700,
    img: 'https://i.ibb.co.com/fVSKfY0Y/Whats-App-Image-2026-03-18-at-12-41-35.jpg',
  },
  {
    id: v1(),
    brand: '🐯TIGGY',
    name: '',
    type: 'pants',
    size: '5 (12 - 18 кг)',
    label: 'XL',
    price: 6700,
    img: 'https://i.ibb.co.com/6cbWgdRD/Whats-App-Image-2026-03-18-at-12-41-36.jpg',
  },
  {
    id: v1(),
    brand: '🐯TIGGY',
    name: '',
    type: 'pants',
    size: '6 (15 - 22 кг)',
    label: 'XXL',
    price: 6700,
    img: 'https://i.ibb.co.com/xqnKj8RC/Whats-App-Image-2026-03-18-at-12-42-31.jpg',
  },

  // 🐱BB KITTY SENSITIVE 6500 тг
  {
    id: v1(),
    brand: '🐱BB KITTY SENSITIVE',
    name: '',
    type: 'diapers',
    size: 'S (4 - 8 кг)',
    label: 'S',
    price: 6500,
    img: 'https://i.ibb.co.com/LdMTGH6s/Whats-App-Image-2026-03-18-at-15-54-15.jpg',
  },
  {
    id: v1(),
    brand: '🐱BB KITTY SENSITIVE',
    name: '',
    type: 'diapers',
    size: 'S (2 - 5 кг)',
    label: 'L',
    price: 6500,
    img: 'https://i.ibb.co.com/ynNbMsfn/Whats-App-Image-2026-03-18-at-15-53-53.jpg',
  },
  {
    id: v1(),
    brand: '🐱BB KITTY SENSITIVE',
    name: '',
    type: 'diapers',
    size: 'S (2 - 5 кг)',
    label: 'XL',
    price: 6500,
    img: 'https://i.ibb.co.com/WpnfZNRc/Whats-App-Image-2026-03-18-at-15-54-51.jpg',
  },
  // 🐱BB KITTY PREMIUM 7000 тг
  {
    id: v1(),
    brand: '🐱BB KITTY PREMIUM',
    name: '',
    type: 'pants',
    size: '4 (9 - 14 кг)',
    label: 'L',
    price: 7000,
    img: 'https://i.ibb.co.com/ZRQrQ28j/Whats-App-Image-2026-03-18-at-15-55-47.jpg',
  },
  {
    id: v1(),
    brand: '🐱BB KITTY PREMIUM',
    name: '',
    type: 'pants',
    size: '6 (больше 15 кг)',
    label: 'XXL',
    price: 7000,
    img: 'https://i.ibb.co.com/ymH3mrzC/Whats-App-Image-2026-03-18-at-15-55-27.jpg',
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
]
