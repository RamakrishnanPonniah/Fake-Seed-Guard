import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";


@Component({
  selector: 'app-seed-application',
  templateUrl: './seed-application.component.html',
  styleUrls: ['./seed-application.component.css']
})
export class SeedApplicationComponent implements OnInit {
  urls = [];
  originalData = "";
  fakeData = "";
  guageVal = 0;
  decisionVal = "";
filesToUpload: Array<File> = [];
  //url="http://127.0.0.1:8887/Seed.html";
  constructor(private sanitizer: DomSanitizer, private http : HttpClient) { }

  ngOnInit() {
  }

upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);

    for(let i =0; i < files.length; i++){
        formData.append("uploads[]", files[i], files[i]['name']);
    }
    console.log('form data variable :   '+ formData.toString());
    this.http.post('http://localhost:3000/predict', formData)
        .subscribe((result:any) => {
          for (let i = 0; i < result.length; i++) {
            if (result[i].tagName == "Original") {
              this.originalData = (result[i].probability * 100.0).toFixed(2);
              console.log("org", this.originalData);
            }
            if (result[i].tagName == "Fake") {
              this.fakeData = (result[i].probability * 100.0).toFixed(2);
              console.log("fak", this.fakeData);
            }
                  }
          console.log('files', result
          )})
          if(this.originalData > this.fakeData){
            this.guageVal = parseInt(this.originalData) ;
            this.decisionVal = "Original";
          }else{
            this.guageVal = parseInt(this.fakeData) ;
            this.decisionVal = "Fake";
          }
}

fileChangeEvent(event : any) {
  this.urls = [];
    this.filesToUpload = <Array<File>>event.target.files;
    if (event.target.files && event.target.files[0]) {
      for(let file of event.target.files){
        var reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]); // read file as data url

        reader.onload = (event : any) => { // called once readAsDataURL is completed
        this.urls.push(event.target.result);
      } 
      }
      
    }
    //this.product.photo = fileInput.target.files[0]['name'];
}
}
