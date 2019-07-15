import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DataJson } from 'src/app/models/DataJson';

@Component({
  selector: 'app-related-info',
  templateUrl: './related-info.component.html',
  styleUrls: ['./related-info.component.css']
})
export class RelatedInfoComponent implements OnInit {

  @Input() public infoData: DataJson[];
  public contentArray: DataJson[];

  constructor() { }

  ngOnInit() {
    this.setContentArray();
  }
  
  // tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {

    if (changes.infoData && !changes.infoData.firstChange) {
      this.setContentArray();
    }
  }
  setContentArray() {
    this.contentArray = this.infoData;
    const objetiveIndex = this.contentArray.findIndex(data => {
      return (data.title === 'Objetivo' || data.title === 'Objetive');
    });

    this.contentArray.splice(objetiveIndex, 1);
  }

}
