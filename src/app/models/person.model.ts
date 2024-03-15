// person.model.ts
// Define la interfaz "Person" que representa la estructura de una persona en la aplicación

export interface Person {
  id?: number; // Identificador único de la persona (opcional al crear una nueva)
  firstName: string; // Nombre de la persona
  lastName: string; // Apellido de la persona
  email: string; // Correo electrónico de la persona
}
