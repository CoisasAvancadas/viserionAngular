export interface Evento {
  id: number,
  nome: string,
  descricao: string,
  dataInicio: string,
  dataFim: string,
  atividades: {},
  ativo: boolean,
  instituicao: {
      id: number,
      nome: string,
      cnpj: string
  }
}