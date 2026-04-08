const banner = document.createElement("div");
banner.textContent = "👋Hello from your userscript v0.1.1!";
banner.style.cssText = `
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 99999;
  background: #2563eb;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-family: sans-serif;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
`;
document.body.appendChild(banner);
