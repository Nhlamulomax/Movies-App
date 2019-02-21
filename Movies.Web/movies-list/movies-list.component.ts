import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/shared/movie.service';
import { Movie } from 'src/shared/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor(private service : MovieService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  //After clicking the raw, populate the form
  populateForm(mov : Movie)
  {
    this.service.formData = Object.assign({}, mov);
  }

  //On delete record/movie
  onDelete(id : number)
  {
    
    if (confirm('Are you sure to delete this Movie?'))
    {
      this.service.deleteMovie(id).subscribe(res=>{
        this.service.refreshList();
      });
    }
  }

}
