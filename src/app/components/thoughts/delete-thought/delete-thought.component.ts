import { Component } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Thought } from '../thought';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css'],
})
export class DeleteThoughtComponent {
  thought: Thought = {
    id: 0,
    content: '',
    author: '',
    model: '',
  };

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(parseInt(id!)).subscribe((thought) => {
      this.thought = thought;
    });
  }

  excluirPensamento() {
    if (this.thought.id)
      this.service.delete(this.thought.id).subscribe(() => {
        this.router.navigate(['/listThoughts']);
      });
  }

  cancelar() {
    this.router.navigate(['/listThoughts']);
  }
}
