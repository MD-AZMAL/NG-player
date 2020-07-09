import { Component, OnInit } from '@angular/core';
import { SONGS } from '../../songData';

@Component({
  selector: 'app-audio-container',
  templateUrl: './audio-container.component.html',
  styleUrls: ['./audio-container.component.css']
})

export class AudioContainerComponent implements OnInit {

  songs = SONGS;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(song): void {
    this.songs
        .filter(curr => curr != song)
        .forEach(song => {song.howl.stop(); song.play = false})
    
    if(song.play) {
      song.howl.stop();
    } else {
      song.howl.play();
    }

    song.play = !song.play;
    
  }
}
 