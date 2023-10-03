/**
 * Represents a cat's weight.
 */
export interface Weight {
  imperial: string; // The weight in imperial units.
  metric: string; // The weight in metric units.
}

/**
 * Represents a cat's details.
 */
export interface Cats {
  weight: Weight; // The cat's weight.
  id: string; // The unique identifier of the cat.
  name: string; // The name of the cat.
  cfa_url: string; // The Cat Fanciers' Association URL.
  vetstreet_url: string; // The Vetstreet URL.
  vcahospitals_url: string; // The VCA Hospitals URL.
  temperament: string; // The cat's temperament.
  origin: string; // The cat's origin.
  country_codes: string; // The country codes where the cat is found.
  country_code: string; // The country code where the cat is from.
  description: string; // The cat's description.
  life_span: string; // The cat's lifespan.
  indoor: number; // Indicates if the cat is indoor (1 for true, 0 for false).
  lap: number; // Indicates if the cat enjoys sitting on laps (1 for true, 0 for false).
  alt_names: string; // Alternative names for the cat.
  adaptability: number; // The cat's adaptability level (0 to 5).
  affection_level: number; // The cat's affection level (0 to 5).
  child_friendly: number; // The cat's child-friendliness level (0 to 5).
  dog_friendly: number; // The cat's dog-friendliness level (0 to 5).
  energy_level: number; // The cat's energy level (0 to 5).
  grooming: number; // The cat's grooming needs level (0 to 5).
  health_issues: number; // The cat's health issues level (0 to 5).
  intelligence: number; // The cat's intelligence level (0 to 5).
  shedding_level: number; // The cat's shedding level (0 to 5).
  social_needs: number; // The cat's social needs level (0 to 5).
  stranger_friendly: number; // The cat's friendliness towards strangers level (0 to 5).
  vocalisation: number; // The cat's vocalization level (0 to 5).
  experimental: number; // Indicates if the cat is experimental (1 for true, 0 for false).
  hairless: number; // Indicates if the cat is hairless (1 for true, 0 for false).
  natural: number; // Indicates if the cat is natural (1 for true, 0 for false).
  rare: number; // Indicates if the cat is rare (1 for true, 0 for false).
  rex: number; // Indicates if the cat has a rex coat (1 for true, 0 for false).
  suppressed_tail: number; // Indicates if the cat has a suppressed tail (1 for true, 0 for false).
  short_legs: number; // Indicates if the cat has short legs (1 for true, 0 for false).
  wikipedia_url: string; // The Wikipedia URL for the cat.
  hypoallergenic: number; // Indicates if the cat is hypoallergenic (1 for true, 0 for false).
  reference_image_id: string; // The reference image ID for the cat.
  url: string; // The URL for the cat's image.
}

/**
 * Represents an image of a cat.
 */
export interface CatsImage {
  id: number; // The unique identifier of the cat's image.
  url: string; // The URL of the cat's image.
  width: number; // The width of the image.
  height: number; // The height of the image.
}
