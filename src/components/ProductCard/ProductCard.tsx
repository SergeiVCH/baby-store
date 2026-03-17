import {Box, Button, Card, Typography} from '@mui/material'
import type {Product} from '../../data/products'

interface ProductCardProps {
  product: Product
  addToCart: (product: Product) => void
  onImageClick: (url: string) => void // Добавляем этот пропс
}

export const ProductCard = ({
  product,
  addToCart,
  onImageClick,
}: ProductCardProps) => {
  return (
    <Card
      sx={{
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden', // Чтобы картинка не вылезала за скругления
        transition: 'transform 0.2s',
        '&:hover': {transform: 'translateY(-5px)'},
      }}>
      {/* Кликабельная область картинки */}
      <Box
        onClick={() => onImageClick(product.img)}
        sx={{
          cursor: 'pointer',
          overflow: 'hidden',
          p: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 220,
          bgcolor: '#f5f5f5', // Легкий фон для области фото
          '& img': {
            transition: 'transform 0.3s ease-in-out',
          },
          '&:hover img': {
            transform: 'scale(1.08)', // Картинка будет плавно увеличиваться при наведении
          },
        }}>
        <img
          src={product.img}
          alt={product.name}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>

      {/* Контент карточки */}
      <Box sx={{p: 2, textAlign: 'center', flexGrow: 1}}>
        <Typography
          variant='subtitle2'
          color='primary'
          sx={{fontWeight: 800, mb: 1}}>
          {product.brand.toUpperCase()}
        </Typography>
        <Typography variant='h6' sx={{fontWeight: 700, mb: 1}}>
          {product.name}
        </Typography>
        <Typography variant='body2' color='text.secondary' sx={{mb: 2}}>
          {product.type === 'diapers' ? 'Подгузники' : 'Трусики'}{' '}
          {product.label}
        </Typography>

        <Typography variant='h5' sx={{fontWeight: 900, mb: 2}}>
          {product.price.toLocaleString()} ₸
        </Typography>

        {/* Кнопка с исправленной шириной */}
        <Button
          variant='contained'
          fullWidth
          onClick={() => addToCart(product)}
          sx={{
            py: 1.5,
            fontSize: '1rem',
            width: '65%', // Не на всю ширину
            margin: '0 auto 2px auto', // Центрируем и добавляем отступ снизу
            padding: '8px 0',
            backgroundColor: '#1a237e', // Твой темно-синий цвет
            '&:hover': {
              backgroundColor: '#0d47a1',
            },
          }}>
          В корзину
        </Button>
      </Box>
    </Card>
  )
}
