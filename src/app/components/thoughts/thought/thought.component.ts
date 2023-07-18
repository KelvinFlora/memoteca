import { Component, Input } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css'],
})
export class ThoughtComponent {
  @Input() thought: Thought = {
    id: 0,
    content: 'I love Angular!',
    author: 'Kelvin',
    model: 'modelo3',
  };

  constructor() {}

  widthThought(): string {
    if (this.thought.content.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
