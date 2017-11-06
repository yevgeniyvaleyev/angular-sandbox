import { IUser } from './../user-resolve.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resolve-test',
  templateUrl: './resolve-test.component.html',
  styleUrls: ['./resolve-test.component.css']
})
export class ResolveTestComponent implements OnInit {

  user: IUser;// just for test

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.data.subscribe(({user}) => {
      this.user = user;
    })
  }

}
