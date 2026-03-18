import {
  Alert,
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Paper,
  Snackbar,
  ThemeProvider,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Grid'
import {useEffect, useMemo, useState} from 'react'
import {CardDrawer} from './components/CardDrawer/CardDrawer'
import {Header} from './components/Header/Header'
import {ProductCard} from './components/ProductCard/ProductCard'
import {Sidebar} from './components/Sidebar/Sidebar'
import {PRODUCT_DATA, type Product} from './data/products'
import {Analytics} from '@vercel/analytics/react'
import {FloatingWhatsApp} from './components/FloatingWhatsApp/FloatingWhatsApp'
import {Dialog, DialogContent, IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import {ScrollToTop} from './components/ScrollToTop/ScrollToTop'

export const App = () => {
  // --- ТЕМА ---
  const [mode, setMode] = useState<'light' | 'dark'>(
    () => (localStorage.getItem('themeMode') as 'light' | 'dark') || 'light',
  )
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {main: mode === 'light' ? '#1a237e' : '#9fa8da'},
          background: {default: mode === 'light' ? '#f8fafd' : '#0a1929'},
        },
        shape: {borderRadius: 16},
        components: {
          MuiButton: {
            styleOverrides: {
              root: {textTransform: 'none', fontWeight: 800, borderRadius: 12},
            },
          },
        },
      }),
    [mode],
  )

  useEffect(() => localStorage.setItem('themeMode', mode), [mode])

  // --- СОСТОЯНИЕ ФИЛЬТРОВ ---
  const [search, setSearch] = useState('')
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<'diapers' | 'pants' | null>(
    null,
  )
  const [sortBy, setSortBy] = useState<'asc' | 'desc' | null>(null)
  const [openSnack, setOpenSnack] = useState(false)
  const [openImage, setOpenImage] = useState<string | null>(null)

  // Динамические границы цен
  const minAvailablePrice = Math.min(...PRODUCT_DATA.map((p) => p.price))
  const maxAvailablePrice = Math.max(...PRODUCT_DATA.map((p) => p.price))
  const [priceRange, setPriceRange] = useState<number[]>([
    minAvailablePrice,
    maxAvailablePrice,
  ])

  // --- КОРЗИНА ---
  const [cart, setCart] = useState<{product: Product; quantity: number}[]>(() =>
    JSON.parse(localStorage.getItem('cart') || '[]'),
  )
  const [isCartOpen, setIsCartOpen] = useState(false)
  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart])

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.product.id === product.id)
      return exist
        ? prev.map((i) =>
            i.product.id === product.id ? {...i, quantity: i.quantity + 1} : i,
          )
        : [...prev, {product, quantity: 1}]
    })
  }

  // --- ФИЛЬТРАЦИЯ ---
  const filteredProducts = useMemo(() => {
    let result = PRODUCT_DATA.filter((p) => {
      const mSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.brand.toLowerCase().includes(search.toLowerCase())
      // const mBrand =
      //   selectedBrands.length === 0 || selectedBrands.includes(p.brand)
      const mBrand =
        selectedBrands.length === 0 ||
        selectedBrands.some(
          (selected) => selected.toLowerCase() === p.brand.toLowerCase().trim(),
        )
      const mSize = !selectedSize || p.label === selectedSize
      const mType = !selectedType || p.type === selectedType
      const mPrice = p.price >= priceRange[0] && p.price <= priceRange[1]
      return mSearch && mBrand && mSize && mType && mPrice
    })
    if (sortBy === 'asc') result.sort((a, b) => a.price - b.price)
    if (sortBy === 'desc') result.sort((a, b) => b.price - a.price)
    return result
  }, [search, selectedBrands, selectedSize, selectedType, sortBy, priceRange])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{minHeight: '100vh', pb: 5}}>
        {/* HEADER */}
        <Header
          search={search}
          setSearch={setSearch}
          mode={mode}
          setMode={setMode}
          cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
          setIsCartOpen={() => setIsCartOpen(true)}
        />
        <Container maxWidth='xl' sx={{mt: 4}}>
          <Grid container spacing={3}>
            {/* SIDEBAR */}
            <Sidebar
              sortBy={sortBy}
              setSortBy={setSortBy}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              minAvailablePrice={minAvailablePrice}
              maxAvailablePrice={maxAvailablePrice}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
              onReset={() => {
                setSearch('')
                setSelectedBrands([])
                setSelectedSize(null)
                setSelectedType(null)
                setSortBy(null)
                setPriceRange([minAvailablePrice, maxAvailablePrice])
              }}
            />

            {/* PRODUCTS */}
            <Grid size={{xs: 12, md: 9, lg: 9.5}}>
              <Paper
                sx={{
                  p: 4,
                  mb: 3,
                  borderRadius: 5,
                  textAlign: 'center',
                  background:
                    mode === 'light'
                      ? 'linear-gradient(135deg, #e3f2fd 0%, #fff 100%)'
                      : 'linear-gradient(135deg, #132f4c 0%, #0a1929 100%)',
                }}>
                <Typography
                  variant='h4'
                  sx={{fontWeight: 900, color: 'primary.main'}}>
                  СКИДКА -15%
                </Typography>
                <Typography variant='body1'>
                  На все японские подгузники!
                </Typography>
              </Paper>

              {filteredProducts.length > 0 ? (
                <Grid container spacing={3}>
                  {filteredProducts.map((p) => (
                    <Grid size={{xs: 12, sm: 6, lg: 4}} key={p.id}>
                      <ProductCard
                        product={p}
                        addToCart={addToCart}
                        onImageClick={(url) => setOpenImage(url)}
                      />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Paper
                  sx={{
                    p: 8,
                    textAlign: 'center',
                    borderRadius: 5,
                    bgcolor: 'action.hover',
                    border: '2px dashed',
                    borderColor: 'divider',
                  }}>
                  <Typography
                    variant='h5'
                    sx={{fontWeight: 800, mb: 1, opacity: 0.6}}>
                    Ничего не нашли 🧸
                  </Typography>
                  <Typography variant='body1' sx={{mb: 3, opacity: 0.5}}>
                    Попробуйте изменить параметры поиска или сбросить фильтры
                  </Typography>
                  <Button
                    variant='contained'
                    onClick={() => {
                      setSearch('')
                      setSelectedBrands([])
                      setSelectedSize(null)
                      setSelectedType(null)
                      setSortBy(null)
                      setPriceRange([minAvailablePrice, maxAvailablePrice])
                    }}>
                    Сбросить всё
                  </Button>
                </Paper>
              )}
            </Grid>
          </Grid>
        </Container>

        {/* CART DRAWER */}
        <CardDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          setCart={setCart}
        />
        <FloatingWhatsApp />
        <Analytics />
        <ScrollToTop />
      </Box>

      {/* --- МОДАЛЬНОЕ ОКНО ДЛЯ ПРОСМОТРА КАРТИНКИ --- */}
      <Dialog
        open={Boolean(openImage)}
        onClose={() => setOpenImage(null)}
        maxWidth='md'
        PaperProps={{
          sx: {
            bgcolor: 'transparent',
            boxShadow: 'none',
            overflow: 'visible',
          },
        }}>
        <DialogContent sx={{p: 0, position: 'relative', textAlign: 'center'}}>
          <IconButton
            onClick={() => setOpenImage(null)}
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.5)',
              '&:hover': {bgcolor: 'rgba(0,0,0,0.8)'},
              zIndex: 10,
            }}>
            <CloseIcon />
          </IconButton>

          {openImage && (
            <img
              src={openImage}
              alt='Увеличенный товар'
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                borderRadius: '24px', // Скругления как у твоих карточек
                display: 'block',
              }}
            />
          )}
        </DialogContent>
      </Dialog>
      <Snackbar
        open={openSnack}
        autoHideDuration={2000}
        onClose={() => setOpenSnack(false)}>
        <Alert severity='success' sx={{width: '100%'}}>
          Товар добавлен в корзину! 🛒
        </Alert>
      </Snackbar>
    </ThemeProvider>
  )
}
