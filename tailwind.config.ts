module.exports = {
  theme: {
    extend: {
      // Outras extensões que você já tenha (como colors, spacing, etc.)
      
      keyframes: {
        pulsar: {
          '0%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.5)', // Cor verde do WhatsApp com transparência
          },
          '70%': {
            transform: 'scale(1.05)',
            boxShadow: '0 0 0 10px rgba(37, 211, 102, 0)', // Aumenta o tamanho da sombra e a torna transparente
          },
          '100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)', // Volta ao tamanho original
          },
        },
      },
      animation: {
        pulsar: 'pulsar 2s infinite', // Define a duração de 2s e repetição infinita
      },
    },
  },
  plugins: [],
}