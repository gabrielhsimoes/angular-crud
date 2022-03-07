import { ItemService } from './../../item.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-cadastrar-editar',
  templateUrl: './item-cadastrar-editar.component.html',
  styleUrls: ['./item-cadastrar-editar.component.scss']
})
export class ItemCadastrarEditarComponent implements OnInit {

  formGroup!: FormGroup;
  item!: Item;

  constructor( 
    private formBuilder: FormBuilder, 
    private itemService: ItemService,
    private router: Router ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      nome: ["", Validators.required]
    })
  }

  // salvar(){
  //   if(this.item && this.item.id){
  //     this.itemService.cadastrar(this.formGroup.value).subscribe(
  //       itemAtualizado => {
  //         this.router.navigateByUrl("/itens");
  //       },
  //       error => {
  //         alert("Erro ao atualizar " + JSON.stringify(error))
  //       }
  //     )
  //   }else{
  //     this.itemService.cadastrar(this.formGroup.value).subscribe(
  //       itemCadastrado => {
  //         this.router.navigateByUrl("/itens");
  //       },
  //       error => {
  //         alert("Erro ao cadastrar " + JSON.stringify(error))
  //       }
  //     )
  //   }

    
  // }

}
