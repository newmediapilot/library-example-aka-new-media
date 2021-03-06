import {Component} from '@angular/core';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {

  //todo: define handling of 0 libraries

  libraries = this.apiService.getLibraries();

  constructor(private apiService: ApiService) {
  }


}
