import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DataJson } from 'src/app/models/DataJson';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'expandible-list-content',
  templateUrl: './expandible-list-content.component.html',
  styleUrls: ['./expandible-list-content.component.css']
})
export class ExpandibleListContentComponent implements OnInit {

  @Input() public content: any[];
  public isObjectContent: boolean;

  constructor() { }

  ngOnInit() {
    this.load();
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {

    if (changes.content && !changes.content.firstChange) {
      this.load();
    }
  }

  load() {
    this.isObjectContent = (this.content && this.content.length &&
      this.content[0].name)
      ? true : false;
  }
}
