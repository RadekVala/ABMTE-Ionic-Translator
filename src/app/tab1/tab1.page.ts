import { Component } from '@angular/core';
import { TranslationsService } from '../api/translations.service';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

import { HistoryRecord } from '../models/history-record';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private userInput:string = ''
  private output: string = ''

  constructor(
    private api:TranslationsService,
    private tts: TextToSpeech
  ) {}

  btnTranslateClicked(){
    // button Translate click event handler
    console.log(this.userInput);
    // debugger;

    // lets translate user input
    this.api.getTranslation(this.userInput).subscribe(
      (data) => {
        // handle data from server
        console.log(data);
        // show the translation
        this.output = data['responseData']['translatedText'];

        // save to history
        let historyRecord = new HistoryRecord(this.userInput, this.output);

        // text to speech plugin
        this.tts.speak(this.output)
        .then(() => console.log('Success'))
        .catch((reason: any) => console.log(reason));
      }
    )
    
  }

}
