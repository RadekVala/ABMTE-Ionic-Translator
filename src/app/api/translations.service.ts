import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslationsService {

  constructor(private http: HttpClient) { }

  public getTranslation(userInput:String){
    let url = 'https://api.mymemory.translated.net/get?q='+userInput+'&langpair=en|cs';
    return this.http.get(url);
  }
}
