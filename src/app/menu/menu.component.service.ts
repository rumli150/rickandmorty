import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class menuComponentService {
  constructor() {}
    caretEvent = new Subject<boolean>()
}
