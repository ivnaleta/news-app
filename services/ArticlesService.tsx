import { Article } from "../models/Article";
import { range } from "lodash";
import { LoremIpsum } from "lorem-ipsum";

/**
 * News Articles Data Service
 */
export interface ArticlesService {
  /**
   * Returns news articles
   */
  getArticles(): Promise<Article[]>;

  /**
   * Register callback for articles update
   * @param cb - callback function
   * @return unregister callback function
   */
  onArticlesUpdate(cb: (articles: Article[]) => void): () => void;
}


class MockArticlesService implements ArticlesService {
  private initialArticlesCount = 5;

  async getArticles(): Promise<Article[]> {
    const titleGenerator = new  LoremIpsum({wordsPerSentence: {max: 4, min: 2}})
    const textGenerator = new LoremIpsum();
    return range(1, this.initialArticlesCount + 1).map((n) => ({
      id: n,
      title: titleGenerator.generateSentences(1),
      text: textGenerator.generateParagraphs(2),
    }));
  };

  onArticlesUpdate(cb: (articles: Article[]) => void): () => void {
    const mockUpdateDelay = 1 * 1000; // fixme
    // todo
    const timeoutId = setTimeout(() => cb([]), mockUpdateDelay);
    return () => clearTimeout(timeoutId);
  }

}

// todo вынести куда-либо
const articlesService: ArticlesService = new MockArticlesService();
export default articlesService;