import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'app-input-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-signals.component.html',
  styleUrl: './input-signals.component.scss',
})
export class InputSignalsComponent {
  // @Input() currentPage: number = 1;
  // @Input() total: number = 0;
  // @Input() limit: number = 20;

  // Input signals
  // We don't necessarily need to provide initial value
  currentPage = input.required<number>();
  total = input.required<number>();
  limit = input.required<number>();

  @Output() changePage = new EventEmitter<number>();

  // Now pages is a computed signal unlike just a array before.
  // This will change if any of the input signal property changes
  // and calculates the pages.
  pages = computed(() => {
    const pagesCount = Math.ceil(this.total() / this.limit());
    return this.range(1, pagesCount);
  });

  // Here we wrote the logic only on the ngOnInit.
  // If there is any change in input we would have to use setters of ngOnChanges()

  // ngOnInit(): void {
  //   const pagesCount = Math.ceil(this.total / this.limit);
  //   this.pages = this.range(1, pagesCount);
  // }

  range(start: number, end: number): number[] {
    return [...Array(end - start).keys()].map((el) => el + start);
  }
}
