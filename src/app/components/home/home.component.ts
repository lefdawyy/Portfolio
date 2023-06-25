import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  downloadCV(): void {
    const cvFilePath = '/assets/pdf-files/Jehad_Lefdawi_Resume.pdf';
    const cvFileName = 'cv.pdf';

    const downloadLink = document.createElement('a');
    downloadLink.href = cvFilePath;
    downloadLink.download = cvFileName;

    downloadLink.click();
  }
}
