import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Input()sideBarStatus:boolean = false
 
  @Output() homeToggled = new EventEmitter<boolean>()
  homeStatus:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  hometoggle(){

    
this.homeStatus=!this.homeStatus
this.homeToggled.emit(this.homeStatus)
  }
}
