import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GarageFormComponent } from '../garage-form/garage-form.component';

@Component({
  selector: 'app-add-garage-button',
  standalone: true,
  imports: [GarageFormComponent],
  templateUrl: './add-garage-button.component.html',
  styleUrl: './add-garage-button.component.css'
})

export class AddGarageButtonComponent {
add : string="הוסף מוסך";

constructor(public dialog: MatDialog) { }

  openForm(): void {
    const dialogRef = this.dialog.open(GarageFormComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Form submitted with: ', result);
      }
    });
  }
}
