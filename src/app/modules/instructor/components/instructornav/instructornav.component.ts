import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopupService } from 'src/popup.service';

@Component({
  selector: 'app-instructornav',
  templateUrl: './instructornav.component.html',
  styleUrls: ['./instructornav.component.scss']
})
export class InstructornavComponent {
  
  constructor(private router: Router, private sharedService: PopupService) { }

  onUserCircleClick(event: Event) {
    event.preventDefault();
    this.router.navigate(['/instructor/profile']);
  }

  onLogoutClick() {
    const confirmed = window.confirm('Are you sure you want to logout?');

    if (confirmed) {
      this.sharedService.showLogoutAlert = true;

      setTimeout(() => {
        this.sharedService.showLogoutAlert = false;
      }, 5000);

      this.router.navigate(['/header']);
    }
  }
}
