// admin.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ArticleApiResponse, Article } from './admin.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {

  private apiUrl = 'http://192.168.1.42:8080/api/v1';
  approvalResponse: any;

  constructor(private http: HttpClient) {}

  getApprovedArticles(): Observable<ArticleApiResponse> {
    return this.http.get<ArticleApiResponse>(`${this.apiUrl}/secure/articles/review`);
  }

  getArticleDetails(articleId: number): Observable<Article> {
    const articleDetailsUrl = `${this.apiUrl}/articles/${articleId}`;
    return this.http.get<Article>(articleDetailsUrl).pipe(
      catchError((error) => {
        console.error('Error fetching article details:', error);
        return throwError(error);
      })
    );
  }

  getFileContent(fileId: number | string): Observable<string> {
    const fileContentUrl = `${this.apiUrl}/files/${fileId}`;
    return this.http.get<string>(fileContentUrl).pipe(
      catchError((error) => {
        console.error('Error fetching file content:', error);
        return throwError(error);
      })
    );
  }

  // setApprovalResponse(response: any): void {
  //   // this.approvalResponse = response;
  //   console.log('Setting approval response:', response);
    
  // }

  setApprovalResponse(response: any): void {
    this.approvalResponse = response;
    console.log('Setting approval response:', response);
  }
  
  getApprovalResponse(): any {
    return this.approvalResponse;
  }
}


























