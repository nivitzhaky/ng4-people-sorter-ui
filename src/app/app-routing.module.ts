import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SorterTableComponent } from "./components/sorter-table/sorter-table.component";
import { BatchDetailsComponent } from "./components/batch-details/batch-details.component";

const routes: Routes = [
  { path: "", component: SorterTableComponent },
  { path: "details/:id", component: BatchDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }