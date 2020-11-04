import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  myName = 's'
  user1 = "John"
  list :any
  erroMessage = ''

  constructor(private http: HttpClient) { }

  checker(){
    console.log(this.myName)
  }

  ngOnInit(): void {
    console.log(this.user1)
    this.getApiPost()
  }
  getApiPost(){
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(
      (res)=>{console.log(res)
      this.list = res},

      (err)=>{console.warn(err),
       this.erroMessage= "something went wrong"
      }
  
    )
  }

}
