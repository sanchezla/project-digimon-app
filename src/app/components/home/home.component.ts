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
  public filterDigimon: string;
  public searchDigimon: string;


  constructor(protected digimonService: DigimonService) {}

  ngOnInit() {

    this.getDigimons();

    this.digimonService.filterEvent.subscribe((data) => {
        // console.log(data);
        this.filterDigimon = this.digimonService.filterDigimon;
    });

    this.digimonService.digimonEvent.subscribe((data) => {
      // console.log(data);
      this.searchDigimon = this.digimonService.searchDigimon;
    });
  }

  getDigimons(): void {

    this.digimonService.getAllDigimons().subscribe(digimons => {
      this.digimons = digimons;
      console.log(digimons);
      

    });
  }

  getDigimonsByLevel(level: string): void {

    this.digimonService.getAllDigimonsByLevel(level).subscribe(digimons => {
      this.filterDigimon = digimons.level;
    });
  }

}
