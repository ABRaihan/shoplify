import { color } from '../primitive-tokens/colors';
import { shadow } from '../primitive-tokens/shadow';

export const lightThemeShadow = {
  'shadow-button': `0px 1px 0px ${color.gray[8]} inset`,
  'shadow-button-hover': `0px 1px 0px ${color.gray[7]} inset`,
  'shadow-button-inset': shadow['shadow-inset-200'],
  'shadow-button-primary': `0px 1px 0px ${color.gray[15]} inset`,
  'shadow-button-primary-hover': `0px -1px 0px 1px ${color.gray[15]} inset`,
  'shadow-button-primary-success':
    '0px 1px 0px rgba(255, 255, 255, 0.48) inset',
  'shadow-button-primary-success-hover':
    '0px 1px 0px rgba(255, 255, 255, 0.48) inset',
  'shadow-button-primary-success-inset':
    '0px 2px 0px rgba(0, 0, 0, 0.60) inset',
  'shadow-button-primary-critical':
    '0px 1px 0px rgba(255, 255, 255, 0.48) inset',
  'shadow-button-primary-critical-hover':
    '0px 1px 0px rgba(255, 255, 255, 0.48) inset',
  'shadow-button-primary-critical-inset':
    '0px 2px 0px rgba(0, 0, 0, 0.60) inset',
};
