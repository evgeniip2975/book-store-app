import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { detective } from './mock-data-store/detective';
import { horror } from './mock-data-store/horror';


@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {detective, horror}
  }
}
