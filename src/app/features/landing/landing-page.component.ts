import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ACHIEVEMENTS, SERVICES, TRAINING_PILLARS } from './data/landing-content';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {
  readonly achievements = ACHIEVEMENTS;
  readonly trainingPillars = TRAINING_PILLARS;
  readonly services = SERVICES;
  readonly currentYear = new Date().getFullYear();
}
