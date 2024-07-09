import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { UploadProfileImagesService } from '../../services/upload-profile-images/upload-profile-images.service';
import { FileData } from '../../models/file-data.model';
import { UsersService } from '../../services/users/users.service';
import { User } from '../../models/user.model';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { UpdateUser } from '../../models/updateUser/update-user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

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

  private fileUploadService = inject(UploadProfileImagesService);
  private userService = inject(UsersService);
  private localStorage = inject(LocalStorageService);
  private router: Router = inject(Router);

  public userData?: User;

  textButton: string = 'Sauvegarder';

  slug?:string|null;

  updateUser : updateForm = {
    username : '',
    email : '',
    biography: '',
    password : '',
    confirmPassword : '',
  };

  messageOnUpdate: string = '';

  bannerImg: string = "";
  profileImg: string = "";

  status: "initial" | "uploading" | "success" | "fail" = "initial";
  bannerFile: File | null = null;
  profileFile: File | null = null;

  bannerData:FileData = new FileData(this.bannerFile, "");
  profileData:FileData = new FileData(this.profileFile, "");

  onBannerSelected(event:any) {
    this.bannerData = this.fileUploadService.onFileSelected(event, this.bannerFile, this.status);
    return this.bannerData;
  }

  onUploadBanner(id: number):void {
    id = this.userData?.id as number;
    return this.fileUploadService.onUpload(id, this.bannerData)
  }

  onProfileSelected(event:any) {
    this.profileData = this.fileUploadService.onFileSelected(event, this.profileFile, this.status);
    return this.profileData;
  }

  onUploadProfile(id: number):void {
    id = this.userData?.id as number;
    return this.fileUploadService.onUpload(id, this.profileData)
  }

  onSubmitForm(id: number) {
    const updateUser: UpdateUser = new UpdateUser(this.updateUser.username, this.updateUser.email, this.updateUser.biography, this.updateUser.password)
    this.userService.updateUser(id, updateUser).subscribe(data => {
      this.userData = data;
      this.localStorage.setValue('slug', this.userData?.slug as string);
      this.updateUser.password = '';
      this.updateUser.confirmPassword = '';
      this.messageOnUpdate = "Votre profil a bien été mis à jour"
    })
  }

  ngOnInit():void {
    this.slug = this.localStorage.getValue("slug")
    this.userService.getOneBySlug(this.slug!).subscribe(data => {
      this.userData = data as User;
      this.updateUser.username = this.userData.username;
      this.updateUser.email = this.userData.email;
      this.updateUser.biography = this.userData.biography;
      this.bannerImg = this.userData.bannerPicture;
      this.profileImg = this.userData.profilePicture;
    }, 
    (error: HttpErrorResponse) => {
      console.log(error)
      alert("Nous rencontrons un souci technique, veuillez réessayer dans quelques minutes")
      this.router.navigate(["./home"])
  })
  }
}
