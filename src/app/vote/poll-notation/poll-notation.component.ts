import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poll-notation',
  templateUrl: './poll-notation.component.html',
  styleUrls: ['./poll-notation.component.css']
})
export class PollNotationComponent implements OnInit {
  @Input() pollId: string;
  @Input() pollTitle: string;
  @Input() pollAuthor: string;
  constructor() {
    
  }

  ngOnInit() {
    
  }

}
