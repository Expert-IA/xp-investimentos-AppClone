import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamListType = {
  Login: undefined;
  HomeTab: undefined;

  // Tabs (navegação inferior)
  Feed: NavigatorScreenParams<FeedStackParamList>;
  Cofrinho: NavigatorScreenParams<CofrinhoParamList>;
  Carteira: NavigatorScreenParams<InvestimentoStackParamListType>;

  Conta: undefined;
};
  
export type InvestimentoStackParamListType = {
  Investimento: undefined;
  InvestimentoDetails: {
    nome: string;
    empresa: string;
    precoAtual: number;
    variacao: number;
    variacaoPercentual: number;
    acoes: number;
    precoMedio: number;
    valorTotal: number;
    resultado: number;
    resultadoPercentual: number;
    chartData: {
      open: number;
      close: number;
      high: number;
      low: number;
    }[];
  };
  InvestimentoBuy: {
    nome: string;
    precoAtual: number;
  };
  InvestimentoSell: {
    nome: string;
    precoAtual: number;
    acoesDisponiveis: number;
    precoMedio: number;
    acoes: number;
  };
  InvestimentoSearch: {
    initialFilter: string
  }
};



export type FeedStackParamList = {
  Home: undefined;
  EducaArticleDetail: {
    title: string;
    subtitle: string;
    content: string;
    imageSource: any;
    source?: string;
  }
}
export type CofrinhoParamList = {
    Cofre: undefined;
    Cadastro: undefined;
CofrinhoDetails: {
  objetivo: string;
  saldoAtual: number;
  mostrarSaldo: boolean;
  meta: number;
  progresso: number; // de 0 a 1
  descricaoMeta: string;
  dadosGrafico: number[];
  labelsGrafico: string[];
  resumo: {
    saldoInicial: number;
    entradas: number;
    saidas: number;
    diferenca: number;
  };
};

  };