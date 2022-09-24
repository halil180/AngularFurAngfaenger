import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'secondAngular';


  buttonClicked(){
    alert("Hallo, wie geht es dir?")
  }
}
