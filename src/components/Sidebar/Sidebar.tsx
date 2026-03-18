import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Slider,
  Stack,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Grid' // Используй Grid2, как на твоих скриншотах

export type SidebarProps = {
  sortBy: 'asc' | 'desc' | null
  setSortBy: (v: 'asc' | 'desc' | null) => void
  priceRange: number[]
  setPriceRange: (v: number[]) => void
  minAvailablePrice: number
  maxAvailablePrice: number
  selectedType: 'diapers' | 'pants' | null
  setSelectedType: (v: 'diapers' | 'pants' | null) => void
  selectedSize: string | null
  setSelectedSize: (v: string | null) => void
  selectedBrands: string[]
  setSelectedBrands: (callback: (prev: string[]) => string[]) => void
  onReset: () => void
}

export const Sidebar = ({
  sortBy,
  setSortBy,
  priceRange,
  setPriceRange,
  minAvailablePrice,
  maxAvailablePrice,
  selectedType,
  setSelectedType,
  selectedSize,
  setSelectedSize,
  selectedBrands,
  setSelectedBrands,
  onReset,
}: SidebarProps) => {
  return (
    <Grid size={{xs: 12, md: 3, lg: 2.5}}>
      <Paper sx={{p: 3, borderRadius: 5, position: 'sticky', top: 100}}>
        <Typography variant='overline' sx={{fontWeight: 900, opacity: 0.6}}>
          Сортировка
        </Typography>
        <Stack spacing={1} sx={{mb: 3}}>
          <Button
            fullWidth
            variant={sortBy === 'asc' ? 'contained' : 'outlined'}
            onClick={() => setSortBy('asc')}>
            Дешевле
          </Button>
          <Button
            fullWidth
            variant={sortBy === 'desc' ? 'contained' : 'outlined'}
            onClick={() => setSortBy('desc')}>
            Дороже
          </Button>
        </Stack>

        <Typography variant='overline' sx={{fontWeight: 900, opacity: 0.6}}>
          Цена (₸)
        </Typography>
        <Box sx={{px: 1, mb: 3}}>
          <Slider
            value={priceRange}
            min={minAvailablePrice}
            max={maxAvailablePrice}
            step={100}
            onChange={(_, v) => setPriceRange(v as number[])}
            valueLabelDisplay='auto'
          />
          <Stack direction='row' justifyContent='space-between'>
            <Typography variant='caption' sx={{fontWeight: 800}}>
              {priceRange[0]} ₸
            </Typography>
            <Typography variant='caption' sx={{fontWeight: 800}}>
              {priceRange[1]} ₸
            </Typography>
          </Stack>
        </Box>

        <Typography variant='overline' sx={{fontWeight: 900, opacity: 0.6}}>
          Тип
        </Typography>
        <Stack direction='column' spacing={1} sx={{mb: 3}}>
          <Button
            fullWidth
            size='small'
            variant={selectedType === 'diapers' ? 'contained' : 'outlined'}
            onClick={() =>
              setSelectedType(selectedType === 'diapers' ? null : 'diapers')
            }>
            Подгузники
          </Button>
          <Button
            fullWidth
            size='small'
            variant={selectedType === 'pants' ? 'contained' : 'outlined'}
            onClick={() =>
              setSelectedType(selectedType === 'pants' ? null : 'pants')
            }>
            Трусики
          </Button>
        </Stack>

        <Typography variant='overline' sx={{fontWeight: 900, opacity: 0.6}}>
          Размер
        </Typography>
        <Grid container spacing={1} sx={{mb: 3}}>
          {['S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map((s) => (
            <Grid size={6} key={s}>
              <Button
                fullWidth
                variant={selectedSize === s ? 'contained' : 'outlined'}
                onClick={() => setSelectedSize(s === selectedSize ? null : s)}>
                {s}
              </Button>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant='overline'
          sx={{fontWeight: 900, opacity: 0.6, mt: 3, mb: 1, display: 'block'}}>
          Бренды
        </Typography>

        <Stack
          direction='column'
          spacing={0.5}
          sx={{alignItems: 'flex-start'}} // Это прижмет все элементы к левому краю
        >
          {[
            '💙 Мама знает',
            '💙 МАМА знает Standard',
            '🦈BABY SHARK',
            '🐯 TIGGY',
            '🐱 BB KITTY SENSITIVE',
            '🐱 BB KITTY PREMIUM',
            '🐧 Lolokitty',
            '❤ Jolico',
            '💛 Yoyoto',
          ].map((b) => {
            const isChecked = selectedBrands.includes(b)
            return (
              <FormControlLabel
                key={b}
                sx={{
                  margin: 0,
                  width: '100%', // Чтобы область клика была на всю ширину
                  borderRadius: '6px',
                  transition: '0.2s',
                  '&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.04)'},
                  // Выравниваем чекбокс по верхней линии текста (важно для длинных названий)
                  alignItems: 'flex-start',
                }}
                control={
                  <Checkbox
                    size='small'
                    checked={isChecked}
                    onChange={(e) =>
                      setSelectedBrands((prev) =>
                        e.target.checked
                          ? [...prev, b]
                          : prev.filter((x) => x !== b),
                      )
                    }
                    sx={{
                      p: 1, // Внутренний отступ чекбокса
                      '&.Mui-checked': {color: '#1a237e'},
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      fontWeight: isChecked ? 700 : 500,
                      color: isChecked ? '#1a237e' : '#444',
                      textAlign: 'left', // Текст всегда слева
                      lineHeight: 1.3,
                      pt: '6px', // Опускаем текст чуть ниже, чтобы он был вровень с чекбоксом
                      userSelect: 'none',
                    }}>
                    {b}
                  </Typography>
                }
              />
            )
          })}
        </Stack>

        <Button fullWidth color='error' sx={{mt: 2}} onClick={onReset}>
          Сбросить все
        </Button>
      </Paper>
    </Grid>
  )
}
