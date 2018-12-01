import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  msg:string="这是定义属性的第三种方式"
  
  moduleData:any;
  
  constructor() { 
      this.moduleData = '这是内容信息 双向绑定'
  }

  ngOnInit() {
  }
  
  getInputValue(){
    alert(this.moduleData)
  }

  keyUpData(e){
    if (e.keyCode === 13){
      alert('aaaa')
    }
  }

}
