import { NotFoundError } from './../common/not-found';
import { AppError } from './../common/app-error';
import { DataService } from './../data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bober',
  templateUrl: './bober.component.html',
  styleUrls: ['./bober.component.css']
})
export class BoberComponent implements OnInit {

  @Output() change = new EventEmitter()

  test = 1;
  list = [
    {v: 1},
    {v: 2}
  ]

  methods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'}
  ]

  public data

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAll().subscribe(data => this.data = data);

    this.dataService.getErr().subscribe(
      (data) => this.data = data,
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          console.log('Err - 404');
        } else {
          throw error;
        }
      });

    this.dataService.getErr().subscribe((data) => this.data = data);
  }

  onClick() {
    this.change.emit({value: 1});
  }

  onSubmit(f) {
    console.log(f)
  }

  onChange(data) {
    console.log(data);
  }

}
