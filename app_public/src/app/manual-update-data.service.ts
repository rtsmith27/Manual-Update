import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Result, Update } from './result';

@Injectable({
  providedIn: 'root'
})
export class ManualUpdateDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  // ?Do I need to use this section to get my Results?
  public getResults(): Promise<Result[]> {
    // const maxDistance: number = 20000;
    const url: string = `${this.apiBaseUrl}/results`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Result[])
      .catch(this.handleError);
  }

  public getResultById(resultId: string): Promise<Result> {
    const url: string = `${this.apiBaseUrl}/results/${resultId}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Result)
      .catch(this.handleError);
  }
  

  public addUpdateByResultId(resultId: string, formData: Update): Promise<Update> {
    const url: string = `${this.apiBaseUrl}/results/${resultId}/updates`;
    return this.http
      .post(url, formData)
      .toPromise()
      .then(response => response as Update)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

}