export interface CountryCardProps {
  name: { common: string };
  population: number;
  region: string;
  capital?: string[];
  flags: { svg: string };
  cca3: string;
}
