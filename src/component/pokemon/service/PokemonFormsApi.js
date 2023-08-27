export const fetchAndTransformAbility = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    
    const habilidades = data.effect_entries;
    const habilidadEn = habilidades.find(
      (habilidad) => habilidad.language.name === "en"
    );
    const caracteristica = habilidadEn.effect;
  
    return caracteristica;
  };