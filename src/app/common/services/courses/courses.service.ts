import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endPoints } from '../../constants/endpoints';
import { BaseService } from '../base-service/base-service.service';
import { Course } from '../../models/course.model';
import { HttpResponse } from '../../models/response.model';
import { of } from 'rxjs';
import { COURSES_MOCK } from 'src/app/common/mocks/courses.mock';

@Injectable({
  providedIn: 'root'
})
export class CoursesService extends BaseService<Course>{
  baseUrl = endPoints.baseURL;

  constructor(private http: HttpClient) {
    const baseUrl = endPoints.baseURL;
    super(http, HttpResponse<Course>, baseUrl);
  }

  getCourses() {
    return of(COURSES_MOCK);
  }
  getInstitutions(): Observable<any> {
    const url = `${this.baseUrl}/secure/courses/institutions`;
    return this.http.get<any>(url);
  }
}
