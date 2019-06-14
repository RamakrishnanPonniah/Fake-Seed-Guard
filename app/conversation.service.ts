import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  private subject = new Subject<any>();

    setloggedInStatus(loggedIn: boolean) {
        this.subject.next(loggedIn);
    }

    clearMessage() {
        this.subject.next();
    }

    getloggedInStatus(): Observable<any> {
        return this.subject.asObservable();
    }
}
