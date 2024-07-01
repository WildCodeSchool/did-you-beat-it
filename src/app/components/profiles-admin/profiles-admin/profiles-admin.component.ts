import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profiles-admin',
  standalone: true,
  imports: [],
  templateUrl: './profiles-admin.component.html',
  styleUrl: './profiles-admin.component.scss'
})
export class ProfilesAdminComponent {

  @Input() username: string = "";
  @Input() email: string = "";

}
