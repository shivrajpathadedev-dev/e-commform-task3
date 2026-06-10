import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commform-task3';
@ViewChild('eform') eform!:NgForm

  onsubmit(){
    if(this.eform.invalid){
      this.eform.control.markAllAsTouched()
    }else{
      this.eform.reset()
    }
  }
}