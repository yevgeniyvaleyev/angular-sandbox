import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-experiments-1',
  templateUrl: './experiments-1.component.html',
  styleUrls: ['./experiments-1.component.css']
})
export class Experiments1Component implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public receivedParams
  public queryParams

  ngOnInit() {
    // Observable.combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap
    // ]).subscribe(([required, query]) => {
    //   this.receivedParams = required;
    //   this.queryParams = query;
    // })

    Observable.combineLatest([
      this.route.paramMap
    ]).switchMap(([required]) => {
      this.receivedParams = required;
      return this.route.queryParamMap;
    }).subscribe(query => {
      this.queryParams = query;
    })
  }

  redirectTest() {
    this.router.navigate(['/redirect-test'], {
      queryParams: {
        alias: 'yes'
      }
    })
  }

}
