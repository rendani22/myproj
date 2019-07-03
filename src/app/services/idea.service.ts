import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';
import {Observable} from 'rxjs';

// export interface Idea {
//   id?: string,
//   name: string,
//   surname: string
// }

export interface Users {
  id?: string,
  name: string,
  secname: string,
  Sname: string,
  Cnum1: string,
  Cnum2: string,
  email: string,
  gender: string,//Check
  age: string,
  city: string,
  province: string,//Check
  homeStructure: string,//Check
  incomePerMonth: string,//Check
  emplomentStatus: string,//Check
  ISschool: string,
  highestEdu: string,
  midicalAid: string,
  Cchoice1?:string,
  Cchoice2?:string,
  Cchoice3?:string,
  Rmodel:string,
  bankAccount: string,
  banksers: string,
  insurance: string
  nameSeta: string,
  TSTIM: string,
  Learner: string,// cheack
  PLACE: string,
  BURSA: string,
  dreamJob: string
  ManagingYourMoney: string,
  knowAboutDebt: string,
  importantToYou: string,
  OMBUDSMAN: string,
  minfo: string,
  numHH: number,
  math: string,
  hadJob: string,
  driversLicense: string,
  RSACitizen: string,
  relocate : string,
  smartPhone: string
}

@Injectable({
  providedIn: 'root'
})
export class IdeaService {
  private ideas: Observable<Users[]>;
  private ideaCollection: AngularFirestoreCollection<Users>;


  constructor(private afs: AngularFirestore) {

    this.ideaCollection = this.afs.collection<Users>('User');
    this.ideas = this.ideaCollection.snapshotChanges().pipe(
      map(actions =>{
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return{id, ...data};
        });
      })
    );
   }

   addIdea(user: Users): Promise<DocumentReference>{
     return this.ideaCollection.add(user);
   }
   
}
