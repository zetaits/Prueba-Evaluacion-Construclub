import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  // Inyectamos el HttpClient para hacer peticiones web
  http = inject(HttpClient);

  // URL de la API de Spring Boot
  private apiUrl = 'http://localhost:8080/api/productos';

  products: any[] = []; // Array para guardar los productos
  loading = true;
  error: string | null = null; // Para guardar mensajes de error

  ngOnInit() {
    this.fetchProducts();
  }

  // Método para obtener los productos del backend
  fetchProducts() {
    this.loading = true;
    this.error = null;

    // Hacemos la petición GET a nuestra API.
    // .subscribe() es cómo "escuchamos" la respuesta.
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        // La petición ha funcionado.
        this.products = data;
        this.loading = false; // Dejamos de mostrar "Cargando..."
      },
      error: (err) => {
        // La petición ha fallado (ej: backend apagado).
        console.error('Error al obtener productos:', err);
        this.error = 'No se pudieron cargar los productos.';
        this.loading = false; // Dejamos de mostrar "Cargando..."
      }
    });
  }
}
