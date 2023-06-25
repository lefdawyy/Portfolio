import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent {
  @Input() iconName?: string;
  @Input() title?: string;
  @Input() color?: string;
}
