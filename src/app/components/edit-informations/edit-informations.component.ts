import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { UploadProfileImagesService } from '../../services/upload-profile-images/upload-profile-images.service';
import { FileData } from '../../models/file-data.model';

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

  private service = inject(UploadProfileImagesService);

  textButton: string = 'Sauvegarder';

  update : updateForm = {
    username : '',
    email : '',
    biography: '',
    password : '',
    confirmPassword : '',
  };

  bannerImg: string = "";
  profileImg: string = "";

  status: "initial" | "uploading" | "success" | "fail" = "initial";
  bannerFile: File | null = null;
  profileFile: File | null = null;

  bannerData:FileData = new FileData(this.bannerFile, "");
  profileData:FileData = new FileData(this.profileFile, "");

  onBannerSelected(event:any) {
    this.bannerData = this.service.onFileSelected(event, this.bannerFile, this.status);
    return this.bannerData;
  }

  onUploadBanner():void {
    return this.service.onUpload(this.bannerData)
  }

  onProfileSelected(event:any) {
    this.profileData = this.service.onFileSelected(event, this.profileFile, this.status);
    return this.profileData;
  }

  onUploadProfile():void {
    return this.service.onUpload(this.profileData)
  }

}
