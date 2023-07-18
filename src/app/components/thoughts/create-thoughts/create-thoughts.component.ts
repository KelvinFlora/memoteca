import { Component } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css'],
})
export class CreateThoughtsComponent {
  thought: Thought = {
    id: 1,
    content: 'Aprendendo Angular',
    author: 'Dev',
    model: 'modelo1',
  };

  constructor() {}

  createThought() {
    alert('Novo pensamento criado!');
  }

  cancel() {
    alert('A ação foi cancelada!');
  }
}
