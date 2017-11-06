import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'


export interface IUser {
  name: string;
}

@Injectable()
export class UserResolveService implements Resolve<IUser> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> {
    return Observable.of({name: 'Mike'});
  }

}
