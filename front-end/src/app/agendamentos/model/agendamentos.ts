export interface Agendamentos {
  _id: string;
  idUsuario: string;
  idEvento: string;
  nomeUsuario?: string;
  nomeEvento?: string;
  data?: Date;
  hora?: string;
}
