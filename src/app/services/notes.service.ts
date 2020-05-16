import { Injectable } from '@angular/core';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  public notes: Note[] = [];

  constructor() { }

  loadNotes(){
    let notes = sessionStorage.getItem('notes');
    if(notes!= null)
    this.notes = JSON.parse(notes);

  }
  
  getNote(noteId){
    return this.notes.find(note => note.id === noteId);
  }

  deleteNote(note){
    let index = this.notes.indexOf(note);
    if(index > -1){
      this.notes.splice(index, 1);
      this.saveToStorage();
    }
    
    
  }

  addNote(formVal){
    // Create a unique id that is one larger than the current largest id
    let id;
    if(this.notes!= null){
      id =  Math.max(...this.notes.map(note => parseInt(note.id)), 0) + 1;
    }
     else id = 1;

    this.notes.push({
      id: id.toString(),
      title: formVal.noteTitle,
      content: formVal.noteContent
    });
  this.saveToStorage();
    
  }

  saveToStorage(){
    sessionStorage.setItem('notes',JSON.stringify(this.notes));
  }


}
