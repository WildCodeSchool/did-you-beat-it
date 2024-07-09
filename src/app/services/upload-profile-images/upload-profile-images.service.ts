import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from "rxjs";
import { FileData } from '../../models/file-data.model';

@Injectable({
  providedIn: 'root'
})
export class UploadProfileImagesService {

  constructor() { }

  private http: HttpClient = inject(HttpClient);

  private apiUrl: string = "http://localhost:8080";

  onFileSelected(event:any, uploadedFile: File|null, status: string) {
    const file: File = event.target.files[0];
    if (file) {
      uploadedFile = file;
      status = "initial";
      const fileData = new FileData(uploadedFile, status);
      return fileData;
    } else {
      return new FileData(null, "");
    }
  }

  onUpload(id: number, fileData:FileData) {
    if (fileData.uploadedFile) {
      const formData = new FormData();
  
      formData.append('file', fileData.uploadedFile, fileData.uploadedFile.name);
  
      const upload$ = this.http.put(`${this.apiUrl}/users/${id}`, formData, {
        headers: new HttpHeaders({ 'content-type': 'multipart/form-data' }),
        reportProgress: true,
        responseType: 'json',
      });
  
      fileData.status = 'uploading';
  
      upload$.subscribe({
        next: () => {
          fileData.status = 'success';
          console.log(fileData.status)
        },
        error: (error: any) => {
          fileData.status = 'fail';
          console.log(fileData.status)
          return throwError(() => error);
        },
      });
    }
  }
}
