import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Response } from 'src/app/interface/response.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  response: Response;
  ngOnInit(): void {
    this.userService.getUsers().subscribe((results: Response) => {
      console.log(results);
      this.response = results;
    });
  }

  constructor(private userService: UserService) {}
}
