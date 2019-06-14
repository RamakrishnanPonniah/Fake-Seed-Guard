import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-seed-activity',
  templateUrl: './seed-activity.component.html',
  styleUrls: ['./seed-activity.component.css']
})
export class SeedActivityComponent implements OnInit {
  activities=[];
  selectedSeeds=[];
  constructor(private dialogService: NbDialogService) { }
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: {
        title: 'This is a title passed to the dialog component',
      },
    });
  }
  // Original:
  // Almond_O_03
  // Almond_O_04
  // Almond_O_05
  // Almond_O_08
  
  // Fake:
  // Groundnut Seed1_F
  // Groundnut Seed2_F
  // Groundnut Seed3_F
  // Groundnut Seed4_F

  ngOnInit() {
    this.activities=[{
      name:'Almond_O_03',
      date:'05/06/2019',
      fake: false,
      original: true,
      status:false
    },
    {
      name:'Groundnut Seed1_F',
      date:'05/06/2019',
      fake: true,
      original: false,
      status:true
    },
    {
      name:'Almond_O_04',
      date:'05/06/2019',
      fake: false,
      original: true,
      status:false
    },
    {
      name:'Groundnut Seed2_F',
      date:'05/06/2019',
      fake: true,
      original: false,
      status:false
    },
    {
      name:'Almond_O_05',
      date:'05/06/2019',
      fake: false,
      original: true,
      status:false
    },
    {
      name:'Groundnut Seed3_F',
      date:'05/06/2019',
      fake: true,
      original: false,
      status:true
    },
    {
      name:'Almond_O_08',
      date:'05/06/2019',
      fake: false,
      original: true,
      status:false
    },
    {
      name:'Groundnut Seed4_F',
      date:'05/06/2019',
      fake: true,
      original: false,
      status:true
    },
    {
      name:'Seed Name 10',
      date:'05/06/2019',
      fake: false,
      original: true,
      status:false
    },
    {
      name:'Seed Name 11',
      date:'05/06/2019',
      fake: false,
      original: true,
      status:false
    },
    {
      name:'Seed Name 12',
      date:'05/06/2019',
      fake: false,
      original: true,
      status:false
    }]
  }

  selectSeed(e, name){
    if(e.target.checked)
    this.selectedSeeds.push(name);
    else
    this.selectedSeeds.splice(this.selectedSeeds.indexOf(name),1);
  }

}
