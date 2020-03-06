import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Digimon } from '../../../models/digimon/digimon.interface';
import { DigimonService } from '../../../services/digimon.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public levels: any[] = [];
  public currentLevel: string;
  public digimons: Digimon[] = [];


  constructor(private digimonService: DigimonService) {}

  ngOnInit(): void {
    this.getDigimons();

    this.digimonService.filterDigimon = this.levels;

  }

  getDigimons(): void {
   this.digimonService.getAllDigimons().subscribe((digimon) => {
    this.digimons = digimon;
    
    this.digimons.forEach((digimonLevel) => {
      if (!this.levels.includes(digimonLevel.level)) {
          this.levels.push(digimonLevel.level);
      }
    });
    console.log(this.levels);
   });
  }

  onLevelSelected($event): void {
    console.log($event);
    if (this.currentLevel) {
      this.digimonService.filterDigimon = this.currentLevel;
    } else {
      this.digimonService.filterDigimon = null;
    }

    // this.digimonService.filterDigimon = $event.value;
  }

}
