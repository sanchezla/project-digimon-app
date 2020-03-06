import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Digimon } from '../../../models/digimon/digimon.interface';
import { DigimonService } from '../../../services/digimon.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public filter: any;
  public levels: any[] = [];
  public currentLevel: any;
  public digimons: Digimon[] = [];

  @Output() searchData: EventEmitter<any> = new EventEmitter();
  @Output() levelSelected: EventEmitter<any> = new EventEmitter();


  constructor(private digimonService: DigimonService) {}

  ngOnInit(): void {
    this.getDigimons();
    // debugger;
    this.digimonService.filterDigimon = this.levels;
    // console.log(this.levels);
  }

  getDigimons(): void {
   this.digimonService.getAllDigimons().subscribe((digimon) => {
    this.digimons = digimon;
    // console.log(digimon);
    
    this.digimons.forEach((digimonLevel) => {
      if (!this.levels.includes(digimonLevel.level)) {
          this.levels.push(digimonLevel.level);
      }
    });
    console.log(this.levels);
   });
  }


  sendSearchDigimon($event) {
    this.searchData.emit(this.filter);
    // console.log($event);

  }

  setDigimonLevel() {
    this.digimons.forEach((digimon) => {
      if (!this.levels.includes(digimon.level)) {
        this.levels.push(digimon.level);
      }
    });
  }

  onLevelSelected($event): void {
    console.log($event);
    
    // if (this.currentLevel) {
    //   this.levelSelected.emit(this.currentLevel);
    //   console.log(this.currentLevel);
    // } else {
    //   this.levelSelected.emit('');
    // }

    this.digimonService.filterDigimon = this.currentLevel;
  }

}
