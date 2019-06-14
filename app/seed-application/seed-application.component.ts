import { Component, OnInit, TemplateRef } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { HttpClient } from "@angular/common/http";
import {NbDialogService,NbDialogRef} from "@nebular/theme";
import { map } from "rxjs/operators";
import {
  PredictionAPIClient,
  PredictionAPIModels,
  PredictionAPIMappers
} from "@azure/cognitiveservices-customvision-prediction";
import * as process from "process";

(window as any).process = process;

@Component({
  selector: "app-seed-application",
  templateUrl: "./seed-application.component.html",
  styleUrls: ["./seed-application.component.css"]
})
export class SeedApplicationComponent implements OnInit {
  urls = [];
  originalData = "";
  fakeData = "";
  guageVal = 0;
  decisionVal = "";

  private imageSrc: Blob;

  loading = false;

  guagePercentage = "rotate(10deg)";
  filesToUpload: Array<File> = [];
  predictionKey = "6cd2b7b137f4419880844fd916cef75f";
  endPoint = "https://centralindia.api.cognitive.microsoft.com";

  publishIterationName = "SeedGuard1";
  //url="http://127.0.0.1:8887/Seed.html";
  constructor(private dialogService:NbDialogService, private sanitizer: DomSanitizer, private http: HttpClient) {}

  ngOnInit() {}
  
  report(dialog: NbDialogRef<any>, submitted: TemplateRef<any>) {
    dialog.close();
    this.dialogService.open(submitted, {
      context: {
        title: "This is a title passed to the dialog component"
      }
    });
  }
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: {
        title: "This is a title passed to the dialog component"
      }
    });
  }

  verifyImage(formData) {
    const predictor = new PredictionAPIClient(
      this.predictionKey,
      this.endPoint
    );
    predictor
      .classifyImage(
        "eb74cf04-eb8e-4eca-824a-368e4683d2f0",
        this.publishIterationName,
        this.imageSrc
      )
      .then((result: any) => {
        result = result.predictions;
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
        console.log("files", result);
        setTimeout(() => {
          if (this.originalData > this.fakeData) {
            this.guagePercentage =
              "rotate(" + parseInt(this.originalData) * 1.8 + "deg)";
            this.guageVal = parseInt(this.originalData);
            this.decisionVal = "GENUINE";
          } else {
            this.guagePercentage =
              "rotate(" + parseInt(this.fakeData) * 1.8 + "deg)";
            this.guageVal = parseInt(this.fakeData);
            this.decisionVal = "FAKE";
          }
          (this.loading = false), 3000;
        });
      });
  }

  private makeblob(dataURL) {
    const BASE64_MARKER = ";base64,";
    const parts = dataURL.split(BASE64_MARKER);
    const contentType = parts[0].split(":")[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  }

  upload() {
    this.loading = true;
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);

    for (let i = 0; i < files.length; i++) {
      formData.append("uploads[]", files[i], files[i]["name"]);
    }

    this.verifyImage(formData);
    console.log("form data variable :   " + formData.toString());
    // const formData: any = new FormData();
    // const files: Array<File> = this.filesToUpload;
    // console.log(files);

    // for(let i =0; i < files.length; i++){
    //     formData.append("uploads[]", files[i], files[i]['name']);
    // }
    // console.log('form data variable :   '+ formData.toString());
    // this.http.post('http://localhost:3000/predict', formData)
    //     .subscribe((result:any) => {
    //       for (let i = 0; i < result.length; i++) {
    //         if (result[i].tagName == "Original") {
    //           this.originalData = (result[i].probability * 100.0).toFixed(2);
    //           console.log("org", this.originalData);
    //         }
    //         if (result[i].tagName == "Fake") {
    //           this.fakeData = (result[i].probability * 100.0).toFixed(2);
    //           console.log("fak", this.fakeData);
    //         }
    //               }
    //       console.log('files', result
    //       )})
    //       if(this.originalData > this.fakeData){
    //         this.guageVal = parseInt(this.originalData) ;
    //         this.decisionVal = "Original";
    //       }else{
    //         this.guageVal = parseInt(this.fakeData) ;
    //         this.decisionVal = "Fake";
    //       }
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = this.makeblob(reader.result);
  }

  fileChangeEvent(e: any) {
    this.urls = [];
    this.filesToUpload = <Array<File>>e.target.files;
    if (e.target.files && e.target.files[0]) {
      for (let file of e.target.files) {
        var reader = new FileReader();

        reader.readAsDataURL(file); // read file as data url

        reader.onload = (event: any) => {
          // called once readAsDataURL is completed
          this.urls.push(event.target.result);
        };
      }
    }
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert("invalid format");
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);

    this.guageVal = 0;
    this.guagePercentage = "rotate(0deg)";
    this.decisionVal = "";
    //this.product.photo = fi
    //this.product.photo = fileInput.target.files[0]['name'];
  }
}
