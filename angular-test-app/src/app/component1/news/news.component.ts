import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../search.service';

//import work new
import {NEWS} from "../../shared/NEWS_INTERFACE";
import {NEWSLIST} from "../../shared/NEWSMOCKS";
import {SelectNewService} from "../../select-new.service";
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news:NEWS[]=[];
  Snew?:NEWS;

  isSerch:boolean=false;
  constructor(public selectNew:SelectNewService,public searchService:SearchService) { }
  getNewsList(){
    this.news = this.selectNew.getNews();
  }

  searchByWord()
  {
    this.news = this.searchService.searchNew('')
  }



  ngOnInit(): void {
    this.getNewsList();
  }

  OnSelect(news:NEWS){
    console.log("NewsComponent:OnSelect:"+news.title)
    this.Snew=news
    this.selectNew.SetSelectNew(news)
    this.selectNew.propety.subscribe(news=>this.Snew=news)
    console.log("NewsComponent:OnSelect:"+news.title)
    
  }


}
