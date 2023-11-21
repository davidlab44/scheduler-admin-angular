import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-shell',
  styleUrls : [
    'test.component.css'
  ],
  template: `
    <div class="bounds">
    
      <div class="content" 
           fxLayout="row" 
           fxLayout.xs="column" 
           fxFlexFill
           fxHide.yba-min-height>
           
          <div fxFlex="15" class="sec1" fxFlex.xs="55">
              first-section
          </div>
          <div fxFlex="30" class="sec2" >
              second-section
          </div>
          <div fxFlex="55" class="sec3" fxFlex.xs="15">
              third-section
          </div>
          
      </div>
      
    </div>
  `
})
export class TestComponent implements OnInit {
  formButtonXs = true;

  constructor() { }


  ngOnInit() {  }


}
      




