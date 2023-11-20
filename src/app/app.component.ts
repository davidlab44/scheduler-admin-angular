import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';  
import { OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //imports: [FormsModule, MatFormFieldModule, MatInputModule,CommonModule]
})
export class AppComponent implements OnInit{
  public appRoutes = routes;
  loginvisibility=true;

  ngOnInit(): void { 
    if(localStorage.hasOwnProperty('valor')){
      this.loginvisibility=false;
    }
  }
}
