import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss'],
})
export class CommunicationComponent {
  @Input() type?: string;
  @Input() iconName?: string;
  @Input() link?: string;
}
