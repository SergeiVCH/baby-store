import { Box, Fab, Zoom, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const ScrollToTop = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 250, // Появится чуть позже, чтобы не мельтешить
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          // Оставляем справа, но делаем небольшие отступы для мобилок
          bottom: { xs: 20, md: 32 }, 
          right: { xs: 20, md: 32 },
          zIndex: 2000,
        }}
      >
        <Fab
          color="primary"
          size="medium"
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            '&:hover': {
              bgcolor: 'primary.dark',
              transform: 'translateY(-4px)', // Эффект парения при наведении
            },
            transition: 'all 0.3s'
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
};