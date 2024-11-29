import { CommonModule } from '@angular/common';
import { AnimationItem } from 'lottie-web';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import gsap from 'gsap';
@Component({
  selector: 'app-gift',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './gift.component.html',
  styleUrl: './gift.component.scss',
})
export class GiftComponent implements OnInit {
  ribbons: string[] = ['horizontal', 'vertical']; // Los dos listones: horizontal y vertical
  showSurprise: boolean = false; // Bandera para mostrar el mensaje de sorpresa

  constructor() {}

  ngOnInit(): void {
    // Aquí no necesitamos hacer nada en el OnInit para los listones
  }

  options: AnimationOptions = {
    path: '/assets/animation.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  // Función para manejar las posiciones de los listones
  getRibbonStyle(type: string) {
    // Establece los retrasos para que los listones se deslicen en diferentes momentos
    const delay = type === 'horizontal' ? '0s' : '0.4s'; // El listón vertical se retrasa un poco
    return {
      animationDelay: delay, // Retraso para que los listones no se deslicen al mismo tiempo
    };
  }

  // Función que se llama cuando termina la animación
  onAnimationEnd() {
    setTimeout(() => {
      this.showSurprise = true; // Se asegura de esperar el tiempo adecuado
    }, 800); // Ajusta este tiempo a la duración total de las animaciones
  }
}
