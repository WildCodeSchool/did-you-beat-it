import { Component, Input, inject } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-profiles-admin',
  standalone: true,
  imports: [],
  templateUrl: './profiles-admin.component.html',
  styleUrl: './profiles-admin.component.scss'
})
export class ProfilesAdminComponent {

  @Input() id: number = 0;
  @Input() username: string = "";
  @Input() email: string = "";

  private userService = inject(UsersService)

  deleteUser(): void {
    this.userService.deleteUser(this.id).subscribe(data => {
      console.log(data)
    })
  }

}
