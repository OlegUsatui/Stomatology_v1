import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() public text = 'Some text';
  @Input() public type?: string;
  @Output() private onClick: EventEmitter<any> = new EventEmitter<any>();

  public handleClick(): void {
    this.onClick.emit();
  }
}
