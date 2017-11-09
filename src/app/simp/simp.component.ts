import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simp',
  template: `
    <p>
      Component from Module
    </p>
  `,
  styleUrls: ['./simp.component.css']
})
export class SimpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
