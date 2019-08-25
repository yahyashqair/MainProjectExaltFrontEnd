import {Injectable} from '@angular/core';
import {Maven, Xde} from './get-xdes.service';
import {HttpClient} from '@angular/common/http';
import {ServerService} from './server/server.service';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  getAllFeatureUrl = 'http://localhost:8080/feature/all/?';
  getAllFeatureUrl = 'http://localhost:8080/feature/server/';
  featureURL = 'http://localhost:8080/feature/';
  searchURL = 'http://localhost:8080/feature/search/';

  id = 1;

  GetFeatures(pagenumber: number, pagesize: number) {
    return this.http.get<FeaturePage>(this.getAllFeatureUrl +this.serverService.getCurrentServer()+"/" +
      + 'pagenumber=' + pagenumber + '&' + 'size=' + pagesize);
  }

  getFeature(id: number) {
    return this.http.get<Feature>(this.featureURL + id);
  }

  searchFunction(qstring: String) {
    return this.http.get<Feature[]>(this.searchURL + qstring);
  }

  constructor(private http: HttpClient,private serverService : ServerService) {
  }
}

export interface Feature {
  id: number;
  maven: Maven;
  name: String;
  xdeSet: FeatureXde[];
}

export interface FeatureXde {
  id: number;
  xde: Xde;
  typeOfRelation: String;
}

export interface FeaturePage {
  content: Feature[];
  totalElements: number;
  totalPages: number;
  number: number;
}
