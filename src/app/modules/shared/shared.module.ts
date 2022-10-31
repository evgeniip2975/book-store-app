import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterProductsPipe } from 'src/app/modules/shared/pipes/filter-products.pipe';
import { SortProductsPipe } from 'src/app/modules/shared/pipes/sort-products.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [FilterProductsPipe, SortProductsPipe, ProgressBarComponent,],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ],
  exports: [
    FilterProductsPipe,
    SortProductsPipe,
    ProgressBarComponent,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ],
})
export class SharedModule {}
