import { Component, OnInit, Input } from '@angular/core';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})

export class AudioComponent implements OnInit {

  @Input() sound = null;
  faPlayIcon = faPlayCircle;
  faPauseIcon = faPauseCircle;

  constructor() { }

  ngOnInit(): void {
  } 

}
