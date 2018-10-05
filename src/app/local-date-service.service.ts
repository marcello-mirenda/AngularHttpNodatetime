import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDateServiceService {

  constructor() { }

  public toLocalDateISOString(localDate: Date): string {
    return `${this.getYear(localDate)}-${this.getMonth(localDate)}-${this.getDay(localDate)}T00:00:00`;
  }

  private getYear(localDate: Date): string {
    return localDate.getFullYear().toString().padStart(4, '0');
  }

  private getMonth(localDate: Date): string {
    return (localDate.getMonth() + 1).toString().padStart(2, '0');
  }

  private getDay(localDate: Date): string {
    return localDate.getDate().toString().padStart(2, '0');
  }
}
