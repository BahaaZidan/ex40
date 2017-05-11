import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poll-notation',
  templateUrl: './poll-notation.component.html',
  styleUrls: ['./poll-notation.component.css']
})
export class PollNotationComponent implements OnInit {
  @Input() pollName: string;
  @Input() pollLink: string;
  constructor() { }

  ngOnInit() {
  }

}
