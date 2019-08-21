export interface Patient {
  id: number;
  name: string;
  class: string;
  species: string;
  dateOfBirth: string;
  crossBreed: boolean;
  gender: 'male' | 'female';
  warning: string;
  remarks: string;
  colour: string;
  active: boolean;
}
