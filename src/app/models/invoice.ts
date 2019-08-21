export interface Invoice {
  id: number;
  number: string;
  amount: string;
  vat: string;
  clientId: number;
  patientId: number;
  date: string;
}
