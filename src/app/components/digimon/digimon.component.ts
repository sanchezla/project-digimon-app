import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DigimonService } from '../../services/digimon.service';
import { Digimon } from 'src/app/models/digimon/digimon.interface';

@Component({
  selector: 'app-digimon',
  templateUrl: './digimon.component.html',
  styleUrls: ['./digimon.component.scss']
})
export class DigimonComponent implements OnInit {

  // public digimons: Digimon[] = [];
  // public levelFilters: any;
  // public filterDigimon: any;


  constructor(protected digimonService: DigimonService) {}

  ngOnInit() {
    // this.getDigimons();
    // debugger;
    // this.filterDigimon = this.digimonService.filterDigimon();
    // this.digimonService.filterEvent.subscribe((data) => {
    //   debugger;
    // });
  }

  // getDigimons(): void {
  //   this.digimonService.getAllDigimons().subscribe(digimons => {
  //     // console.log(digimons);
  //     this.digimons = digimons;
  //     // this.sendDigimons.emit(digimons);

  //   });
  // }

  getDigimonsByLevel(level: string): void {
    // this.digimonService.getAllDigimonsByLevel(level).subscribe(digimons => {
    //   console.log(digimons);
    //   this.filterDigimon = digimons;
      
    //   this.sendDigimons.emit(digimons);

    // });
  }

}