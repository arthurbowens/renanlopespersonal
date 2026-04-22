import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  BENEFITS,
  CONSULTANCY_STEPS,
  FOCUS_PILLS,
  RENAN_WHATSAPP,
  SERVICES,
  TRANSFORMATION_RESULTS
} from './data/landing-content';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {
  readonly wa = RENAN_WHATSAPP;
  readonly focusPills = FOCUS_PILLS;
  readonly benefits = BENEFITS;
  readonly services = SERVICES;
  readonly transformationResults = TRANSFORMATION_RESULTS;
  readonly consultancySteps = CONSULTANCY_STEPS;
  readonly currentYear = new Date().getFullYear();
}
