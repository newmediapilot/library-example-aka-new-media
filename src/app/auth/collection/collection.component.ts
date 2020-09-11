import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../api.service';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  library;
  collection;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.library = this.apiService.getLibrary(params['libraryId']);

      this.collection = this.apiService.getCollection(params['libraryId']).pipe(map((result: Array<object>) => {
        return result.map((item) => {
          return Object.assign(item, item['book']);
        })
      }));
    });
  }

}
