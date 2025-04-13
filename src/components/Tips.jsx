// Tips.jsx - Komponent för att visa tips och råd

function Tips() {
  return (
    <div className="tab-content">
      <h2>Tips & råd</h2>
      <div className="content">
        <h3>Kom igång med uppgiften</h3>
        <p>Här är några tips som hjälper dig att komma igång med att lösa uppgiften:</p>
        
        <div className="tip-container">
          <div className="tip">
            <h4>Utforska olika modeller</h4>
            <p>Börja med att bekanta dig med olika typer av generativa AI-modeller:</p>
            <ul>
              <li>Stora språkmodeller (LLM) som ChatGPT, GPT-4 och Llama</li>
              <li>Bildgenerativa modeller som DALL-E, Midjourney och Stable Diffusion</li>
              <li>Ljudgenerativa modeller som AudioLM och MusicLM</li>
            </ul>
          </div>
          
          <div className="tip">
            <h4>Förstå grundläggande principer</h4>
            <p>Vissa nyckelbegrepp är viktiga att undersöka:</p>
            <ul>
              <li>Transformer-arkitektur</li>
              <li>Träningsmetoder (supervised learning, reinforcement learning)</li>
              <li>Prompt engineering</li>
              <li>Fine-tuning av modeller</li>
            </ul>
          </div>
        </div>
        
        <div className="tip-container">
          <div className="tip">
            <h4>Samhällsperspektiv</h4>
            <p>Fundera på dessa frågor när du analyserar samhällspåverkan:</p>
            <ul>
              <li>Vilka yrken kan påverkas mest av generativ AI?</li>
              <li>Hur förändras frågor om upphovsrätt när AI kan skapa innehåll?</li>
              <li>Vilka positiva och negativa konsekvenser kan generativ AI ha för utbildning?</li>
            </ul>
          </div>
          
          <div className="tip">
            <h4>Resurser att utforska</h4>
            <p>Här är några bra resurser att börja med:</p>
            <ul>
              <li>OpenAI:s dokumentation och blogg</li>
              <li>Research papers från stora AI-konferenser (NeurIPS, ICML)</li>
              <li>Stanford HAI (Human-centered AI) - rapporter och artiklar</li>
              <li>AI Index Report - årlig rapport om utvecklingen inom AI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tips; 