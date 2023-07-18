import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css'],
})
export class CreateThoughtsComponent {
  thought: Thought = {
    content: '',
    author: '',
    model: 'modelo1',
  };

  constructor(private service: ThoughtService, private router: Router) {}

  createThought() {
    this.service.create(this.thought).subscribe(() => {
      this.router.navigate(['/listThoughts']);
    });
  }

  cancel() {
    this.router.navigate(['/listThoughts']);
  }
}
