import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Users, IdeaService} from 'src/app/services/idea.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user : Users = {
    name: "",
    secname: '',
    Sname: '',
    Cnum1: '',
    Cnum2: '',
    email: '',
    gender: '',//Check
    age: '',
    city: '',
    province: '',//Check
    homeStructure: '',//Check
    incomePerMonth: '',//Check
    emplomentStatus: '',//Check
    ISschool: '',
    highestEdu: '',
    midicalAid: '',
    Cchoice1:'',
    Cchoice2:'',
    Cchoice3:'',
    Rmodel:'',
    bankAccount: '',
    banksers: '',
    insurance: '',
    nameSeta: '',
    TSTIM: '',
    Learner: '',
    PLACE: '',
    BURSA:'',
    dreamJob: '',
    ManagingYourMoney: '',
    knowAboutDebt: '',
    importantToYou: '',
    OMBUDSMAN:'',
    minfo: '',
    numHH: 0 ,
    math: '',
    hadJob: '',
    driversLicense: '',
    RSACitizen: '',
    relocate :'',
    smartPhone: '',
  };


  private ideas: Observable<Users[]>;

  constructor(private ideaService: IdeaService, private toastCtrl : ToastController) {}

  ngOnInit(){

  }

  addIdea(){
    this.ideaService.addIdea(this.user).then(() =>{
      this.showToast(this.user.name + "Added");
    }, err => {
      this.showToast('This was a problem');
    });

  }

  showToast(msg){
      this.toastCtrl.create({
        message: msg,
        duration: 1500
      }).then(toast => toast.present());
  }
}
