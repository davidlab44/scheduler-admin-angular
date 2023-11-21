import { BREAKPOINT } from '@angular/flex-layout';

export const CUSTOM_HEIGHT_BREAKPOINTS = [
  {
    alias: 'yba-min-height',
    mediaQuery: 'screen and (max-height: 660px)',
    overlapping: false,
    suffix: 'YbaMinHeight'
  }
];

export const CustomBreakPointsProvider = {
  multi: true,
  provide: BREAKPOINT,
  useValue: CUSTOM_HEIGHT_BREAKPOINTS
};