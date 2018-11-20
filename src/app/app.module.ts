import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MultiSelectModule} from 'primeng/multiselect';
import { CustomDropDownService } from './app-service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MultiSelectModule,
    BrowserAnimationsModule,
    DropdownModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CustomDropDownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
