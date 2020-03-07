import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// routing
import { ComponentsRoutingModule } from './components-routing.module';

// components
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../modules/material/material.module';
import { FilterPipe } from '../pipes/filter.pipe';
import { SearchPipe } from '../pipes/search.pipe';

@NgModule({
    declarations: [
      HomeComponent,
      FilterPipe,
      SearchPipe
    ],
    imports: [
      CommonModule,
      ComponentsRoutingModule,
      FormsModule,
      MaterialModule
    ],
    providers: []
  })
  export class ComponentsModule { }