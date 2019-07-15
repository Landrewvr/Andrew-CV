import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataJson } from 'src/app/models/DataJson';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public infoData: DataJson[];

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit() {
   this.getData('ES');
  }

  getData(language) {
   let jsonString = '';
   if (language === 'ES') {
      jsonString = '../../../assets/dataJSON/esData.json';
    }  else if (language === 'EN') {
      jsonString = '../../../assets/dataJSON/enData.json';
    }

   this.httpClient.get(jsonString).subscribe((data: any) => {
      this.infoData = data.data;
    });
  }

}
