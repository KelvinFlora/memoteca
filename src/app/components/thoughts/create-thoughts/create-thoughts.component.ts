import { Component } from '@angular/core';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css'],
})
export class CreateThoughtsComponent {
  thought = {
    id: '1',
    content: 'Aprendendo Angular',
    author: 'Dev',
    model: '',
  };

  constructor() {}

  createThought() {
    alert('Novo pensamento criado!');
  }

  cancel() {
    alert('A ação foi cancelada!');
  }
}
