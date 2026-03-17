export type Product = {
  id: number
  brand: string
  name: string
  type: 'diapers' | 'pants'
  size: string
  label: string
  price: number
  img: string
}

export const PRODUCT_DATA: Product[] = [
  {
    id: 1,
    brand: 'BABY SHARK',
    name: '',
    type: 'diapers',
    size: '3 (6-11 кг)',
    label: 'M',
    price: 6500,
    img: 'src/public/images/products/baby-shark/bs-diapers-m.PNG',
  },

  {
    id: 2,
    brand: 'Pampers',
    name: 'Premium Care',
    type: 'pants',
    size: '4 (9-14 кг)',
    label: 'L',
    price: 9200,
    img: 'https://placehold.co/400x400?text=Pampers+Pants',
  },
  {
    id: 3,
    brand: 'Moony',
    name: 'Natural',
    type: 'diapers',
    size: 'M (6-11 кг)',
    label: 'M',
    price: 9800,
    img: 'https://placehold.co/400x400?text=Moony+Natural',
  },
  {
    id: 4,
    brand: 'Genki',
    name: 'Soft Pants',
    type: 'pants',
    size: 'XL (12-17 кг)',
    label: 'XL',
    price: 7200,
    img: 'https://placehold.co/400x400?text=Genki+Pants',
  },
  {
    id: 5,
    brand: 'Genki',
    name: 'Soft Pants',
    type: 'pants',
    size: 'XL (12-17 кг)',
    label: 'XL',
    price: 7200,
    img: 'https://placehold.co/400x400?text=Genki+Pants',
  },
]
