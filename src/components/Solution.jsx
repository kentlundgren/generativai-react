// Solution.jsx - Komponent för att visa lösningen på uppgiften

import lockIcon from '../assets/lock.svg';

function Solution({ quizCompleted }) {
  return (
    <div className="tab-content">
      <h2>Lösning</h2>
      <div className="content">
        {!quizCompleted ? (
          <div className="locked-content">
            <p>Du måste klara quizen för att låsa upp lösningen!</p>
            <img src={lockIcon} alt="Låst innehåll" className="lock-icon" />
          </div>
        ) : (
          <div className="solution-content">
            <h3>Introduktion till generativ AI: Steg-för-steg lösning</h3>
            
            <div className="solution-step">
              <h4>Steg 1: Förstå skillnaden mellan traditionell AI och generativ AI</h4>
              <p>Traditionell AI har främst fokuserat på att analysera befintlig data för att göra förutsägelser eller klassificeringar. Till exempel kan en sådan AI klassificera om ett e-postmeddelande är spam eller inte, men den kan inte skriva ett nytt e-postmeddelande från grunden.</p>
              <p>Generativ AI, däremot, har förmågan att skapa nytt innehåll som liknar det den tränats på. Det kan vara text, bilder, musik eller andra typer av data. Dessa system bygger på komplexa neurala nätverk som lärt sig mönstren i stora mängder träningsdata.</p>
            </div>
            
            <div className="solution-step">
              <h4>Steg 2: De fundamentala principerna bakom generativ AI</h4>
              <p>Generativ AI bygger på flera nyckelprinciper:</p>
              <ul>
                <li><strong>Storskalig träning:</strong> Moderna generativa modeller tränas på enorma datamängder, ibland flera hundra gigabyte eller terabyte av text, bilder eller andra datatyper.</li>
                <li><strong>Transformerarkitektur:</strong> Många moderna språkmodeller använder transformerarkitekturen som introducerades 2017. Denna arkitektur använder en mekanism kallad "attention" för att hantera långa sekvenser av data effektivt.</li>
                <li><strong>Autoregression:</strong> Språkmodeller genererar innehåll ett element i taget, där varje nytt element bygger på alla tidigare element.</li>
                <li><strong>Transfer Learning:</strong> Modeller som först tränats på en generell uppgift kan specialiseras för mer specifika uppgifter med mindre mängder data.</li>
              </ul>
            </div>
            
            <div className="solution-step">
              <h4>Steg 3: Användningsområden för generativ AI</h4>
              <p>Tre viktiga användningsområden för generativ AI är:</p>
              
              <div className="usage-area">
                <h5>Innehållsskapande och kreativa arbetsflöden</h5>
                <p>Generativ AI kan hjälpa till med att skriva texter, skapa bilder, komponera musik och generera kod. Detta förändrar kreativa branscher genom att erbjuda nya verktyg för innehållsproduktion och inspiration.</p>
                <p>Exempel: Copywriters kan använda AI för att snabbt generera textutkast, illustratörer kan använda AI för att skapa konceptbilder, och utvecklare kan använda AI för att automatisera rutinkodning.</p>
              </div>
              
              <div className="usage-area">
                <h5>Personaliserad utbildning</h5>
                <p>Generativ AI kan anpassa utbildningsmaterial för olika inlärningsstilar, ge snabb feedback på elevarbeten, och skapa obegränsade övningsuppgifter.</p>
                <p>Exempel: En AI-tutor kan generera personaliserade matematikproblem baserat på elevens kunskapsnivå, förklara komplexa koncept på olika sätt, och hjälpa till med att ge omedelbar feedback på uppsatser.</p>
              </div>
              
              <div className="usage-area">
                <h5>Produktutveckling och design</h5>
                <p>Generativ AI kan accelerera designprocesser genom att snabbt skapa prototyper, föreslå designvarianter, och optimera befintliga designer.</p>
                <p>Exempel: Produktdesigners kan använda AI för att generera flera designvarianter av en ny produkt, arkitekter kan använda AI för att utforska rumsliga layouter, och ingenjörer kan använda AI för att optimera komponenter.</p>
              </div>
            </div>
            
            <div className="solution-step">
              <h4>Steg 4: Konsekvenser för samhället</h4>
              
              <div className="implication">
                <h5>Arbetsmarknaden</h5>
                <p><strong>Förändringar:</strong> Generativ AI kan automatisera aspekter av många kreativa och kunskapsbaserade yrken, vilket kommer att förändra arbetsmarknaden.</p>
                <p><strong>Analys:</strong> Framtidens jobb kommer troligtvis att fokusera mer på att vägleda AI-verktyg och säkerställa kvalitet, snarare än att skapa allt innehåll från grunden. Vissa jobb kan försvinna medan nya roller som "prompt engineer" eller "AI trainer" uppstår.</p>
              </div>
              
              <div className="implication">
                <h5>Kreativt skapande</h5>
                <p><strong>Förändringar:</strong> Generativ AI demokratiserar kreativa förmågor genom att göra dem tillgängliga för fler människor, men utmanar också vår syn på originalitet och konstnärligt uttryck.</p>
                <p><strong>Analys:</strong> Vi kommer troligtvis se en evolution i hur vi värderar kreativt arbete, där mänsklig kreativitet tillsammans med AI blir vanligare. Frågor kring upphovsrätt och vem som äger AI-genererat innehåll kommer att bli allt viktigare.</p>
              </div>
              
              <div className="implication">
                <h5>Utbildning</h5>
                <p><strong>Förändringar:</strong> Generativ AI utmanar traditionella utbildningsmetoder och bedömningar, samtidigt som den erbjuder nya möjligheter för personaliserat lärande.</p>
                <p><strong>Analys:</strong> Utbildningssystemet behöver anpassas för att fokusera mer på kritiskt tänkande, bedömning av information, och förmågan att vägleda AI-verktyg istället för att memorera fakta. Skoluppgifter kommer att behöva omdesignas för att vara relevanta i en värld där generativ AI är allmänt tillgänglig.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Solution; 