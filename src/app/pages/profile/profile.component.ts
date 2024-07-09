import { Component, inject } from '@angular/core';
import { ProfileHeaderComponent } from '../../components/profile-header/profile-header.component';
import { TabNavComponent } from '../../components/tab-nav/tab-nav.component';
import { UsersService } from '../../services/users/users.service';
import { User } from '../../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileHeaderComponent, TabNavComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  private userService = inject(UsersService);
  private route = inject(ActivatedRoute);
  private router: Router = inject(Router)

  public userData?: User;

  username:string = "";
  isOnline:boolean = true;
  bio:string = "";
  bannerUrl:string = "";
  profilPictureUrl:string = "";
  slug:string = "";

  ngOnInit():void {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
    })

    this.userService.getOneBySlug(this.slug).subscribe(data => {
        this.userData = data as User;
        this.username = this.userData.username;
        this.bio = this.userData.biography;
        this.bannerUrl = this.userData.bannerPicture;
        this.profilPictureUrl = this.userData.profilePicture;
        this.slug = this.userData.slug
      }, 
      (error: HttpErrorResponse) => {
        console.log(error)
        alert("Nous rencontrons un souci technique, veuillez réessayer dans quelques minutes")
        this.router.navigate(["./home"])
    });
    
  }

}
