import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatNativeDateModule,MAT_DATE_LOCALE } from '@angular/material/core';  
import { MatTabsModule } from '@angular/material/tabs'; 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './login-form/login-form.component';
import { GenericDatePickerComponent } from './generic-date-picker/generic-date-picker.component';
import { SharedModule } from "./shared/shared.module";
import { UserDataComponent } from './user-data/user-data.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { EmailErrModalComponent } from './email-err-modal/email-err-modal.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { MatDialogModule,MAT_DIALOG_DATA } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    GenericDatePickerComponent,
    UserDataComponent,
    EmailErrModalComponent,
    ConfirmationModalComponent
  ],
  entryComponents: [
    EmailErrModalComponent,
    ConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule, 
    MatNativeDateModule,    
    MatRadioModule,      
    MatSelectModule,      
    MatSlideToggleModule, 
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatTabsModule
  ],
  exports: [      
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule, 
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatSlideToggleModule,
    MatDialogModule,
    MatTabsModule
  ],  
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
