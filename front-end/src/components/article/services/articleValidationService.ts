import { Article } from "../../landing/services/newsService";

const articleFilter = (article: Article): boolean => {
    return article.content.includes('travel');
}

const artcileValidator = (articles: Article[]) => {
    return articles.filter(article => articleFilter(article));
}

export {artcileValidator};