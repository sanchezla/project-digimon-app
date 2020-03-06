import { Component, OnInit } from '@angular/core';
import { Digimon } from 'src/app/models/digimon/digimon.interface';
import { DigimonService } from 'src/app/services/digimon.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public digimons: Digimon[] = [];
  public filterDigimon: any;


  constructor(protected digimonService: DigimonService) {}

  ngOnInit() {

    this.digimonService.filterEvent.subscribe((data) => {

        this.getDigimons();
 
        this.filterDigimon = this.digimonService.filterDigimon;
 
    });
  }

  getDigimons(): void {

    this.digimonService.getAllDigimons().subscribe(digimons => {
      this.digimons = digimons;

    });
  }

  getDigimonsByLevel(level: string): void {
    
    this.digimonService.getAllDigimonsByLevel(level).subscribe(digimons => {
      this.filterDigimon = digimons;
    });
  }

}
