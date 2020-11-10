import { Component, OnDestroy, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent implements OnDestroy, OnInit, OnChanges {

 @Input() inputValue = 'Default Value';
 @Output() btnClick = new EventEmitter();

 constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(simpleChanges: SimpleChanges):void{
    console.log(simpleChanges);
    
  }

  // inputKeyupHandler(target: HTMLInputElement): void{
  //   this.inputValue = target.value;
  // }

  btnClickHandler(value: KeyboardEvent, inputEl: HTMLInputElement):void {
    console.log('btn was clicked!', value);
    console.log('input value is', inputEl.value);

    this.btnClick.emit({ inputEl });
  }

  ngOnDestroy():void{
    console.log('name input component was destroyed!');
    
  }
}

