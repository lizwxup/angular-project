import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

import { HttpClient} from '@angular/common/http';
import { MyServicesService } from '../../services/my-services.service'
@Component({
  selector: 'app-todo-demo',
  templateUrl: './todo-demo.component.html',
  styleUrls: ['./todo-demo.component.css']
})
export class TodoDemoComponent implements OnInit {

  public inputValue:any;

  public listArr=[];

  public requestDataTemplate:any[];
  //官方不建议这么使用 可以使用官方推荐的
  //public storage = new MyServicesService()  
  
  constructor(private storage:MyServicesService,private http:HttpClient) {
   
    //this.storage.removeItem('todoList')

  }

  ngOnInit() {

      var todoListData = this.storage.getItem('todoList') 
      if (todoListData){
        this.listArr = this.storage.getItem('todoList')
      }
     
  
    

  }

  keyUp(e){
   
    var obj={
      name:this.inputValue,
      status:1
    }
    if (e.keyCode == 13) {

      var todoList = this.storage.getItem('todoList')
      
      if (todoList) {
        this.listArr.push(obj)
        this.storage.setItem('todoList',this.listArr)
        this.inputValue = ''
      } else {

        var arr = []

        arr.push(obj)
        this.storage.setItem('todoList',arr)
      }
      
    }  
  }

  deleteData(idx){
    this.listArr.splice(idx,1)
    this.storage.setItem('todoList',this.listArr )
  }

  changeData(index,status){
    this.listArr[index].status = status;
    this.storage.setItem('todoList',this.listArr )
  }


  //请求数据

  requestData(){

    var _this = this;

    var url="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
    this.http.get(url).subscribe((data)=>{
      _this.requestDataTemplate = data.result
      console.log( _this.requestDataTemplate)
    })
  }
}
