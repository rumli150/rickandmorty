import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
    isLoggedIn = false
    logger = new Subject<boolean>()
    users : User[] = [
        new User('admin','admin')
    ]
    constructor() { }
    
    authCheck(user : User){
        let i = 0
        let end = false
        while(i < this.users.length && !end){
            console.log("user: ",user)
            console.log("admin ",this.users[i])
            if (JSON.stringify(this.users[i]) == JSON.stringify(user)){
                end = true
                console.log("sikeres bejelentkezés")
                this.logger.next(true)
            }
            i++
        }
        if(!end){
            console.log("sikertelen bejelentkezés")
        }
    }
}