export interface Service {
  title: string;
  description: string;
}

export interface TrainingPillar {
  title: string;
  description: string;
}

export interface ConsultancyStep {
  order: number;
  title: string;
  description: string;
}

export interface TransformationResult {
  id: string;
  beforeSrc: string;
  afterSrc: string;
  label: string;
}
