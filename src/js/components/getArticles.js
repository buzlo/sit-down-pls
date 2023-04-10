function getArticles() {
  const articles = [
    {
      title: "И\xA0нет сомнений, что сделанные на\xA0базе интернет-аналитики выводы представляют собой не\xA0что иное?", url: "#",
    },
    {
      title: "Как принято считать, некоторые особенности приносят несомненную пользу обществу?", url: "#",
    },
    {
      title: "Ясность нашей позиции очевидна: укрепление и\xA0развитие внутренней структуры?", url: "#",
    },
    {
      title: "Прежде всего, консультация с широким активом однозначно фиксирует необходимость распределения?", url: "#",
    },
    {
      title: "Как принято считать, некоторые особенности приносят несомненную пользу обществу?", url: "#",
    },
  ]

  articles.forEach((article, index) => {
    article.id = index + 1;
  })

  return articles;
}
