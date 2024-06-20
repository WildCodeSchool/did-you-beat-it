import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { HttpClient } from '@angular/common/http';
import { throwError } from "rxjs";

type updateForm = {
  username:string;
  email:string;
  biography:string,
  password:string;
  confirmPassword:string;
  };

@Component({
  selector: 'app-edit-informations',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomButtonComponent],
  templateUrl: './edit-informations.component.html',
  styleUrl: './edit-informations.component.scss'
})
export class EditInformationsComponent {

  private http: HttpClient = inject(HttpClient);

  textButton: string = 'Sauvegarder';
  uploadButton: string = 'Sauvegarder l\'image';

  update : updateForm = {
    username : '',
    email : '',
    biography: '',
    password : '',
    confirmPassword : '',
  };

  bannerImg: string = "";

  status: "initial" | "uploading" | "success" | "fail" = "initial";
  bannerFile: File | null = null;

  onFileSelected(event:any) {
    const file: File = event.target.files[0];
    if (file) {
      this.status = "initial";
      this.bannerFile = file;
    }
  }

  onUpload() {
    if (this.bannerFile) {
      const formData = new FormData();
  
      formData.append('file', this.bannerFile, this.bannerFile.name);
  
      const upload$ = this.http.post("https://httpbin.org/post", formData);
  
      this.status = 'uploading';
  
      upload$.subscribe({
        next: () => {
          this.status = 'success';
          console.log(this.status)
        },
        error: (error: any) => {
          this.status = 'fail';
          console.log(this.status)
          return throwError(() => error);
        },
      });
    }
  }

}
