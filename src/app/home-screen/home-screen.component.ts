import { AfterViewInit, Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.scss',
})
export class HomeScreenComponent implements AfterViewInit {
  lottieConfig: Object;
  certificadoVisible: boolean = false;
  constructor(private dialog: MatDialog) {
    this.lottieConfig = {
      path: '/assets/abrirregalo.json', // Ruta a tu archivo Lottie
      renderer: 'svg',
      autoplay: true,
      loop: false,
    };
  }

  ngAfterViewInit(): void {
    const tl = gsap.timeline();

    // Animación de "Certificado"
    tl.fromTo(
      '#certificado',
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // Efecto de brillo antes de "de regalo"
    tl.fromTo(
      '#regalo',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.5'
    );

    // Destello sutil
    tl.fromTo(
      '.glow',
      { opacity: 0 },
      { opacity: 0.8, duration: 1.5, ease: 'power1.out' }
    );
  }
  mostrarCertificado(): void {
    this.certificadoVisible = true;
  }
  animationCreated(animation: any) {
    console.log(animation);
  }
  openModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '80%',
      height: '80%',
      panelClass: 'custom-dialog-container',
    });
  }
}
