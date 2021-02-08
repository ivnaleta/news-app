/**
 * Интерфейс для данных новостной статьи
 */
export interface Article {
  id: number;
  title: string;
  text: string;
  // здесь логичнее был бы url, но я предпочел бы чтобы приложение работало без сети
  source: number;
}