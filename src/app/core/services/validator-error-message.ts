interface ErrorMessage {
  [key: string]: string
}

const errorMessage: ErrorMessage = {
  required: 'This field is required', // Este campo es requerido
  pattern: 'The email must be valid', // El email debe ser válido
  minlength: 'This field must be at least than 8 characters long', // Este campo debe tener al menos 5 caracteres
}

export function validatorErrorMessage(validatorName: string): string {
  return errorMessage[validatorName] ?? 'This field is wrong'; // Este campo está errado
}
