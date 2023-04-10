function getCategories() {
  const categories = [
    {
      title: "Диваны", url: "#",
      subCategories: [
        { title: "Прямые", url: "#" },
        { title: "Угловые", url: "#" },
        { title: "Модульные", url: "#" },
      ]
    },
    {
      title: "Кресла", url: "#",
      subCategories: [
        { title: "Мягкие", url: "#" },
        { title: "Кресла-кровати", url: "#" },
      ]
    },
    {
      title: "Кровати", url: "#",
      subCategories: [
        { title: "Односпальные", url: "#" },
        { title: "Двуспальные", url: "#" },
      ]
    },
    {
      title: "Тумбы и\xA0комоды", url: "#",
      subCategories: [
        { title: "Тумбы", url: "#" },
        { title: "Комоды", url: "#" },
      ]
    },
    {
      title: "Стулья", url: "#",
      subCategories: [
        { title: "Деревянные", url: "#" },
        { title: "Металлокаркас", url: "#" },
      ]
    },
  ]

  categories.forEach((category, index) => {
    category.id = index + 1;
  })

  return categories;
}
