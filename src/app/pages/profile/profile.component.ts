import { Component, inject } from '@angular/core';
import { ProfileHeaderComponent } from '../../components/profile-header/profile-header.component';
import { TabNavComponent } from '../../components/tab-nav/tab-nav.component';
import { UsersService } from '../../services/users/users.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileHeaderComponent, TabNavComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  private userService = inject(UsersService);

  public userData!: User;

  username:string = "";
  isOnline:boolean = true;
  bio:string = "";
  bannerUrl:string = "";
  profilPictureUrl:string = "";

  ngOnInit():void {
      this.userService.getOneBySlug("marwa").subscribe(data => {
        this.userData = data as User;
        this.username = this.userData.username;
        this.bio = this.userData.biography;
        this.bannerUrl = this.userData.bannerPicture;
        this.profilPictureUrl = this.userData.profilePicture
        console.log(this.userData) 
      })
  }

}
