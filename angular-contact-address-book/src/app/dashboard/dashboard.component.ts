import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
  providers: [ContactService]
})
export class DashboardComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {

   }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
      this.contactService.getJSON().subscribe(data => {
        console.log(data)
    });
  }
}
