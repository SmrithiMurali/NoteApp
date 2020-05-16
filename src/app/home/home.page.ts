import { Component,OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NewNotePage } from '../new-note/new-note.page';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  notesList:any = [];

  constructor(public navCtrl: NavController,public noteServ:NotesService) {}
  ngOnInit(){
    this.noteServ.loadNotes();
  }
  
  addNewNote(){
    this.navCtrl.navigateForward('/new-note');
  }

}
