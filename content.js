const knownPaywalledSites = [
    'folha.uol.com.br',
    'lequipe.fr'
  ];
  
  const currentUrl = window.location.href;
  
  if (knownPaywalledSites.some(site => currentUrl.includes(site))) {
    const archiveUrl = `https://archive.today/${currentUrl}`;
  
    const button = document.createElement("button");
    button.textContent = "🔓 Read via Archive";
    button.style.position = "fixed";
    button.style.top = "10px";
    button.style.right = "10px";
    button.style.zIndex = "9999";
    button.style.padding = "10px";
    button.style.background = "#111";
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
  
    button.onclick = () => {
      window.open(archiveUrl, "_blank");
    };
  
    document.body.appendChild(button);
  }
  