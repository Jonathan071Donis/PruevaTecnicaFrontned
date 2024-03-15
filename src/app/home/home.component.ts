import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person.model';
import { ApiService } from '../service/api.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  people: Person[] = [];
  showModal: boolean = false;
  editMode: boolean = false; // True si estamos editando, false si estamos creando
  selectedPerson: Person = {firstName: '', lastName: '', email: ''}; // Ajusta según tu modelo

  constructor(private apiService: ApiService ) {}

  toggleModal(): void {
    this.showModal = !this.showModal;
  }

  prepareNewPerson(): void {
    this.editMode = false;
    this.selectedPerson = { firstName: '', lastName: '', email: '' }; // Asegúrate de que coincide con tu modelo
    this.toggleModal();
  }

  prepareEditPerson(person: Person): void {
    this.editMode = true;
    this.selectedPerson = person; // Guarda la persona a editar
    this.toggleModal();
  }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(): void {
    this.apiService.getPeople().subscribe({
      next: (data) => {
        this.people = data;
        console.log("La data:", this.people);
      },
      error: (error) => {
        console.error('Hubo un error al obtener las personas!', error);
      }
    });
  }

  createPerson(newPerson: Person): void {
    this.apiService.createPerson(newPerson).subscribe({
      next: (data) => {
        console.log('Persona creada exitosamente:', data);
        // Actualiza la lista de personas después de crear una nueva
        this.getPeople();
        // Cierra el modal después de crear una persona
        this.toggleModal();
      },
      error: (error) => {
        console.error('Error al crear la persona:', error);
      }
    });
  }

  editPerson( updatedPerson: Person): void {
    this.apiService.updatePerson(updatedPerson).subscribe({
      next: (data) => {
        console.log('Persona actualizada exitosamente:', data);
        // Actualiza la lista de personas después de editar
        this.getPeople();
        // Cierra el modal después de editar una persona
        this.toggleModal();
      },
      error: (error) => {
        console.error('Error al editar la persona:', error);
      }
    });
  }

  deletePerson(id: number): void {
    this.apiService.deletePerson(id).subscribe({
      next: (data) => {
        console.log('Persona eliminada exitosamente:', data);
        // Actualiza la lista de personas después de eliminar
        this.getPeople();
      },
      error: (error) => {
        console.error('Error al eliminar la persona:', error);
      }
    });
  }
}
