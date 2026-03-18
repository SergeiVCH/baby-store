import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  ListItem,
  Stack,
  Typography,
} from '@mui/material'
import type {Product} from '../../data/products'

interface CardDrawerProps {
  isOpen: boolean
  onClose: () => void
  cart: {product: Product; quantity: number}[]
  setCart: React.Dispatch<
    React.SetStateAction<{product: Product; quantity: number}[]>
  >
}

export const CardDrawer = ({
  isOpen,
  onClose,
  cart,
  setCart,
}: CardDrawerProps) => {
  // Расчет общей суммы
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  )

  // Функции изменения количества
  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === id
          ? {...item, quantity: Math.max(1, item.quantity + delta)}
          : item,
      ),
    )
  }

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== id))
  }

  const handleOrder = () => {
    const text = encodeURIComponent(
      `Заказ из Baby Mart:\n ${cart.map((i) => `•${i.product.brand} ${i.product.name} x${i.quantity} ${i.product.type} ${i.product.size} ${i.product.label}`).join('\n')}\n\nСумма: ${totalPrice.toLocaleString()} ₸`,
    )
    window.open(`https://wa.me/7776060935?text=${text}`, '_blank')
  }

  return (
    <Drawer anchor='right' open={isOpen} onClose={onClose}>
      <Box
        sx={{
          width: {xs: '100vw', sm: 400},
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}>
        <Typography variant='h5' sx={{fontWeight: 900, mb: 3}}>
          Корзина
        </Typography>
        <Divider />

        <Box sx={{flexGrow: 1, overflowY: 'auto', py: 2}}>
          {cart.map((item) => (
            <ListItem
              key={item.product.id}
              sx={{px: 0, mb: 2, display: 'block'}}>
              <Stack direction='row' justifyContent='space-between'>
                <Typography sx={{fontWeight: 700}}>
                  {item.product.brand} {item.product.name}
                </Typography>
                <IconButton
                  size='small'
                  color='error'
                  onClick={() => removeItem(item.product.id)}>
                  <DeleteOutlineIcon />
                </IconButton>
              </Stack>
              <Stack
                direction='row'
                alignItems='center'
                spacing={2}
                sx={{mt: 1}}>
                <Stack
                  direction='row'
                  alignItems='center'
                  sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                  }}>
                  <IconButton
                    size='small'
                    onClick={() => updateQuantity(item.product.id, -1)}>
                    <RemoveIcon />
                  </IconButton>
                  <Typography sx={{px: 1, fontWeight: 900}}>
                    {item.quantity}
                  </Typography>
                  <IconButton
                    size='small'
                    onClick={() => updateQuantity(item.product.id, 1)}>
                    <AddIcon />
                  </IconButton>
                </Stack>
                <Typography sx={{ml: 'auto', fontWeight: 800}}>
                  {(item.product.price * item.quantity).toLocaleString()} ₸
                </Typography>
              </Stack>
            </ListItem>
          ))}
        </Box>

        {cart.length > 0 && (
          <Box sx={{pt: 2, borderTop: '2px solid', borderColor: 'divider'}}>
            <Stack direction='row' justifyContent='space-between' sx={{mb: 2}}>
              <Typography variant='h6'>Итого:</Typography>
              <Typography variant='h6' sx={{fontWeight: 900}}>
                {totalPrice.toLocaleString()} ₸
              </Typography>
            </Stack>
            <Button
              variant='contained'
              fullWidth
              size='large'
              startIcon={<WhatsAppIcon />}
              sx={{bgcolor: '#25D366', py: 2, '&:hover': {bgcolor: '#128C7E'}}}
              onClick={handleOrder}>
              Заказать в WhatsApp
            </Button>
          </Box>
        )}
      </Box>
    </Drawer>
  )
}
