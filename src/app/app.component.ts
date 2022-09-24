import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'secondAngular';
  postTexts= [
    "Haallo, mein Name ist Frederick! Ich bin hier, um neue Freunde zu treffen",
    "Hallo zusammen, Freut mich, dass ihr hier seid",
    "Hallo mein Name ist Susanne. Ich bin 2 Jahre alt",
    "Ich esse gerne Kekse",
  ]

  images= [
    "assets/img/hamster/1.jpeg",
    "assets/img/hamster/2.jpeg",
    "assets/img/hamster/3.jpeg",
    "assets/img/hamster/4.jpeg",
  ]
  buttonClicked(){
    alert("Hallo, wie geht es dir?")
  }
}
