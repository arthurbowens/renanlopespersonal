import { ConsultancyStep, Service, TrainingPillar, TransformationResult } from '../../../core/models/landing.model';

const RENAN_WA = 'https://wa.me/5514997856750';
const t = (msg: string) => encodeURIComponent(msg);

/** Links do WhatsApp do Renan (todos os CTAs abrem o chat direto) */
export const RENAN_WHATSAPP = {
  falarComigo: `${RENAN_WA}?text=${t('Olá! Vi o site do Renan e quero falar com você.')}`,
  planoPersonalizado: `${RENAN_WA}?text=${t('Olá! Quero começar meu plano personalizado — vim pelo site.')}`,
  proximoResultado: `${RENAN_WA}?text=${t('Olá! Vi os resultados no site e quero ser o próximo caso.')}`,
  acompanhamento: `${RENAN_WA}?text=${t('Olá! Quero iniciar meu acompanhamento — vim pelo site.')}`,
  comecarAgora: `${RENAN_WA}?text=${t('Olá! Vi o site do Renan e quero começar agora!')}`,
  djiri: `${RENAN_WA}?text=${t(
    'Olá, Renan! Vi no site a loja parceira (Djiri) e quero garantir meu desconto na compra. Pode me orientar como funciona?'
  )}`
} as const;

export const FOCUS_PILLS: string[] = [
  'Definição',
  'Ganho de massa',
  'Glúteos e pernas (feminino)',
  'Estética + performance'
];

export const BENEFITS: TrainingPillar[] = [
  {
    title: '🔥 Perder gordura sem perder massa',
    description: 'Seca com estratégia, mantendo definição e performance.'
  },
  {
    title: '⚡ Ganhar condicionamento de verdade',
    description: 'Mais energia no dia a dia, corrida, treino — sem viver cansado.'
  },
  {
    title: '💪 Construir um shape estético e funcional',
    description: 'Um corpo forte, proporcional e que funciona na vida real.'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Protocolo para competição',
    description: 'Planejamento completo para palco, com progressão estratégica.'
  },
  {
    title: 'Transformação lifestyle',
    description: 'Treinos alinhados com rotina, estética e saúde.'
  },
  {
    title: 'Treino feminino (glúteos, pernas e definição)',
    description: 'Foco em membros inferiores, simetria e evolução consistente.'
  },
  {
    title: 'Treino híbrido estratégico',
    description: 'Musculação + cardio (corrida/bike) sem conflito de objetivo.'
  }
];

export const TRANSFORMATION_RESULTS: TransformationResult[] = [
  {
    id: '1',
    beforeSrc: '/resultado1antes.jpeg',
    afterSrc: '/resultado1depois.jpeg',
    label: 'Transformação 1'
  },
  {
    id: '2',
    beforeSrc: '/resultado2antes.jpeg',
    afterSrc: '/resultado2depois.jpeg',
    label: 'Transformação 2'
  },
  {
    id: '3',
    beforeSrc: '/resultado3antes.jpeg',
    afterSrc: '/resultado3depois.jpeg',
    label: 'Transformação 3'
  }
];

export const CONSULTANCY_STEPS: ConsultancyStep[] = [
  {
    order: 1,
    title: 'Diagnóstico e plano personalizado',
    description:
      'Entendo seu objetivo, rotina e limitações — e monto um plano que você consegue seguir.'
  },
  {
    order: 2,
    title: 'Execução com clareza',
    description: 'Você sabe exatamente o que fazer, como fazer e como evoluir.'
  },
  {
    order: 3,
    title: 'Acompanhamento real (a cada 15 dias)',
    description: 'Ajustes com base no seu resultado — nada de ficar parado no mesmo treino.'
  },
  {
    order: 4,
    title: 'Suporte contínuo',
    description: 'Correções, dúvidas e adaptações para manter sua evolução constante.'
  }
];
