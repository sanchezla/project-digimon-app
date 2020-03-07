import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Digimon } from '../../../models/digimon/digimon.interface';
import { DigimonService } from '../../../services/digimon.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;

  public levels: any[] = [];
  public level: string;
  public currentLevel: string;
  public search: string;
  public digimons: Digimon[] = [];


  constructor(
    private digimonService: DigimonService,
    private authService: AuthService) {}

  ngOnInit(): void {
    this.getDigimons();

    this.digimonService.filterDigimon = this.level;
    this.digimonService.searchDigimon = this.search;

    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;
      } else {
        this.isLogin = false;
      }
    });

  }

  getDigimons(): void {
   this.digimonService.getAllDigimons().subscribe((digimon) => {
    this.digimons = digimon;

    this.digimons.forEach((digimonLevel) => {
      if (!this.levels.includes(digimonLevel.level)) {
          this.levels.push(digimonLevel.level);
      }
    });
    // console.log(this.levels);
   });
  }

  onLevelSelected($event): void {

    if (this.currentLevel) {
      this.digimonService.filterDigimon = this.currentLevel;
      console.log(this.currentLevel);
      
    } else {
      this.digimonService.filterDigimon = null;
    }

  }

  onSearch($event): void {

    if (this.search) {
      this.digimonService.searchDigimon = this.search;
      
    } else {
      this.digimonService.searchDigimon = null;
    }

  }

}
