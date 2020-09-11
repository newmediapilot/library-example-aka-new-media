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
      let {libraryId} = params;
      this.loadLibrary(libraryId);
      this.loadCollection(libraryId);
    });
  }

  loadLibrary(id) {
    this.library = this.apiService.getLibrary(id);
  }

  loadCollection(id) {
    this.collection = this.apiService.getCollection(id).pipe(
      map(this.flattenCollection),
      map(this.filterCollection)
    );
  }

  flattenCollection(result) {
    return result.map((item) => {
      return Object.assign(item, item['book']);
    });
  }

  filterCollection(result) {
    return result.filter(item => !!item['totalPurchasedByLibrary'])
  }

}
