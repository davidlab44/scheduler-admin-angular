import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import * as WebFont from 'webfontloader';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { ContainerDirective } from './container.directive';
import { ShareComponent } from './share/share.component';
import { UserListComponent } from './user-list/user-list.component';
import { BranchesComponent } from './branches/branches.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginComponent } from './login/login.component';
//import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
//grid responsive
import { FlexLayoutModule } from '@angular/flex-layout';
import { TestComponent } from './test-shell/test.component';
import { CustomBreakPointsProvider, CUSTOM_HEIGHT_BREAKPOINTS } from './layout/breakpoints';
import { CustomHideDirective } from './layout/custom-hide.directive';

WebFont.load({
  google: {
    families: ['Material Icons'],
  },
});

@NgModule({
  declarations: [AppComponent, ContainerDirective, ShareComponent, UserListComponent,BranchesComponent,AppComponent, CustomHideDirective, TestComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    BrowserModule, 
    FlexLayoutModule.withConfig({}, CUSTOM_HEIGHT_BREAKPOINTS ),
    //CommonModule,
    FormsModule,
    HttpClientModule,
    LoginComponent,
    MatSlideToggleModule,
    RouterModule.forRoot(routes, {}),
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
