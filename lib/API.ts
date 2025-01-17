export const CHAT = 'https://openai.weixin.qq.com/openapi/message';
export const TOKENIZE = 'https://openai.weixin.qq.com/openapi/nlp/tokenize';
export const NER = 'https://openai.weixin.qq.com/openapi/nlp/ner';
export const SENTIMENT = 'https://openai.weixin.qq.com/openapi/nlp/sentiment';
export const SENSITIVE = 'https://openai.weixin.qq.com/openapi/nlp/sensitive';
export const NER_PRODUCT ='https://openai.weixin.qq.com/openapi/nlp/ner-product';

export type ApiTypes = typeof api;

export const api = {
  CHAT,
  TOKENIZE,
  NER,
  SENTIMENT,
  SENSITIVE,
  NER_PRODUCT,
};
