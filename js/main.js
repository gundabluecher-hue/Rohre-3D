/**
 * ES module entrypoint.
 *
 * Current migration strategy:
 * - Keep the existing working (legacy) runtime in `js/bot.js` + `js/game.js`
 * - Load them from this module so we can gradually replace parts with real imports
 *
 * Note: ES modules typically require serving via HTTP(S) (not `file://`).
 */

function loadLegacyScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-legacy-src="${src}"]`);
    if (existing) return resolve();

    const script = document.createElement("script");
    script.src = src;
    script.async = false; // preserve order
    script.dataset.legacySrc = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

function showFatalError(err) {
  console.error(err);
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.style.display = "flex";
    overlay.innerHTML = `
      <div style="max-width:720px; padding:16px 18px; border-radius:14px; border:1px solid #7f1d1d; background:#2a0b0bcc; color:#fecaca; font-family:system-ui,Segoe UI,Roboto,Arial;">
        <div style="font-weight:700; margin-bottom:6px;">Start fehlgeschlagen</div>
        <div style="font-size:12px; line-height:1.4;">
          ${String(err?.message || err)}
          <br><br>
          Hinweis: ES-Module funktionieren meist nur über einen lokalen HTTP-Server (nicht über <code>file://</code>).
        </div>
      </div>
    `;
  }
}

async function main() {
  if (!window.THREE) {
    throw new Error(
      "Three.js ist nicht geladen. Stelle sicher, dass der Three.js CDN Script-Tag vor `js/main.js` geladen wird."
    );
  }

  // Transitional boot:
  // - bot stays as legacy script for now (no imports)
  // - game runs as an ES module (strict-mode); this is the first step to migrate code out of `js/game.js`
  await loadLegacyScript("js/bot.js");
  await import("./game.js");
}

main().catch(showFatalError);
