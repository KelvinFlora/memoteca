import { Component } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent {
  listThought = [
    {
      content: 'Passo informações para o componente filho',
      author: 'Componente pai',
      model: 'modelo3',
    },
    {
      content: 'Minha propriedade é decorada com @Input()',
      author: 'Componente filho',
      model: 'modelo3',
    },
  ];
}
