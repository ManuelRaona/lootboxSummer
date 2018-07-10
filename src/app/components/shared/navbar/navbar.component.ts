import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(redirect: string) {
    if (redirect === 'home') {
      this.router.navigate(['/home']);
    } if (redirect === 'faq') {
      this.router.navigate(['/faq']);
    }
  }

}
