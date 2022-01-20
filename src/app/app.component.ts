import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  display = 'show';
  currentname="Akella Pranav 😎😎"

  onToggle(){
    this.display='edit';
  }

  AcceptEvent(val: string){
    this.display = val;
  }
}
