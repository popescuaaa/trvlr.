const API_KEY = 'aa2197669263422d9d2b829c3fbc797f';
const topic = 'travel';

export type Article = {
    author: string;
    title: string;
    description: string;
    content: string;
}

const newsGenerator = async (date: Date) => {
    let formatedDate = date.toISOString().slice(0,10);
    let url = `https://newsapi.org/v2/everything?q=${topic}&from=${formatedDate}&sortBy=popularity&apiKey=${API_KEY}`;
    let req = new Request(url);
    let data = await fetch(req)
        .then((response) => {
           return response;
        });
    return data;
}

const newsProcessor = async () => {
    let news = await newsGenerator(new Date());
    let baseFormArticlesArray = (await news.json()).articles;
    let articles: Article[] = [];

    for (let i = 0; i < baseFormArticlesArray.length; ++i) {
      let article: Article;

      let title = baseFormArticlesArray[i].title;
      let author = baseFormArticlesArray[i].author;
      let description = baseFormArticlesArray[i].description;
      let content = baseFormArticlesArray[i].content;

      article = {
        title: title,
        description: description,
        author: author,
        content: content
      }

      articles.push(article);
    }

    return articles;
}

export {newsProcessor};