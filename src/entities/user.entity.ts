
interface IUserCreate {
  nome: string;
  email: string;
  rua: number;
  numero: number;
  bairro: string;
  complemento: string;
  cidade: string;
  estado: string;
  cep: string;
  status: STATUS;
  is_deleted: boolean;
  created: Date;
  updated: Date;
  deleted: Date;
}

interface IUserUpdate {
  id: number;
  nome?: string;
  email?: string;
  rua?: number;
  numero?: number;
  bairro?: string;
  complemento?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
  status?: STATUS;
  is_deleted?: boolean;
  created?: Date;
  updated?: Date;
  deleted?: Date;
}

enum STATUS {
  ATIVO = "ativo",
  INATIVO = "inativo"
}

export {
  IUserCreate,
  IUserUpdate
}