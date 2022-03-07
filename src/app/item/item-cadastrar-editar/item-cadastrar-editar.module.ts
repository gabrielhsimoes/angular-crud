import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { ItemCadastrarEditarRoutingModule } from './item-cadastrar-editar-routing.module';
import { ItemCadastrarEditarComponent } from './item-cadastrar-editar/item-cadastrar-editar.component';


@NgModule({
  declarations: [
    ItemCadastrarEditarComponent
  ],
  imports: [
    CommonModule,
    ItemCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class ItemCadastrarEditarModule { }
