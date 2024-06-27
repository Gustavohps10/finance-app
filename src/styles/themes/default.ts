import { darkTheme } from './dark'
import { lightTheme } from './light'

export const defaultTheme = {
  fontSize: {
    xs: '1.2rem', // 12px
    sm: '1.4rem', // 14px
    md: '1.6rem', // 16px
    lg: '1.8rem', // 18px
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    circle: '50%',
  },
} as const

export const theme = {
  light: {
    color: lightTheme,
    ...defaultTheme,
  },
  dark: {
    color: darkTheme,
    ...defaultTheme,
  },
}
