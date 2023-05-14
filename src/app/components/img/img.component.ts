import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = 'valor inicial';
  @Output() loaded = new EventEmitter<string>();

  imageDefault = '/assets/img.png';

  constructor() {
    //TODO: Before Rendering
    //TODO: NO Asyn -- One time
    console.log('contructor ', ' ===> imgValue', this.img);
  }


  ngOnChanges() {
    //TODO: before render - during 
    //TODO: changes inputs --- times
    // ? Here Changes Inputs, Buenas Practicas
    console.log('ngOnches ', ' ===> imgValue', this.img);
  }

  ngOnInit(): void {
    //TODO: before Rendering
    //TODO: Fecth - Async Code {{Here}} one-time
    console.log('ngOnInit ', ' ===> imgValue', this.img);
  }

  ngAfterViewInit(): void {
    // ? Before Rendering --- :O
    // ? handler childrens 
    console.log('AfterView ');
  }

  ngOnDestroy(): void {
    // ! delete
    console.log('ngOnDestroy')
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('Log Hijo');
    this.loaded.emit('this.img');
  }
}
