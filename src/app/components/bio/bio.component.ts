import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';
import { DataJson } from 'src/app/models/DataJson';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  @Input() public infoData: DataJson[];
  public nowDate: Date;
  public chronometer: any;
  public objetiveData: any;

  constructor() {
    this.chronometer = interval(1000);
  }

  ngOnInit() {
    this.runChronometer();
    this.setObjetiveData();
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {

    if (changes.infoData && !changes.infoData.firstChange) {
      this.setObjetiveData();
    }
  }

  runChronometer() {
    this.chronometer.subscribe(data => {
      this.nowDate = new Date();
    });
  }

  setObjetiveData() {
    this.objetiveData = this.infoData.find(data => {
      return (data.title === 'Objetivo' || data.title === 'Objetive')
    });
  }
}
