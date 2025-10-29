// choice.model.ts

export interface CarOption {
  description: string;
  lapsOrTime: string;
  details?: string; // Pour les spécificités comme "Mai à Oct. uniquement"
}

export interface Circuit {
  id: string;
  name: string;
  location: string;
  description: string; // Pour noter le nombre de tours et les km si besoin
  mapEmbedUrl: string; // L'URL pour l'iframe Google Maps
  imagePath: string; // Chemin vers la photo
  options: CarOption[];
}

export interface PlayerChoice {
  playerName: 'Joueur 1' | 'Joueur 2';
  circuitId: string;
  selectedOption: CarOption;
  isConfirmed: boolean;
}

const CIRCUIT_1_OPTIONS: CarOption[] = [
  {
    description: 'Porsche Cayman S',
    lapsOrTime: '2 tours',
  },
  {
    description: 'Alpine A110',
    lapsOrTime: '2 tours',
  },
  {
    description: 'Lotus Elise 250 Cup',
    lapsOrTime: '2 tours',
  },
  {
    description: 'Lotus Elise',
    lapsOrTime: '15 min (8 à 10 tours)',
  },
  {
    description: 'Caterham Super Seven',
    lapsOrTime: '15 min (8 à 10 tours)',
    details: 'Mai à Oct. uniquement',
  },
];

const CIRCUIT_1: Circuit = {
  id: 'circuit-eia',
  name: 'EIA Circuits Auto',
  location: 'Pont-l\'Évêque (14)',
  description: 'Ouvert depuis 30 ans, le circuit de Pont l’Évêque est un lieu unique pour vous initier au pilotage, perfectionner votre conduite ou vous reposer dans un cadre se prêtant aux loisirs et à la détente. Situé à proximité de Caen et à environ deux heures de voiture de Paris, ce circuit automobile bénéficie du savoir-faire d’équipes mobilisées 11 mois sur 12 pour vous offrir la meilleure expérience de pilotage dans un environnement exceptionnel.',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58903.643559018754!2d0.13789003426572538!3d49.272647897734004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e1cde6bda495bb%3A0xb1c66b46b3827711!2sEIA%20Circuits%20Auto%20et%20Karting%20de%20Pont%20l&#39;Ev%C3%AAque!5e0!3m2!1sfr!2sfr!4v1761761413843!5m2!1sfr!2sfr',
  imagePath: 'assets/images/circuit.jpg',
  options: CIRCUIT_1_OPTIONS,
};

// Exemple pour le Circuit 2 (avec une seule option, pour simplifier)
const CIRCUIT_2: Circuit = {
  id: 'prestige-collection',
  name: 'Prestige & Collection',
  location: 'Beaupréau-en-Mauges (49)',
  description: 'Vivez l’expérience de conduire un véhicule atypique : conduite simple, sensation garantie dans ce cabriolet à 3 roues de 180ch. Depuis notre ouverture, il a su faire l’unanimité. Cette conduite de 3km vient sublimé la visite. Pourquoi hésiter, venez l’essayer et le découvrir.',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.672958742548!2d-0.9995536551139454!3d47.23467657158752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ef96e62ff335%3A0x69542a983c749020!2sPrestige%20et%20Collection!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr',
  imagePath: 'assets/images/vanderhall.png',
  options: [{
    description: 'Vanderhall Venice',
    lapsOrTime: '3 km',
  }],
};

export const ALL_CIRCUITS = [CIRCUIT_1, CIRCUIT_2];