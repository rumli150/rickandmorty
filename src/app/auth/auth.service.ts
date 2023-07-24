import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
import { Subject, Subscription } from 'rxjs';
import { Route, Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {
    isLoggedIn = false
    logger = new Subject<boolean>()
    users : User[] = [
        new User('admin','admin'),
        new User('bence','123'),
    ]
    constructor(
        private router : Router
    ) { }
    
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
                this.isLoggedIn = true
                this.router.navigate(['home'])
                localStorage.setItem('userData', JSON.stringify(user))
            }
            i++
        }
        if(!end){
            console.log("sikertelen bejelentkezés")
        }
    }
}