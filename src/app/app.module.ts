import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { AppRoutingModule } from "./app-routing.module";
import { provideRoutes} from '@angular/router';

import { AppComponent } from './app.component';
import { SorterTableComponent } from './components/sorter-table/sorter-table.component';
import { DataService } from './services/data.service';
import { BatchDetailsComponent } from './components/batch-details/batch-details.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SorterTableComponent,
    BatchDetailsComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2Charts
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
