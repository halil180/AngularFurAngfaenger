import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {

  constructor() { }
names = ["Marius",'fanziska','Josephin','Patrick'];
text = ["2 Jahre alt",'gräbt gerne löcher','spielt gerne','Hamsterrrad-freak'];

images= [
  "assets/img/hamster/1.jpeg",
  "assets/img/hamster/6.jpeg",
  "assets/img/hamster/7.jpeg",
  "assets/img/hamster/8.jpeg",
]
  ngOnInit(): void {
  }

}
