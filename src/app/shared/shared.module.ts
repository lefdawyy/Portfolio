import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { RouterModule } from '@angular/router';
import { FeatureComponent } from './components/feature/feature.component';
import { MatIconModule } from '@angular/material/icon';
import { SkillComponent } from './components/skill/skill.component';
import { ProjectComponent } from './components/project/project.component';
import { CommunicationComponent } from './components/communication/communication.component';

@NgModule({
  declarations: [SideNavComponent, CustomButtonComponent, FeatureComponent, SkillComponent, ProjectComponent, CommunicationComponent  ],
  imports: [CommonModule, RouterModule, MatIconModule],
  exports: [SideNavComponent, FeatureComponent, SkillComponent, ProjectComponent, CommunicationComponent],
})
export class SharedModule {}
