import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [CommonModule, CustomButtonComponent, RouterLink],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent {
   @Input() bannerUrl : string = 'https://images.unsplash.com/photo-1590610092461-8e6237d6bd48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fG5hcnV0b3xlbnwwfHwwfHx8MA%3D%3D';
   @Input() profilPictureUrl : string = 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpZGVybWFufGVufDB8fDB8fHww';
   @Input() username : string = '';
   @Input() isOnline : boolean = false;
   @Input() bio : string = '';
}
