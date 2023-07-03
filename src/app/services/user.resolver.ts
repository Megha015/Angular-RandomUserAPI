import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Response } from '../interface/response.interface';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class UserResolver {
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    _: RouterStateSnapshot
  ): Observable<Response> {
    return this.userService.getUser(route.paramMap.get('uuid')!);
  }
}
