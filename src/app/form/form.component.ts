import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  list:any
  form = {
    title:'',
    body:'',
  }
  display:{}

  constructor ( private http:HttpClient) { }

  onSubmit(form: FormGroup){
    console.log(form)

    if (form.valid && form.dirty){
      this.display = form.value
      let datasToApi = form.value
      datasToApi['userName']=1
      this.postApi(datasToApi)
    }
  }
  // postApi(datasToApi: any) {
  //   throw new Error('Method not implemented.');
  // }

  ngOnInit(): void {
    this.getApi()
  }

  getApi(){
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(
      (res)=>{console.log(res), this.list = res
      },

      (err)=>{console.warn(err)}
    )
  }

  postApi(data){
    console.log({'submiting':data})
    this.http.post("https://jsonplaceholder.typicode.com/posts", data).subscribe(
      (res)=>{console.log(res)
      this.list.push(res)},
      (err)=>{console.warn(err)}
    )
  }
}
