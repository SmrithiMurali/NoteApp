import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NotesService } from '../services/notes.service';


@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.page.html',
  styleUrls: ['./new-note.page.scss'],
})
export class NewNotePage implements OnInit {
  private createNote : FormGroup;

  constructor(private formBuilder: FormBuilder ,public noteServ :NotesService) {
    this.createNote = this.formBuilder.group({
      noteTitle: [''],
      noteContent: [''],
    });
  }

  ngOnInit() {
  }
  saveNote(){
    this.noteServ.addNote(this.createNote.value);

  }

}
