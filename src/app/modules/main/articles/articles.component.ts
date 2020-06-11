import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';

import { ArticlesService } from "./articles.service";
import { Article } from "./class/article-model";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit, OnDestroy {
  
  @ViewChild('indexForm', { static: true }) form: NgForm;
  articles: Article[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  text = '';
  showMessage = false;
  uploadedFiles: Array <File> = [];
  rename: string;
  actualname: string;

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.loadDatatable();
  }

    ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

 
 getAllArticulos(){
  this.articleService.getAllArticles().subscribe(data=>{
    const aux: any = data;
    if (aux.resp) {
      this.articles=aux.articulos;
      this.dtTrigger.next();
    }
  });

 }
  

  uploadArticle(){
    console.log(this.uploadedFiles);
    let formData = new FormData();
    for ( let i = 0; i < this.uploadedFiles.length; i++) {
      formData.append('uploads[]', this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    if (this.uploadedFiles.length > 0) {
      const name = this.uploadedFiles[0].name;
      const extension = name.substring(this.uploadedFiles[0].name.length- 3).toLowerCase();
      if (extension !== 'pdf') {
        this.showMessage = true;
        this.text = 'Only articles in pdf';
      } else {
        this.showMessage = false;
        this.articleService.uploadArticle(name, formData).subscribe();
       this.getAllArticulos();
      }
     }
  }

  deleteArtilce(name){
    this.articleService.deleteArticle(name).subscribe();
    this.getAllArticulos();

  }
   
  sendName(name: string){
     this.rename = name.substr(0,name.length-4);
     this.actualname = this.rename;
     
  }

  renameArticle(){
    this.actualname = this.actualname + '.pdf';
    this.rename = this.rename + '.pdf';
    this.articleService.updateArticle(this.actualname, this.rename).subscribe();
    this.getAllArticulos();
  }

   loadDatatable(){
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      retrieve: true,
      destroy: true
    };
    this.getAllArticulos();
    
  }
  

 }
  
  

  

