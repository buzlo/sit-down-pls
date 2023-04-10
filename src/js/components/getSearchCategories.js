function getSearchCategories() {
  const searchCategories = [
    {
      title: "Диваны",
    },
    {
      title: "Комоды",
    },
    {
      title: "Кресла",
    },
    {
      title: "Стулья",
    },
    {
      title: "Пуфы",
    },
    {
      title: "Столы",
    },
    {
      title: "Кровати",
    },
    {
      title: "Аксессуары",
    },
    {
      title: "Тумбы",
    },
  ]

  searchCategories.forEach((category, index) => {
    category.id = index + 1;
  })

  return searchCategories;
}
