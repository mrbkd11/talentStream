import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MaterialModule } from '../material.module';
import { PagesRoutes } from './pages.routing.module';
// icons
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { AppDashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppDashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    NgApexchartsModule,
    RouterModule.forChild(PagesRoutes),
    TablerIconsModule.pick(TablerIcons),
    NgApexchartsModule,
  ],
  exports: [TablerIconsModule],
})
export class PagesModule {}
