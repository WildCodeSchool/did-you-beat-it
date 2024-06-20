import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from "rxjs";
import { FileData } from '../../models/file-data.model';

@Injectable({
  providedIn: 'root'
})
export class UploadProfileImagesService {

  constructor() { }

  private http: HttpClient = inject(HttpClient);

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

  onUpload(fileData:FileData) {
    if (fileData.uploadedFile) {
      const formData = new FormData();
  
      formData.append('file', fileData.uploadedFile, fileData.uploadedFile.name);
  
      const upload$ = this.http.post("https://httpbin.org/post", formData);
  
      fileData.status = 'uploading';
  
      upload$.subscribe({
        next: () => {
          fileData.status = 'success';
        },
        error: (error: any) => {
          fileData.status = 'fail';
          return throwError(() => error);
        },
      });
    }
  }
}
