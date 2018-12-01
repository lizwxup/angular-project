//跟模块会告诉angular 如何组装应用 


//引入模块
import { BrowserModule } from '@angular/platform-browser';  //浏览器解析模块
import { NgModule } from '@angular/core';  //核心模块
import { MyServicesService } from './services/my-services.service'; //引入服务
import { FormsModule } from '@angular/forms'  //引入表格
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';  //自定义模块
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { TodoDemoComponent } from './components/todo-demo/todo-demo.component';


/*@NgModule 装饰器将 AppModule 标记为 Angular 模块类（也叫 NgModule 类）。
@NgModule 接受一个元数据对象，告诉 Angular 如何编译和启动应用。*/
@NgModule({
  declarations: [ //自定义组件都需要引入
    AppComponent, HeaderComponent, NewsComponent, TodoDemoComponent
  ],
  imports: [ //当前项目依赖那些模块
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [MyServicesService],  //定义的服务
  bootstrap: [AppComponent]  //默认启动加载的模块
})

//跟模块不需要导入任何模块  因为其他模块不需要导入跟模块 但是一定要写
export class AppModule { }
