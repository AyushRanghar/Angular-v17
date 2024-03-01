import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-v17';

    /**
   * Opens a modal dialog containing the given component.
   * @param component Type of the component to load into the dialog.
   * @param config Dialog configuration options.
   * @returns Reference to the newly-opened dialog.
   */
    // open<T>(component: ComponentType<T>, config?: MatDialogConfig): MatDialogRef<T> { ... }

  
}
