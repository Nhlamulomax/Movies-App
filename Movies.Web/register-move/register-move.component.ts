import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { MovieService } from 'src/shared/movie.service';

@Component({
  selector: 'app-register-move',
  templateUrl: './register-move.component.html',
  styleUrls: ['./register-move.component.css']
})
export class RegisterMoveComponent implements OnInit {

  constructor(private service : MovieService) { }
  profileForm = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(''),
    rate: new FormControl('')
  });
  ngOnInit() {
    this.resetForm();
   
  }

  resetForm(form? : NgForm)
  {
    if(form != null)
    form.reset();
    this.service.formData = {
      MoviesID : null,
      FullName : '',
      Category : '',
      Rating : 0
    }
  }

  onSubmit(form: NgForm) {
    // TODO: Use EventEmitter with form value
    if(form.value.MoviesID == null)           //Check if the record/movie exists
    {
      if(this.profileForm.value.name){
        if(this.profileForm.value.category){
          if(this.profileForm.value.category)
          {
            this.insertRecord(form);
            alert("The new movie is entered!")
          } else
          {
            alert("Please provide a rate")
  
          }
        } else
        {
          alert("Please provide a category")
  
        }
        console.warn(this.profileForm.value.name);
      console.warn(this.profileForm.value.rate);
  
      console.warn(this.profileForm.value.category);
      } else{
          alert("Please provide a name")
      }
      
    }else{
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm)
  {
    //Inserted successfully
    this.service.postMovie(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
}

  updateRecord(form: NgForm)
  {
    //Updated successfully
    this.service.putMovie(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }

}
