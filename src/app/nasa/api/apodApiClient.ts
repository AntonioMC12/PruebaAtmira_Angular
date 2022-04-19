import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApodApiClient extends HttpClient {
  constructor(handler: HttpHandler) {
    super(handler);
  }

  public override get<T>(url: string) {
    return super.get<T>(url, {
      params: {
        api_key: environment.apiKey,
        start_date: this.startDate,
      },
    });
  }

  get startDate(): string {
    let date = new Date();
    date.setDate(date.getDate() - 5);
    return date.toISOString().split('T')[0];
  }
}
