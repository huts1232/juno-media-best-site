export const faq = {
  eyebrow: "Veelgestelde vragen",
  heading: "Wat je wilt weten voordat je begint",
  items: [
    {
      id: "faq-welke-dienst",
      question: "Welke dienst past bij mijn bedrijf?",
      answer:
        "Dat hoef je vooraf niet te weten. Je vertelt waar je team de meeste uren aan kwijt is. Wij koppelen dat aan een agent, een automatisering, een dashboard, een webshop of een app.",
    },
    {
      id: "faq-kosten",
      question: "Wat kost een project?",
      // TODO: vanafprijzen per dienst invullen zodra die vaststaan.
      answer:
        "Dat hangt af van de omvang. Je krijgt een voorstel met wat we bouwen en wat het kost, voordat je iets tekent. TODO: vanafprijzen per dienst invullen.",
    },
    {
      id: "faq-doorlooptijd",
      question: "Hoe snel staat het live?",
      // TODO: gemiddelde doorlooptijd per dienst verifiëren.
      answer:
        "Dat spreken we vooraf af in het voorstel, met een vaste opleverdatum. TODO: doorlooptijd per dienst invullen.",
    },
    {
      id: "faq-bestaande-software",
      question: "Werkt het met de software die ik al gebruik?",
      answer:
        "Meestal wel. We koppelen aan je bestaande systemen, zoals je boekhouding, mailbox, planning of webshop. Lukt een koppeling niet, dan hoor je dat voordat we beginnen.",
    },
    {
      id: "faq-data",
      question: "Wat gebeurt er met mijn data?",
      // TODO: hosting, verwerkersovereenkomst en AVG-afspraken verifiëren.
      answer:
        "Je data blijft van jou. Een agent werkt alleen met de bronnen die jij vrijgeeft. TODO: hosting en AVG-afspraken invullen.",
    },
    {
      id: "faq-medewerkers",
      question: "Vervangt AI mijn medewerkers?",
      answer:
        "Nee. Een agent neemt terugkerend werk over, zoals vragen beantwoorden of gegevens overtypen. Je team houdt tijd over voor het werk waar mensen voor nodig zijn.",
    },
    {
      id: "faq-beheer",
      question: "Wie beheert het na oplevering?",
      // TODO: onderhoudsvormen en tarieven invullen.
      answer:
        "Dat kies je zelf: je beheert het met je eigen team of je laat het onderhoud bij ons. TODO: onderhoudsvormen en tarieven invullen.",
    },
    {
      id: "faq-starten",
      question: "Hoe begin ik?",
      answer:
        "Plan een groeiscan via de contactpagina. Je vertelt welk werk nu met de hand gaat, wij laten zien wat je kunt automatiseren en wat dat oplevert.",
    },
  ],
} as const;
