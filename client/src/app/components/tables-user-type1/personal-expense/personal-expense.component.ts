import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { PersonalExpensesService } from '../../../services/personal-expenses.service';
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { PersonalExpense } from '../../../models/PersonalExpense';
import { ActivatedRoute, Router } from '@angular/router';
import { MapboxService } from '../../../services/mapbox.service';

@Component({
  selector: 'app-personal-expense',
  templateUrl: './personal-expense.component.html',
  styleUrls: ['./personal-expense.component.css']
})
export class PersonalExpenseComponent implements OnInit {
  expenseDetails: PersonalExpense | null = null;
  expenseId!: number;
  placeInfo: any; // Añadido para almacenar la información del lugar

  constructor(
    private title: Title, 
    private personalExpensesService: PersonalExpensesService, 
    private mapboxService: MapboxService, // Inyección del servicio Mapbox
    @Inject(PLATFORM_ID) private platformId: Object, 
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Detalle del gasto');

    const expenseId = this.route.snapshot.paramMap.get('id');
    if (expenseId) {
      this.getExpenseDetails(expenseId);
    }
  }

  private getExpenseDetails(expenseId: string): void {
    this.personalExpensesService.getOne(expenseId).subscribe(
      (data: PersonalExpense) => {
        this.expenseDetails = data;
        this.getPlaceInfo(this.expenseDetails.Place_Expense); // Llama a la función para obtener la información del lugar
      },
      error => {
        console.error('Error al obtener los detalles del gasto', error);
      }
    );
  }

  // Método para obtener la información del lugar
  private getPlaceInfo(placeName: string): void {
    this.mapboxService.getPlaceInfo(placeName).subscribe(
      (response) => {
        if (response.features && response.features.length > 0) {
          this.placeInfo = response.features[0];
          console.log('Información del lugar:', this.placeInfo);
        }
      },
      (error) => {
        console.error('Error al obtener la información del lugar:', error);
      }
    );
  }
}