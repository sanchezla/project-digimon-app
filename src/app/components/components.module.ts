import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// routing
import { ComponentsRoutingModule } from './components-routing.module';

// components
import { HomeComponent } from './home/home.component';
import { DigimonComponent } from './digimon/digimon.component';
import { MaterialModule } from '../modules/material/material.module';
import { DigimonService } from '../services/digimon.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { SearchPipe } from '../pipes/search.pipe';

@NgModule({
    declarations: [
      HomeComponent,
      DigimonComponent,
      FilterPipe,
      SearchPipe
    ],
    imports: [
      CommonModule,
      ComponentsRoutingModule,
      FormsModule,
      MaterialModule
    ],
    providers: [DigimonService]
  })
  export class ComponentsModule { }