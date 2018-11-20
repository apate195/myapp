import { Injectable } from '@angular/core';
import * as $ from 'jquery/dist/jquery';

@Injectable()
export class CustomDropDownService {
  public dropdown:any;
  constructor() {
   
  }

  open(obj){
    this.close();
    this.dropdown = obj;
    this.dropdown.isOpen = true;
    $(document).bind('mouseup.customDrp', () => this.closeoutside(event));
  }

  close() {
    if(this.dropdown){
      this.dropdown.isOpen = false;
    }
    this.dropdown = undefined;
    this.unbibdEvent();
  }

  unbibdEvent(){
    $(document).unbind('mouseup.customDrp');
  }

  closeoutside(evt){
    if (!this.dropdown) {
      return;
    }
    var dropdownElement = this.dropdown.getDropdownElement();
    if (evt && dropdownElement
        && dropdownElement.contains(evt.target)) {
      return;
    }
    this.dropdown.isOpen = false;
    this.dropdown.updateValue && this.dropdown.updateValue();
    this.unbibdEvent();
  }
}