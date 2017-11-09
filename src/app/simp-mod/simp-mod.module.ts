import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MathService} from "../math.service";
import {SimpComponent} from "../simp/simp.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SimpComponent],
  providers: [MathService],
  exports: [SimpComponent]
})
export class SimpModModule { }
