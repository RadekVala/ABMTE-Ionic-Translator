import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslationsService {

  constructor(private http: HttpClient) { }

  getTranslation(userInput:String){

  }
}
