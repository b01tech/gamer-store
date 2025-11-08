interface Produto {
  id: number;
  nome: string;
  descricao: string;
  marca: string;
  modelo: string;
  imagem: string;
  nota: number;
  videoReview: string;
  tags: string[];
  especificacoes: Especificacoes;
}
export default Produto;
