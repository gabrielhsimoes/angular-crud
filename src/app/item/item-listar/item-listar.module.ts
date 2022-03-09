import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';

import { ItemListarRoutingModule } from './item-listar-routing.module';
import { ItemListarComponent } from './item-listar/item-listar.component';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ItemListarComponent
  ],
  imports: [
    CommonModule,
    ItemListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,

    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,

    FlexLayoutModule
  ]
})
export class ItemListarModule { }
