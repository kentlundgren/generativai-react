// dataHelpers.js - Hjälpfunktioner och data för generativAI-applikationen

// Quiz-data med frågor, alternativ och feedback
export const quizData = [
  {
    id: 1,
    question: "Vad är huvudskillnaden mellan traditionell AI och generativ AI?",
    options: [
      { id: "a", text: "Traditionell AI använder enbart en typ av algoritm, medan generativ AI använder många olika" },
      { id: "b", text: "Traditionell AI klassificerar eller förutsäger baserat på data, medan generativ AI skapar nytt innehåll" },
      { id: "c", text: "Traditionell AI fungerar endast offline, medan generativ AI kräver internetanslutning" },
      { id: "d", text: "Generativ AI är ett helt nytt koncept som inte delar några tekniker med traditionell AI" }
    ],
    correctAnswer: "b",
    correctFeedback: "Rätt! Generativ AI kan skapa nytt innehåll baserat på träningsdata, medan traditionell AI främst fokuserar på att klassificera eller förutsäga utifrån befintlig data.",
    incorrectFeedback: "Fel. Generativ AI kan skapa nytt innehåll (text, bilder, ljud), medan traditionell AI främst klassificerar eller förutsäger baserat på data."
  },
  {
    id: 2,
    question: "Vilken teknik är fundamental för många moderna generativa AI-modeller?",
    options: [
      { id: "a", text: "Boolean logik" },
      { id: "b", text: "Neurala nätverk med en enkel lager" },
      { id: "c", text: "Transformer-arkitektur" },
      { id: "d", text: "Symbolisk AI" }
    ],
    correctAnswer: "c",
    correctFeedback: "Rätt! Transformer-arkitekturen, introducerad i 'Attention is All You Need'-rapporten, ligger till grund för moderna språkmodeller som GPT och kraftfulla bildgenereringsmodeller.",
    incorrectFeedback: "Fel. Transformer-arkitekturen är fundamental för moderna generativa AI-modeller som GPT och har revolutionerat fältet med sin förmåga att hantera sekventiell data."
  },
  {
    id: 3,
    question: "Vad krävs vanligtvis för att träna kraftfulla generativa AI-modeller?",
    options: [
      { id: "a", text: "Små mängder högkvalitativ, manuellt kuraterad data" },
      { id: "b", text: "Enorma mängder data och betydande beräkningskraft" },
      { id: "c", text: "Handskrivna regler utan behov av träningsdata" },
      { id: "d", text: "Endast data från en specifik källa för att undvika störningar" }
    ],
    correctAnswer: "b",
    correctFeedback: "Rätt! Moderna generativa AI-modeller tränas på enorma datamängder och kräver betydande beräkningsresurser, ofta tusentals GPU-timmar.",
    incorrectFeedback: "Fel. Moderna generativa AI-modeller kräver enorma mängder träningsdata och betydande beräkningskraft för att uppnå sina förmågor."
  },
  {
    id: 4,
    question: "Vilket begrepp beskriver hur generativa AI-modeller kan producera oväntade eller oönskade resultat?",
    options: [
      { id: "a", text: "Hallucination" },
      { id: "b", text: "Refraktion" },
      { id: "c", text: "Destabilisering" },
      { id: "d", text: "Reverberation" }
    ],
    correctAnswer: "a",
    correctFeedback: "Rätt! 'Hallucination' är termen som används när generativa AI-modeller skapar felaktig information eller presenterar påhittade fakta som om de vore sanna.",
    incorrectFeedback: "Fel. 'Hallucination' är termen för när AI-modeller genererar felaktig, påhittad eller missvisande information trots att den presenteras som faktabaserad."
  }
];

// Data för applikationsgrafen
export const applicationChartData = [
  { area: "Textgenerering", percentage: 85, examples: "ChatGPT, GPT-4, Bard" },
  { area: "Bildgenerering", percentage: 75, examples: "DALL-E, Midjourney, Stable Diffusion" },
  { area: "Kodgenerering", percentage: 65, examples: "GitHub Copilot, CodeWhisperer" },
  { area: "Textsammanfattning", percentage: 70, examples: "Claude AI, Lex" },
  { area: "Videogenerering", percentage: 40, examples: "RunwayML, Gen-2" },
  { area: "Ljudgenerering", percentage: 50, examples: "MusicLM, AudioLDM" }
];

// Data för jämförelsetabell
export const comparisonTableData = [
  {
    aspect: "Funktion",
    traditional: "Klassificerar, förutsäger eller identifierar mönster i data",
    generative: "Skapar nytt innehåll som text, bilder, kod eller ljud"
  },
  {
    aspect: "Input",
    traditional: "Kräver strukturerad data och tydligt definierade kategorier",
    generative: "Kan arbeta med alla typer av data och mindre strukturerad information"
  },
  {
    aspect: "Output",
    traditional: "Ger vanligtvis ett enkelt svar: en kategori, ett ja/nej, ett värde",
    generative: "Skapar originellt innehåll som kan varieras med varje körning"
  },
  {
    aspect: "Användningsfall",
    traditional: "Bildigenkänning, bedrägeridetektering, kundrekommendationer",
    generative: "Innehållsskapande, kreativt skrivande, designhjälp, kodhjälp"
  },
  {
    aspect: "Exempel",
    traditional: "Email-spamfilter, ansiktsigenkänningssystem, kreditbedömning",
    generative: "ChatGPT, DALL-E, GitHub Copilot, Midjourney"
  }
];

// Data för AI-processens steg
export const aiProcessSteps = [
  {
    id: 1,
    title: "Input från användaren",
    description: "Användaren ger modellen en prompt eller instruktion om vad den ska generera."
  },
  {
    id: 2,
    title: "Bearbetning",
    description: "AI-modellen tolkar prompten och använder sin träning för att generera ett svar."
  },
  {
    id: 3,
    title: "Generering av innehåll",
    description: "Systemet skapar ett nytt, unikt innehåll baserat på dess förståelse och träningsdata."
  },
  {
    id: 4,
    title: "Presentation av output",
    description: "Det genererade innehållet presenteras för användaren, som kan ge ytterligare instruktioner."
  }
]; 