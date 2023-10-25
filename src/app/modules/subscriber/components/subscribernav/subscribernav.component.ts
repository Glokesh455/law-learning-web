import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopupService } from 'src/popup.service';


@Component({
  selector: 'app-subscribernav',
  templateUrl: './subscribernav.component.html',
  styleUrls: ['./subscribernav.component.scss']
})
export class SubscribernavComponent {
  constructor(private router: Router,private sharedService: PopupService) { }

  // You can use methods to navigate programmatically if needed
  navigateToUserModule() {
    this.router.navigate(['/subscriber']);
  }

 
  onUserCircleClick(event: Event) {
    event.preventDefault();
    // Navigate to the subscriber profile component
    this.router.navigate(['/subscriber/acSecurity']);
  }
  get showLogoutAlert(): boolean {
    return this.sharedService.showLogoutAlert;
  }
  
  onLogoutClick() {
    this.sharedService.showLogoutAlert = true;
  
    setTimeout(() => {
      this.sharedService.showLogoutAlert = false;
    }, 5000);
   }
}