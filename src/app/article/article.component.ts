import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'card container';
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Angular';
    this.link = 'https://angular.io';
    this.votes = 10;
  }

  ngOnInit(): void {
  }

  voteUp(): boolean {
    this.votes += 1;
    return false;
  }

  voteDown(): boolean {
    this.votes -= 1;
    return false;
  }

}
