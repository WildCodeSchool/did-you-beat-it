import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { EditInformationsComponent } from '../../components/edit-informations/edit-informations.component';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, EditInformationsComponent],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.scss'
})
export class ProfileEditComponent {

  private route = inject(ActivatedRoute);
  slug: string = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
    })
  }

}
