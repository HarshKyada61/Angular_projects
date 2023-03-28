import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();



  @ViewChild('serverContentInput', {static:true}) serverContentInput: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(NameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: NameInput.value , serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(NameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: NameInput.value , serverContent: this.serverContentInput.nativeElement.value
    })
  }

}
