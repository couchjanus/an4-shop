import {Injectable} from '@angular/core';
import {HttpService} from './http.service';

import  {Settings} from '../../config/settings';
import {User} from '../models/user';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {

    constructor(private http: HttpService) {
    }

    signIn(credentials) {
        return this.http.post(Settings.API_ENDPOINT + '/login/', credentials)
    }

    checkToken() {
        return this.http.get(Settings.API_ENDPOINT + '/login/')
    }

}
