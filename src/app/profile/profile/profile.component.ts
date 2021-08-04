import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/User/Shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  ids:any

  user:any
  constructor(public servic: UserService,public ar:ActivatedRoute) { }

  ngOnInit(): void {
    // this.servic.getUserProfile().subscribe(e=>{this.ids=e;console.log(e)},er=>console.log(er));

    this.servic.getalluserById(this.ar.snapshot.params["id"]).subscribe(e=>{this.user=e;console.log(e)},er=>console.log(er))

  }

}
