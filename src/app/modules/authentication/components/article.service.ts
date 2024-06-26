import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Article } from '../../../common/models/article.model';
import { map } from 'rxjs/operators';
import { endPoints } from 'src/app/common/constants/endpoints';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiUrl = endPoints.baseURL + '/secure/articles/review';
  private articles: Article[] = [];
  private selectedArticle: Article | undefined;
  setItem: any;
  private approvalResponse: any;
  officeViewerSrc: SafeResourceUrl | string | undefined;
  

  constructor(private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {
   
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.data.content),
      tap((articles) => {
        this.articles = articles;
        console.log('Articles from server:', articles);
      }),
      catchError((error) => {
        console.error('Error fetching articles:', error);
        return throwError(error);
      })
    );
  }
  getArticle(articleId: number): Observable<Article> {
    const articleUrl = `${this.apiUrl}/${articleId}`;
    return this.http.get<Article>(articleUrl);
  }
  // Add this method to get the file URL
  getArticleFileUrl(articleId: number): string {
    return `${this.apiUrl}/${articleId}/file`;
  }
  setSelectedArticle(articleId: number): void {
    this.selectedArticle = this.articles.find((article) => article.id === articleId);
  }

  getSelectedArticle(): Article | undefined {
    return this.selectedArticle;
  }
  // Inside ArticleService
  getFileContent(fileId: number | string): Observable<string> {
    const fileContentUrl = `${endPoints.baseURL}/files/${fileId}`;
    return this.http.get<string>(fileContentUrl).pipe(
      catchError((error) => {
        console.error('Error fetching file content:', error);
        return throwError(error);
      })
    );
  }
setApprovalResponse(response: any): void {
  this.approvalResponse = response;
}
getApprovalResponse(): any {
  return this.approvalResponse;
}


}

