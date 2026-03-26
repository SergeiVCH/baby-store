// @flow
import Brightness4Icon from '@mui/icons-material/Brightness4'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {
  AppBar,
  Badge,
  Container,
  IconButton,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material'

import InstagramIcon from '@mui/icons-material/Instagram'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import {Tooltip} from '@mui/material'

type HeaderProps = {
  search: string
  setSearch: (value: string) => void
  mode: 'light' | 'dark'
  setMode: (mode: 'light' | 'dark') => void
  cartCount: number // Нам не нужна вся корзина, только число для значка
  setIsCartOpen: () => void
}

export const Header = ({
  search,
  setSearch,
  mode,
  setMode,
  cartCount,
  setIsCartOpen,
}: HeaderProps) => {
  return (
    <AppBar
      position='sticky'
      color='inherit'
      elevation={0}
      sx={{borderBottom: '1px solid', borderColor: 'divider'}}>
      <Container maxWidth='xl'>
        <Toolbar sx={{justifyContent: 'space-between', py: 1}}>
          <Typography
            variant='h5'
            sx={{
              fontWeight: 900,
              color: 'primary.main',
              letterSpacing: -1,
            }}>
            BABY MART
          </Typography>
          <TextField
            size='small'
            placeholder='Поиск...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              maxWidth: 400,
              mx: 2,
              flexGrow: 1,
              display: {xs: 'none', sm: 'block'},
            }}
            InputProps={{
              startAdornment: <SearchIcon sx={{mr: 1, opacity: 0.4}} />,
            }}
          />

          <Stack direction='row' spacing={1}>
            <Stack direction='row' spacing={1} sx={{mr: 2}}>
              {/* Ссылка на Instagram */}
              <Tooltip title='Мы в Instagram'>
                <IconButton
                  href='https://www.instagram.com/podguzniki_smirnovo?igsh=MTJsMnlhOG16cW5iMw=='
                  target='_blank'
                  sx={{color: mode === 'light' ? '#E1306C' : '#ff4081'}}>
                  <InstagramIcon />
                </IconButton>
              </Tooltip>

              {/* Быстрый звонок */}
              <Tooltip title='Позвонить нам'>
                <IconButton
                  href='tel:+77776060935'
                  sx={{color: 'primary.main'}}>
                  <LocalPhoneIcon />
                </IconButton>
              </Tooltip>
            </Stack>
            <IconButton
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
              <Brightness4Icon />
            </IconButton>
            <IconButton color='primary' onClick={setIsCartOpen}>
              <Badge badgeContent={cartCount} color='error'>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
