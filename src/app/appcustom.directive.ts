import { Directive,ElementRef } from '@angular/core';
import { getRenderedText } from '@angular/core/src/render3';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Directive({
  selector: '[appAppcustom]'
})
export class AppcustomDirective {

  constructor(e1:ElementRef) { 
    e1.nativeElement.style.backgroundColor="green";
  }

}
