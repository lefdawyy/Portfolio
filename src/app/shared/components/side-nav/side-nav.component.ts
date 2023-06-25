import { Component } from '@angular/core';
import { Profile } from '../../models/profile';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  readonly profile: Profile;
  constructor() {
    this.profile = {
      image: 'assets/images/profileImage.jpg',
      name: 'Jehad Lefdawy',
      country: 'Palestine',
      jobTitle: 'Software Engineer',
      links: [
        { title: 'Home', url: '../home' },
        { title: 'About', url: '../about' },
        { title: 'Skilles', url: '../skills' },
        { title: 'Education', url: '../education' },
        { title: 'Projects', url: '../projects' },
        { title: 'Contact', url: '../contact' },
      ],
    } as Profile;
  }
}
