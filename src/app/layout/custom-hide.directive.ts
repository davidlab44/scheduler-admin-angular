import { Directive } from '@angular/core';
import { ShowHideDirective } from '@angular/flex-layout';

const selector = `[fxHide.yba-min-height]`;
const inputs = ['fxHide.yba-min-height'];

// tslint:disable-next-line:use-input-property-decorator
@Directive({ selector, inputs })
export class CustomHideDirective extends ShowHideDirective {
  protected override inputs = inputs;
}
