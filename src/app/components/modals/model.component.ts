import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  constructor(private toastr: ToastrService) { }
  baseImgUrl: string = 'https://image.tmdb.org/t/p/w500';

@Input() selectedMovie={title:'',vote_count:'',release_date:'',id:0,poster_path:''};
  ngOnInit(): void {
  }
  showSuccess() {
    this.toastr.success('Reserve Successfully', 'done');
  }
 

}
