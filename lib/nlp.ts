import { ResponseNER, ResponseSENTIMENT, ResponseSENSITIVE } from './response';
import { transferNLP } from './util';
import { QueryData } from './query';

function tokenize(query: QueryData) {
  return transferNLP('TOKENIZE', query);
}

function ner(query: QueryData) {
  return transferNLP('NER', query) as Promise<ResponseNER>;
}

function sentiment(query: QueryData) {
  return transferNLP('SENTIMENT', query) as Promise<ResponseSENTIMENT>;
}

function sensitive(query: QueryData) {
  return transferNLP('SENSITIVE', query) as Promise<ResponseSENSITIVE>;
}

function nerProduct(query: QueryData) {
  return transferNLP('NER_PRODUCT', query) as Promise<{
    preprocessed_text: string;
    entities: {
      product?: [];
    };
  }>;
}

export const nlp = { tokenize, ner, sentiment, sensitive, nerProduct };
