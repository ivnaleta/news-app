/**
 * Маппинг id моковых статей на изображения
 * Добавлено потому я предпочел бы чтобы не было изображений от сети
 */
const articleIdToImageSourceMapping: {[id: number]: any} =  {
  1: require('../../assets/mock-article-images/1.jpg'),
  2: require('../../assets/mock-article-images/2.jpg'),
  3: require('../../assets/mock-article-images/3.jpg'),
  4: require('../../assets/mock-article-images/4.jpg'),
  5: require('../../assets/mock-article-images/5.jpg'),
  6: require('../../assets/mock-article-images/6.jpg'),
}


export default articleIdToImageSourceMapping;