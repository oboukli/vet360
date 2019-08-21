import { Address } from './address';

export interface Client {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  initials: string;
  address: Address;
  phone: string;
  business: string;
  iban: string;
  startDate: string;
  active: boolean;
}
