import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../services/notes.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  note: any;

  constructor(public route: ActivatedRoute, public noteServ: NotesService, public navCtrl: NavController) { }

  ngOnInit() {
    let noteId = this.route.snapshot.paramMap.get('id');
    this.note = this.noteServ.getNote(noteId);
    console.log(this.note)
  }

  deleteNote() {
    this.noteServ.deleteNote(this.note);
    this.navCtrl.navigateBack('/notes');
  }

  editContent(){
    this.noteServ.saveToStorage();
  }


}
