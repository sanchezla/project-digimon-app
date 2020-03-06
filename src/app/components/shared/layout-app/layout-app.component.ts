import { Component, OnInit } from '@angular/core';
import { DigimonService } from 'src/app/services/digimon.service';


@Component({
  selector: 'app-layout-app',
  templateUrl: './layout-app.component.html',
  styleUrls: ['./layout-app.component.scss']
})
export class LayoutAppComponent implements OnInit {

  constructor(protected digimonService: DigimonService) { }

  ngOnInit() {

    // this.digimonService.filterEvent.subscribe((data) => {
    //  debugger;
    // });
  }

}
