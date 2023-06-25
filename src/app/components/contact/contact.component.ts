import { Component } from '@angular/core';
import { Communication } from 'src/app/shared/models/communiacation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  communications: Communication[] = [
    {
      type: 'jehadlefdawy@gmail.com',
      iconName: 'email',
      link: '../contact',
    },
    {
      type: 'LinkedIn',
      iconName: 'dataset_linked',
      link: 'https://www.linkedin.com/in/jehad-lefdawi-44743923a/',
    },
  ];
}
