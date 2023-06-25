import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  @Input() iconName?: string;
  @Input() title?: string;
  @Input() description?: string;
  @Input() color?: string;
}
