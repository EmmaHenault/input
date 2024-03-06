import { Component, Input } from '@angular/core';
import { Developer } from '../models/developer.model';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [CommonModule,SkillsComponent],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.scss'
})
export class DeveloperComponent {
  @Input() developer: Developer = {
    lastName: 'Doe',
    firstName: 'John',
    age: 27,
    gender: 'Male',
    bio: 'Blablabla',
    skills: [
      { name: 'Angular', logo: 'logo.png', site: 'https://monsiteangular.com/' },
      { name: 'JavaScript', logo: 'logo.png', site: 'https://monsiteJS.com' }
    ]
  };
}
