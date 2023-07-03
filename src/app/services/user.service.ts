import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../interface/user.interface';
import { Response } from '../interface/response.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiURL: string = 'https://randomuser.me/api';
  constructor(private http: HttpClient) {}

  getUsers(size: number = 10): Observable<any> {
    return this.http
      .get<Response>(`${this.apiURL}/?results=${size}`)
      .pipe(map(this.processResponse));
  }

  getUser(uuid: string): Observable<any> {
    return this.http
      .get<Response>(`${this.apiURL}/?uuid=${uuid}`)
      .pipe(map(this.processResponse));
  }

  private processResponse(response: Response): Response {
    return {
      info: { ...response.info },
      results: response.results.map(
        (user: any) =>
          <User>{
            uuid: user.login.uuid,
            firstName: user.name.first,
            lastName: user.name.last,
            email: user.email,
            username: user.login.username,
            gender: user.gender,
            address: `${user.location.street.number} ${user.location.street.name} ${user.location.city} ${user.location.country}`,
            dateOfBirth: user.dob.date,
            phone: user.phone,
            imageUrl: user.picture.medium,
            coordinate: {
              latitude: user.location.coordinates.latitude,
              longitude: user.location.coordinates.longitude,
            },
          }
      ),
    };
  }
}
