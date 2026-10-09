(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  // ---------------------------------------------------------------------------------------
  // Translations. English is written in the HTML; Spanish lives here.

  const ES = {
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.maker": "Maker",
    "nav.work": "Trabajo",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",
    "hero.hello": "Hola, soy",
    "hero.sub": "Desarrollador full stack en <strong>Jisap</strong>. De día construyo software de empresa y de noche hago que los juegos viajen entre pantallas: C++, C#, TypeScript, WebRTC y WebAssembly.",
    "hero.since": "En GitHub desde 2021",
    "hero.loc": "📍 Lorca, Murcia · España",
    "hero.cta": "Ver mis proyectos",
    "stats.res": "de resolución hasta la TV",
    "stats.fps": "fotogramas por segundo, con HDR",
    "stats.screens": "pantallas: PC, TV y navegador",
    "stats.repos": "repositorios públicos",
    "about.title": "Sobre mí",
    "about.p1": "Soy desarrollador full stack en <strong>Jisap</strong>, un grupo ganadero de Lorca donde estamos digitalizando miles de procesos e integrando la IA en cada uno de ellos. Mi día a día va del núcleo del ERP a las pantallas que usa la gente: Microsoft Dynamics AX y X++, APIs en .NET, SQL Server y aplicaciones en Angular e Ionic.",
    "about.p2": "Fuera del trabajo me encanta llevar los juegos del PC a cualquier pantalla con la menor latencia posible. Esa curiosidad se ha convertido en varios proyectos open source alrededor de <strong>Sunshine</strong>, <strong>Moonlight</strong> y <strong>WebRTC</strong>: desde un servidor de streaming en C++ hasta una app para TVs Samsung y un cliente web con núcleo en WebAssembly.",
    "about.p3": "Disfruto de todo el stack, desde los pipelines del codificador y los protocolos de red hasta el último píxel de una interfaz, y bajando hasta el hardware: también me encanta trastear con placas <strong>ESP32</strong> y <strong>Arduino</strong>.",
    "projects.title": "Proyectos destacados",
    "pipeline.title": "Moonlight WebRTC: un juego, cualquier pantalla",
    "pipeline.text": "Sunshine captura y codifica el juego y lo envía por WebRTC directamente a una TV Samsung o a un navegador. Sin saltos extra en el PC, los fotogramas llegan antes y más regulares.",
    "p.repo": "Ver repositorio ↗",
    "p.sunshine": "Una versión de Sunshine con un servidor WebRTC dentro. Captura, codifica y envía el juego directamente a TVs y navegadores, sin el rodeo por GameStream que necesitaba una pasarela aparte.",
    "p.sunshine.1": "Keyframes del codificador bajo demanda, HEVC Main10 y AV1 10-bit HDR",
    "p.sunshine.2": "Emparejamiento con PIN al estilo Moonlight en la Web UI de Sunshine",
    "p.sunshine.3": "Descubrimiento en la red local y anuncio de la dirección para Wake-on-LAN",
    "p.tizen": "Una app pensada para la TV que juega a los juegos del PC en televisores Samsung Tizen hasta 4K y 120 FPS con HDR, mandos y vibración, decodificando por hardware en la propia TV.",
    "p.tizen.1": "Elige la mayor tasa de fotogramas que soporta el decodificador de la TV",
    "p.tizen.2": "Wake-on-LAN y descubrimiento del PC desde un módulo WebAssembly",
    "p.tizen.3": "Avisos de nuevas versiones desde GitHub",
    "p.web": "Juega en cualquier navegador de escritorio. El vídeo pasa por el WebRTC por hardware del navegador, y un núcleo WebAssembly de 25 KB se encarga de la autenticación y los mandos.",
    "p.web.1": "Sin dependencias y sin instalar nada donde juegas",
    "p.web.2": "Lectura del mando cada 4 ms sin pausas del recolector de basura",
    "p.web.3": "Solo ofrece los códecs que el navegador puede decodificar",
    "p.osms": "Una alternativa multiseat abierta: un servicio de Windows que ejecuta sesiones de streaming aisladas, cada una con su propio usuario de Windows, sesión RDP e instancia de Sunshine.",
    "p.osms.1": "Panel web y API REST con documentación OpenAPI",
    "p.osms.2": "Reinicia Sunshine automáticamente si se cae",
    "p.osms.3": "Pantalla virtual, icono en la bandeja e instalador",
    "maker.title": "Rincón maker",
    "maker.p1": "Lejos de las pantallas grandes, me encanta construir cosas pequeñas que miden el mundo y hablan entre sí. Las placas <strong>ESP32</strong> y <strong>Arduino</strong> son mi patio de juegos, y la <strong>sensorización de temperatura</strong> es lo que más me gusta hacer con ellas: leer sensores y enviar los datos por Wi-Fi o Bluetooth.",
    "maker.p2": "Las programo en <strong>C++</strong> cuando cuenta cada byte y cada microsegundo, y en <strong>MicroPython</strong> cuando quiero probar una idea en minutos directamente desde el REPL.",
    "maker.tag": "Sensores de temperatura",
    "maker.l1": "Sensorización de temperatura en general, del sensor a la lectura",
    "maker.l2": "Placas ESP32 que envían sus lecturas por Wi-Fi y Bluetooth",
    "maker.l3": "La misma idea en C++ o en MicroPython, según convenga",
    "work.title": "Trabajo en Jisap",
    "work.role": "Desarrollador full stack",
    "work.company.title": "Un grupo ganadero que funciona con software",
    "work.company.p1": "<strong>Jisap</strong> es un grupo empresarial ganadero con sede en Lorca, en la Región de Murcia. Detrás de sus granjas hay miles de procesos cada día: animales, piensos, logística, compras, finanzas y las personas que lo hacen funcionar todo.",
    "work.company.p2": "Formo parte del equipo que construye el software que mueve esos procesos, desde el ERP del núcleo hasta las aplicaciones que se usan en la oficina y en el campo.",
    "impact.processes": "procesos digitalizados",
    "impact.processes.text": "Trabajo que antes dependía del papel y de pasos manuales ahora fluye por aplicaciones conectadas y el ERP.",
    "impact.costs": "Menos costes",
    "impact.costs.text": "Menos trabajo manual y menos errores se traducen en un ahorro real en todo el grupo.",
    "impact.time": "Tiempo recuperado",
    "impact.time.text": "Procesos más rápidos dejan a las personas libres para el trabajo que de verdad las necesita.",
    "ai.title": "IA en cada proceso",
    "ai.text": "El siguiente paso ya está en marcha: estamos integrando la inteligencia artificial en cada proceso para hacerlo más eficiente. Se encarga del trabajo repetitivo, ayuda a encontrar la información adecuada y prepara los datos para que las decisiones lleguen antes y mejor informadas.",
    "ai.badge": "IA",
    "ai.n1": "Proceso",
    "ai.n2": "Datos",
    "ai.n3": "Decisión",
    "work.stack": "Cómo lo construimos",
    "work.text": "Software para un grupo multiempresa: el ERP que mueve la operación y las aplicaciones web y móviles que la gente usa cada día.",
    "work.l1": "Aplicaciones web y móviles",
    "work.l2": "Servicios e integración",
    "work.l3": "Desarrollo del ERP",
    "work.l4": "Datos",
    "work.note": "Foco reciente: llevar pantallas del ERP en X++ a aplicaciones web modernas en Angular con APIs en .NET.",
    "skills.title": "Caja de herramientas",
    "skills.systems": "Sistemas, streaming y electrónica",
    "skills.web": "Front end",
    "skills.back": "Back end",
    "skills.erp": "ERP y herramientas",
    "gh.title": "Lo último en GitHub",
    "gh.loading": "Cargando repositorios…",
    "gh.error": "No se pudieron cargar los repositorios ahora mismo.",
    "gh.updated": "actualizado",
    "gh.fork": "fork",
    "contact.title": "Hablemos",
    "contact.text": "Preguntas sobre un proyecto, una idea para llevar algo a otra pantalla o simplemente saludar.",
    "footer.made": "Hecho a mano con HTML, CSS y un poco de JavaScript.",
  };

  const ROLES = {
    en: ["Full stack developer @ Jisap", "Digitalizing a livestock group", "AI in every process", "Game streaming over WebRTC", "C++ · C# · TypeScript", "Dynamics AX & X++", "Angular & Ionic apps", "ESP32 & temperature sensing", "WebAssembly tinkerer"],
    es: ["Desarrollador full stack @ Jisap", "Digitalizando un grupo ganadero", "IA en cada proceso", "Streaming de juegos por WebRTC", "C++ · C# · TypeScript", "Dynamics AX y X++", "Apps en Angular e Ionic", "ESP32 y sensores de temperatura", "Trasteando con WebAssembly"],
  };

  const english = new Map();
  $$("[data-i18n]").forEach((element) => english.set(element, element.innerHTML));

  let lang = null;
  try {
    lang = localStorage.getItem("lang");
  } catch {
    // Storage blocked: fall back to the browser language.
  }
  if (lang !== "es" && lang !== "en") {
    lang = (navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en";
  }

  const t = (key, fallback) => (lang === "es" && ES[key]) || fallback;

  function applyLanguage() {
    document.documentElement.lang = lang;
    english.forEach((text, element) => {
      element.innerHTML = lang === "es" && ES[element.dataset.i18n] ? ES[element.dataset.i18n] : text;
    });
    const button = $("#lang");
    button.textContent = lang === "es" ? "EN" : "ES";
    button.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
  }

  $("#lang").addEventListener("click", () => {
    lang = lang === "es" ? "en" : "es";
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // The choice simply is not remembered.
    }
    applyLanguage();
    renderRepos();
    restartTyping();
  });

  applyLanguage();

  // ---------------------------------------------------------------------------------------
  // Hero name: letters rise in one after another.

  const name = $("#hero-name");
  const fullName = name.textContent;
  name.textContent = "";
  // Letters are grouped by word so a line never breaks inside a word.
  let index = 0;
  fullName.split(" ").forEach((word, wordIndex) => {
    if (wordIndex > 0) {
      name.append(" ");
      index += 1;
    }
    const group = document.createElement("span");
    group.className = "word";
    for (const letter of word) {
      const span = document.createElement("span");
      span.className = "char";
      span.textContent = letter;
      span.setAttribute("aria-hidden", "true");
      span.style.animationDelay = `${0.25 + index * 0.045}s, 0s`;
      group.append(span);
      index += 1;
    }
    name.append(group);
  });

  // ---------------------------------------------------------------------------------------
  // Typed roles

  const typed = $("#typed");
  let typingTimer = 0;

  function restartTyping() {
    clearTimeout(typingTimer);
    const roles = ROLES[lang];
    if (reduceMotion) {
      typed.textContent = roles[0];
      return;
    }
    let role = 0;
    let length = 0;
    let deleting = false;
    const step = () => {
      const text = roles[role];
      length += deleting ? -1 : 1;
      typed.textContent = text.slice(0, length);
      let delay = deleting ? 35 : 70;
      if (!deleting && length === text.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && length === 0) {
        deleting = false;
        role = (role + 1) % roles.length;
        delay = 350;
      }
      typingTimer = setTimeout(step, delay);
    };
    typingTimer = setTimeout(step, 900);
  }
  restartTyping();

  // ---------------------------------------------------------------------------------------
  // Hero background: packets streaming along wavy lanes, brighter near the pointer.

  const canvas = $("#streams");
  const context = canvas.getContext("2d");
  const pointer = { x: -9999, y: -9999 };
  let lanes = [];
  let packets = [];
  let width = 0;
  let height = 0;
  let running = true;
  let frame = 0;

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = Math.max(8, Math.round(height / 46));
    lanes = Array.from({ length: count }, (_, index) => ({
      y: ((index + 0.5) / count) * height,
      amplitude: 10 + Math.random() * 26,
      frequency: 0.002 + Math.random() * 0.004,
      phase: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * 0.6,
    }));
    const total = Math.round(Math.min(130, (width * height) / 9000));
    packets = Array.from({ length: total }, () => newPacket(Math.random() * width));
  }

  function newPacket(x = -20) {
    const lane = Math.floor(Math.random() * lanes.length);
    return {
      lane,
      x,
      speed: (1.2 + Math.random() * 2.8) * lanes[lane].speed,
      size: 2 + Math.random() * 2.5,
      hue: Math.random() < 0.5 ? 172 : 250,
    };
  }

  function laneY(lane, x, time) {
    return lane.y + Math.sin(x * lane.frequency + lane.phase + time * 0.0006) * lane.amplitude;
  }

  function draw(time) {
    context.clearRect(0, 0, width, height);
    context.lineWidth = 1;
    for (const lane of lanes) {
      context.beginPath();
      for (let x = 0; x <= width; x += 24) {
        const y = laneY(lane, x, time);
        if (x === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
      }
      context.strokeStyle = "rgba(139, 123, 255, 0.07)";
      context.stroke();
    }
    for (const packet of packets) {
      packet.x += packet.speed;
      if (packet.x > width + 30) {
        Object.assign(packet, newPacket());
      }
      const lane = lanes[packet.lane];
      const y = laneY(lane, packet.x, time);
      const distance = Math.hypot(packet.x - pointer.x, y - pointer.y);
      const boost = Math.max(0, 1 - distance / 180);
      const alpha = 0.35 + boost * 0.65;
      const trail = context.createLinearGradient(packet.x - 40 - packet.speed * 8, y, packet.x, y);
      trail.addColorStop(0, `hsla(${packet.hue}, 90%, 65%, 0)`);
      trail.addColorStop(1, `hsla(${packet.hue}, 90%, 65%, ${alpha * 0.6})`);
      context.strokeStyle = trail;
      context.lineWidth = packet.size * 0.7;
      context.beginPath();
      context.moveTo(packet.x - 40 - packet.speed * 8, laneY(lane, packet.x - 40 - packet.speed * 8, time));
      context.lineTo(packet.x, y);
      context.stroke();
      context.fillStyle = `hsla(${packet.hue}, 95%, 70%, ${alpha})`;
      context.beginPath();
      context.arc(packet.x, y, packet.size + boost * 2, 0, Math.PI * 2);
      context.fill();
    }
  }

  function loop(time) {
    if (!running) {
      return;
    }
    draw(time);
    frame = requestAnimationFrame(loop);
  }

  resize();
  if (reduceMotion) {
    draw(0);
  } else {
    frame = requestAnimationFrame(loop);
    // Stop drawing while the hero is off screen. Browsers already pause hidden tabs.
    new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting;
      if (visible && !running) {
        running = true;
        frame = requestAnimationFrame(loop);
      } else if (!visible) {
        running = false;
        cancelAnimationFrame(frame);
      }
    }).observe(canvas);
  }
  let resizeTimer = 0;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resize();
      if (reduceMotion) {
        draw(0);
      }
    }, 150);
  });
  window.addEventListener("pointermove", (event) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = event.clientX - rect.left;
    pointer.y = event.clientY - rect.top;
  }, { passive: true });

  // ---------------------------------------------------------------------------------------
  // Scroll reveal, with a small stagger between siblings.

  const revealObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  function observeReveal(elements) {
    elements.forEach((element) => {
      const siblings = [...element.parentElement.children].filter((child) => child.classList.contains("reveal"));
      element.style.setProperty("--delay", `${Math.min(siblings.indexOf(element), 6) * 0.08}s`);
      revealObserver.observe(element);
    });
  }
  observeReveal($$(".reveal"));

  // ---------------------------------------------------------------------------------------
  // Counters

  function countUp(element) {
    const target = Number(element.dataset.to);
    if (reduceMotion) {
      element.textContent = target;
      return;
    }
    const start = performance.now();
    const duration = 1600;
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 4);
      element.textContent = Math.round(target * eased);
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);
  }
  const counterObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        countUp(entry.target);
        counterObserver.unobserve(entry.target);
      }
    }
  }, { threshold: 0.6 });
  $$(".count").forEach((element) => counterObserver.observe(element));

  // ---------------------------------------------------------------------------------------
  // Navigation: progress bar, hide on scroll down, highlight the current section.

  const nav = $("#nav");
  const progress = $("#progress");
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    nav.classList.toggle("hidden", y > lastScroll && y > 400);
    lastScroll = y;
  }, { passive: true });

  const links = new Map($$(".nav-links a").map((link) => [link.getAttribute("href").slice(1), link]));
  const sectionObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        links.forEach((link, id) => link.classList.toggle("active", id === entry.target.id));
      }
    }
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("section[id]").forEach((section) => sectionObserver.observe(section));

  // ---------------------------------------------------------------------------------------
  // Cards tilt towards the pointer, with a glow that follows it. Buttons lean towards it.

  function enableTilt(card) {
    if (!finePointer || reduceMotion) {
      return;
    }
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      card.style.setProperty("--mx", `${x * 100}%`);
      card.style.setProperty("--my", `${y * 100}%`);
      card.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 7}deg) rotateY(${(x - 0.5) * 9}deg) translateY(-4px)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  }
  $$(".tilt").forEach(enableTilt);

  if (finePointer && !reduceMotion) {
    $$(".magnetic").forEach((button) => {
      button.addEventListener("pointermove", (event) => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        button.style.transform = `translate(${x * 0.18}px, ${y * 0.3}px)`;
      });
      button.addEventListener("pointerleave", () => {
        button.style.transform = "";
      });
    });
  }

  // ---------------------------------------------------------------------------------------
  // Terminal in the About section types itself once it is visible.

  const TERMINAL = [
    ["prompt", "$ whoami\n"],
    ["", "mario-lopez-segura\n\n"],
    ["prompt", "$ cat profile.json\n"],
    ["", "{\n  "],
    ["key", "\"role\""], ["", ": "], ["str", "\"Full stack developer\""], ["", ",\n  "],
    ["key", "\"company\""], ["", ": "], ["str", "\"Jisap\""], ["", ",\n  "],
    ["key", "\"location\""], ["", ": "], ["str", "\"Lorca, Murcia, Spain\""], ["", ",\n  "],
    ["key", "\"languages\""], ["", ": ["], ["str", "\"C++\", \"C#\", \"TypeScript\", \"X++\""], ["", "],\n  "],
    ["key", "\"hobbies\""], ["", ": ["], ["str", "\"4K120 HDR game streaming\", \"ESP32 temperature sensing\", \"Arduino\""], ["", "]\n}\n\n"],
    ["prompt", "$ "],
  ];

  const terminal = $("#terminal");
  function typeTerminal() {
    if (reduceMotion) {
      terminal.innerHTML = "";
      for (const [kind, text] of TERMINAL) {
        const span = document.createElement("span");
        span.className = kind;
        span.textContent = text;
        terminal.append(span);
      }
      return;
    }
    let part = 0;
    let offset = 0;
    let span = null;
    const step = () => {
      if (part >= TERMINAL.length) {
        const caret = document.createElement("span");
        caret.className = "caret";
        terminal.append(caret);
        return;
      }
      const [kind, text] = TERMINAL[part];
      if (!span) {
        span = document.createElement("span");
        span.className = kind;
        terminal.append(span);
      }
      offset += 1;
      span.textContent = text.slice(0, offset);
      if (offset >= text.length) {
        part += 1;
        offset = 0;
        span = null;
      }
      setTimeout(step, kind === "prompt" && offset === 0 ? 280 : 16 + Math.random() * 30);
    };
    step();
  }
  const terminalObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      typeTerminal();
      terminalObserver.disconnect();
    }
  }, { threshold: 0.4 });
  terminalObserver.observe(terminal);

  // ---------------------------------------------------------------------------------------
  // Maker: C++ / MicroPython tabs, and a serial monitor that follows the board's LED.

  const tabs = $$('[role="tab"]');
  function selectTab(selected) {
    for (const tab of tabs) {
      const active = tab === selected;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
      $("#" + tab.getAttribute("aria-controls")).hidden = !active;
    }
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectTab(tab));
    tab.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        const next = tabs[(index + (event.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
        selectTab(next);
        next.focus();
      }
    });
  });

  // The serial monitor prints a reading every 2 s, like the sketch, and the board shows it.
  const serialLines = $("#serial-lines");
  const boardTemp = $("#board-temp");
  if (serialLines) {
    let serialTimer = 0;
    let millis = 0;
    let celsius = 23.4;
    const print = () => {
      millis += 2000;
      celsius = Math.min(26.5, Math.max(21.5, celsius + (Math.random() - 0.5) * 0.6));
      const reading = `${celsius.toFixed(1)} °C`;
      boardTemp.textContent = reading;
      const line = document.createElement("span");
      line.textContent = `${String(millis).padStart(6, " ")} ms  ${reading}`;
      serialLines.append(line);
      while (serialLines.children.length > 4) {
        serialLines.firstElementChild.remove();
      }
    };
    if (reduceMotion) {
      print();
    } else {
      new IntersectionObserver(([entry]) => {
        clearInterval(serialTimer);
        if (entry.isIntersecting) {
          print();
          serialTimer = setInterval(print, 2000);
        }
      }).observe(serialLines);
    }
  }

  // Stops the SVG packets for people who prefer less motion.
  if (reduceMotion) {
    const svg = $(".pipeline-svg");
    if (svg && svg.pauseAnimations) {
      svg.pauseAnimations();
    }
  }

  // ---------------------------------------------------------------------------------------
  // Latest repositories, straight from the GitHub API.

  const LANGUAGE_COLORS = {
    "C++": "#f34b7d", "C#": "#178600", JavaScript: "#f1e05a", TypeScript: "#3178c6",
    Java: "#b07219", HTML: "#e34c26", C: "#555555", Python: "#3572a5",
  };
  // Shown when a repository has no description on GitHub.
  const DESCRIPTIONS = {
    "moonlight-webrtc-web": ["Browser client for Sunshine-Web-RTC with a WebAssembly core.", "Cliente web para Sunshine-Web-RTC con núcleo en WebAssembly."],
    "Monlight-Tizen-WebRtc-Client": ["Samsung Tizen TV app: 4K, 120 FPS and HDR game streaming over WebRTC.", "App para TVs Samsung Tizen: streaming de juegos en 4K, 120 FPS y HDR por WebRTC."],
    "Curso-Docker-Tema-9": ["Exercises from a Docker course.", "Ejercicios de un curso de Docker."],
  };
  let repos = null;
  let reposFailed = false;

  function timeAgo(date) {
    const days = Math.round((Date.now() - new Date(date).getTime()) / 86400000);
    const format = new Intl.RelativeTimeFormat(lang, { numeric: "auto" });
    if (days < 30) {
      return format.format(-days, "day");
    }
    if (days < 365) {
      return format.format(-Math.round(days / 30), "month");
    }
    return format.format(-Math.round(days / 365), "year");
  }

  function renderRepos() {
    const container = $("#repos");
    if (reposFailed) {
      container.innerHTML = "";
      const message = document.createElement("p");
      message.className = "muted";
      message.textContent = t("gh.error", "Could not load repositories right now.");
      const link = document.createElement("a");
      link.href = "https://github.com/mlopezsegura?tab=repositories";
      link.textContent = " github.com/mlopezsegura ↗";
      message.append(link);
      container.append(message);
      return;
    }
    if (!repos) {
      return;
    }
    container.replaceChildren(...repos.map((repo) => {
      const card = document.createElement("a");
      card.className = "repo reveal";
      card.href = repo.html_url;
      card.target = "_blank";
      card.rel = "noopener";
      const title = document.createElement("span");
      title.className = "repo-name";
      title.textContent = repo.name + (repo.fork ? ` · ${t("gh.fork", "fork")}` : "");
      const description = document.createElement("span");
      description.className = "repo-desc";
      const fallback = DESCRIPTIONS[repo.name];
      description.textContent = repo.description || (fallback ? fallback[lang === "es" ? 1 : 0] : "");
      const meta = document.createElement("span");
      meta.className = "repo-meta";
      if (repo.language) {
        const language = document.createElement("span");
        const dot = document.createElement("span");
        dot.className = "lang-dot";
        dot.style.background = LANGUAGE_COLORS[repo.language] || "#8b7bff";
        language.append(dot, repo.language);
        meta.append(language);
      }
      const updated = document.createElement("span");
      updated.textContent = `${t("gh.updated", "updated")} ${timeAgo(repo.pushed_at)}`;
      meta.append(updated);
      if (repo.stargazers_count) {
        const stars = document.createElement("span");
        stars.textContent = `★ ${repo.stargazers_count}`;
        meta.append(stars);
      }
      card.append(title, description, meta);
      return card;
    }));
    observeReveal($$(".repo", container));
  }

  fetch("https://api.github.com/users/mlopezsegura/repos?sort=pushed&per_page=100")
    .then((response) => {
      if (!response.ok) {
        throw new Error(String(response.status));
      }
      return response.json();
    })
    .then((list) => {
      const hidden = new Set(["mlopezsegura", "MarioLopezSegura", "mlopezsegura.github.io", "Main"]);
      repos = list.filter((repo) => !hidden.has(repo.name)).slice(0, 6);
      const count = $("#repo-count");
      count.dataset.to = String(list.length);
      if (count.textContent !== "0") {
        count.textContent = String(list.length);
      }
      renderRepos();
    })
    .catch(() => {
      reposFailed = true;
      renderRepos();
    });

  $("#year").textContent = String(new Date().getFullYear());
})();
