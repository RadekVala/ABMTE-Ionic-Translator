import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HistoryRecord } from '../models/history-record';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  public historyArray: HistoryRecord[] = []

  constructor(private storage: Storage) { 
    console.log('History Service created');
    
    // read data from persistent storage
    this.storage.get('history').then( (record) => {
      if(record) {
        this.historyArray = JSON.parse(record)
      }
    })
  }

  public storeRecord(record: HistoryRecord){
    this.historyArray.unshift(record);

    // store permanently 
    this.storage.set('history', JSON.stringify(this.historyArray))
  }

}
