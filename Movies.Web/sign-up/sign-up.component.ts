import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/shared/movie.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user : Movie;

  constructor() { }

  ngOnInit() {
  }

  resetForm(form : NgForm)
  {
    // if (form != null)
    //   form.reset();
    // this.user = {
    //   FirstName: '',
    //   Surname: '',
    //   UserName: '',
    //   Password: ''
    // }

    alert("lol")
  }



}
