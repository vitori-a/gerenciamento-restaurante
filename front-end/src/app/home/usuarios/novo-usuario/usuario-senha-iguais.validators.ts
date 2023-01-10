import { FormGroup } from '@angular/forms';
export function usuarioSenhaIguaisValidators(formGroup: FormGroup) {
  const email = formGroup.get('email')?.value ?? '';
  const senha = formGroup.get('senha')?.value ?? '';

  if (email.trim() + senha.trim()) {
    return email != senha ? null : { senhaIgualUsuario: true };
  } else {
    return null;
  }
}
