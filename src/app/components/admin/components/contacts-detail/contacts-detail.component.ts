import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AdminService } from '../../services/admin.service';
import { User } from '../../user';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.scss'],
})
export class ContactsDetailComponent implements OnInit {
  id!: number;
  user!: Observable<User>;
  constructor(
    private activeteRoute: ActivatedRoute,
    private adminService: AdminService
  ) {}
  ngOnInit(): void {
    this.activeteRoute.params.subscribe((params) => (this.id = params?.['id']));
    this.user = this.adminService.getPersonal(this.id);

    // this.user = this.activeteRoute.data.pipe(map((data) => data?.['user']));
  }
}
