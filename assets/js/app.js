tailwind.config = {
	theme: {
		extend: {
			fontFamily: {
				'serif': ['Playfair Display', 'serif'],
				'body': ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				'primary': '#2563eb',
				'primary-hover': '#1d4ed8',
				'secondary': '#7c3aed',
				'accent': '#06b6d4',
			},
			animation: {
				'fade-in-up': 'fadeInUp 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				}
			}
		}
	}
}