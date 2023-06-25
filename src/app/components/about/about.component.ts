import { Component } from '@angular/core';
import { Feature } from 'src/app/shared/models/feature';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  features: Feature[] = [
    { iconName: 'light', title: 'Graphic design', color: '#2C98F0' },
    { iconName: 'architecture', title: 'Web design', color: '#EC5453' },
    { iconName: 'data_saver_off', title: 'Software', color: '#F9BF3F' },
    {
      iconName: 'stay_primary_portrait',
      title: 'Application',
      color: '#A84CB8',
    },
  ];
}
