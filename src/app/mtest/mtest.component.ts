import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-mtest',
  standalone: true,
  imports: [],
  templateUrl: './mtest.component.html',
  styleUrl: './mtest.component.scss',
})
export class MtestComponent {
  constructor(private dialog: MatDialog) {}

  openModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '100%', // Ajusta el tamaño según lo necesites
      height: '100%',
      panelClass: 'modal-panel', // Aplica una clase personalizada
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Modal cerrado');
    });
  }

  closeModal() {
    // Lógica para cerrar el modal si es necesario
  }
}
