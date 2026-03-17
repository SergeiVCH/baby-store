import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Fab, Tooltip, Zoom } from '@mui/material';

export const FloatingWhatsApp = () => {
  const handleChat = () => {
    // Номер телефона в международном формате без +
    const phoneNumber = '7776060935'; 
    const message = encodeURIComponent('Здравствуйте! У меня есть вопрос по товарам в Baby Mart 🧸');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Zoom in={true} style={{ transitionDelay: '1000ms' }}>
      <Tooltip title="Написать в WhatsApp" placement="left" arrow>
        <Fab
          color="success"
          onClick={handleChat}
          sx={{
            position: 'fixed',
            bottom: { xs: 16, md: 24 }, // На мобилках чуть ниже
            right: { xs: 16, md: 24 },
            bgcolor: '#25D366',
            '&:hover': {
              bgcolor: '#128C7E',
              transform: 'scale(1.1)',
            },
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transition: 'all 0.3s ease-in-out',
            // Анимация пульсации
            animation: 'pulse 2s infinite',
            '@keyframes pulse': {
              '0%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)' },
              '70%': { boxShadow: '0 0 0 15px rgba(37, 211, 102, 0)' },
              '100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)' },
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 32 }} />
        </Fab>
      </Tooltip>
    </Zoom>
  );
};