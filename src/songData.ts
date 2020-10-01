import {Howl} from 'howler';

export const SONGS = [
    {
        howl: new Howl({
            src: ['assets/audio/audio1.mp3'],
            autoplay: false,
            loop: true,
            volume: 0.3,
            }),
        name: 'Audio 1',
        img: 'assets/image/img1.png',
        play: false
    },
    {
        howl: new Howl({
            src: ['assets/audio/audio2.mp3'],
            autoplay: false,
            loop: true,
            volume: 0.3,
            }),
        name: 'Audio 2',
        img: 'assets/image/img2.png',
        play: false
    },
    {
        howl: new Howl({
            src: ['assets/audio/audio3.mp3'],
            autoplay: false,
            loop: true,
            volume: 0.3,
            }),
        name: 'Audio 3',
        img: 'assets/image/img3.png',
        play: false
    },
    {
        howl: new Howl({
            src: ['assets/audio/audio4.mp3'],
            autoplay: false,
            loop: true,
            volume: 0.3,
            }),
        name: 'Audio 4',
        img: 'assets/image/img4.jpg',
        play: false
    }
]