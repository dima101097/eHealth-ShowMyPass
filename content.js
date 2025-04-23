function createIconButton(type = "show") {
    const button = document.createElement("button");
    button.type = "button";
    button.title = type === "show" ? "Показати пароль" : "Сховати пароль";
  
    button.style.marginLeft = "8px";
    button.style.background = "transparent";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.display = "flex";
    button.style.alignItems = "center";
    button.style.padding = "10";
  
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("stroke", "currentColor");
  
    if (type === "show") {
      // Eye
      svg.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z" />
      `;
    } else {
      // Eye slash
      svg.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a10.049 10.049 0 012.19-3.368m3.157-2.317A9.971 9.971 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.974 9.974 0 01-4.043 5.306M15 12a3 3 0 00-3-3m0 0a3 3 0 013 3m0 0a3 3 0 01-3 3m0 0a3 3 0 01-3-3m9 9L3 3" />
      `;
    }
  
    button.appendChild(svg);
    return button;
  }
  
  function addToggleButton(input) {
    if (input.dataset.toggleAdded === "true") return;
    input.dataset.toggleAdded = "true";
  
    const showBtn = createIconButton("show");
    const hideBtn = createIconButton("hide");
    hideBtn.style.display = "none"; 
  
    showBtn.addEventListener("click", () => {
      input.type = "text";
      showBtn.style.display = "none";
      hideBtn.style.display = "inline-flex";
    });
  
    hideBtn.addEventListener("click", () => {
      input.type = "password";
      hideBtn.style.display = "none";
      showBtn.style.display = "inline-flex";
    });
  
    input.insertAdjacentElement("afterend", showBtn);
    showBtn.insertAdjacentElement("afterend", hideBtn);
  }
  
  function waitForInput() {
    const interval = setInterval(() => {
      const input = document.querySelector('input[type="password"]');
      if (input) {
        clearInterval(interval);
        addToggleButton(input);
      }
    }, 300);
  }
  
  waitForInput();
  