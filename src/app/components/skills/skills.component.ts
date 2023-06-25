import { Component } from '@angular/core';
import { Skill } from 'src/app/shared/models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      iconName: 'source-control',
      title: 'Git',
      description: 'Version control system for tracking changes in code',
      color: '#2C98F0',
    },
    {
      iconName: 'cloud',
      title: 'AWS',
      description: 'Cloud computing platform providing various services',
      color: '#EC5453',
    },
    {
      iconName: 'coffee',
      title: 'Java',
      description:
        'Object-oriented programming language for building applications',
      color: '#F9BF3F',
    },
    {
      iconName: 'connect_without_contact',
      title: 'ExpressJS',
      description: 'Web application framework for Node.js and Nest.js',
      color: '#A84CB8',
    },
    {
      iconName: 'code',
      title: 'Angular',
      description: 'TypeScript-based framework for building web applications',
      color: '#2FA499',
    },
    {
      iconName: 'storage',
      title: 'SQL',
      description: 'Standard language for managing relational databases',
      color: '#4054B2',
    },
  ];
}
