# Anleitung: Migration des 3D-Spiels nach Unity

Diese Anleitung beschreibt, wie du dein bestehendes JavaScript/Three.js Spiel ("Mini Curve Fever 3D") in die **Unity Engine** übertragst. Dabei legen wir besonderen Wert darauf, dass *alle Funktionen* erhalten bleiben und deine *gespeicherten Einstellungen* aus dem Browser übernommen werden.

> [!NOTE]
> **Warum Unity?** Unity bietet native Performance (C++ Core), besseres Physik-Handling und einfachen Export für WebGL, PC und Mobile.

---

## 1. Vorbereitung

1. **Unity Hub & Editor installieren**:
    * Lade den [Unity Hub](https://unity.com/download) herunter.
    * Installiere eine aktuelle **LTS-Version** (Long Term Support), z.B. 2022.3 LTS.
    * **Wichtig**: Wähle bei der Installation das **WebGL Build Support** Modul aus!

2. **Neues Projekt**:
    * Erstelle ein neues **3D (URP)** Projekt (Universal Render Pipeline für gute Performance & Grafik).
    * Name: "NeonCurve3D".

---

## 2. Projektstruktur & Assets

Wir bauen die Struktur ähnlich wie im JS-Projekt auf.

1. Erstelle folgende Ordner in `Assets/`:
    * `Scripts` (für C# Code)
    * `Prefabs` (für Spieler, Powerups, Arena)
    * `Materials`
    * `Plugins` (Wichtig für die Datenübernahme!)

---

## 3. Datenübernahme (Settings aus dem Browser)

Das Wichtigste zuerst: Damit deine Einstellungen (`mini-curve-fever-3d.settings.v3`) im Unity-WebGL-Build verfügbar sind, brauchen wir ein **JavaScript-Plugin**.

### A. Erstelle die Plugin-Datei

Erstelle eine Datei `Assets/Plugins/LocalStorage.jslib` mit folgendem Inhalt:

```javascript
mergeInto(LibraryManager.library, {

  LoadWebSettings: function () {
    var key = "mini-curve-fever-3d.settings.v3";
    var settings = localStorage.getItem(key);
    
    if (!settings) {
        return null;
    }
    
    var bufferSize = lengthBytesUTF8(settings) + 1;
    var buffer = _malloc(bufferSize);
    stringToUTF8(settings, buffer, bufferSize);
    return buffer;
  },

  SaveWebSettings: function (jsonParams) {
    var key = "mini-curve-fever-3d.settings.v3";
    var value = UTF8ToString(jsonParams);
    localStorage.setItem(key, value);
  }

});
```

### B. C# Settings Manager

Erstelle `Assets/Scripts/SettingsManager.cs`:

```csharp
using UnityEngine;
using System.Runtime.InteropServices;

[System.Serializable]
public class GameSettings {
    public string mode = "1p";
    public GameplaySettings gameplay;
    // ... füge hier alle Felder aus deiner Config.js hinzu
}

[System.Serializable]
public class GameplaySettings {
    public float speed = 18.0f;
    public float turnSensitivity = 2.2f;
    // ...
}

public class SettingsManager : MonoBehaviour {
    
    [DllImport("__Internal")]
    private static extern string LoadWebSettings();

    [DllImport("__Internal")]
    private static extern void SaveWebSettings(string json);

    public GameSettings currentSettings;

    void Start() {
        LoadSettings();
    }

    public void LoadSettings() {
        if (Application.platform == RuntimePlatform.WebGLPlayer) {
            string json = LoadWebSettings();
            if (!string.IsNullOrEmpty(json)) {
                currentSettings = JsonUtility.FromJson<GameSettings>(json);
                Debug.Log("Einstellungen aus Browser geladen!");
            } else {
                // Standardwerte setzen
            }
        } else {
            // Fallback für Editor (z.B. PlayerPrefs)
        }
    }
}
```

---

## 4. Spieler & Bewegung (Player.js Port)

Das "Herz" des Spiels ist der Jet.

1. **Modellbau**:
    * Du kannst deinen Jet in Unity mit ProBuilder nachbauen oder Blender nutzen.
    * Alternativ: Baue ihn aus `Cone` und `Cube` Primitives zusammen, ähnlich wie in deinem Three.js Code.
    * Füge ein **Partikelsystem** für den Antrieb (Flammen) hinzu.

2. **PlayerController.cs**:
    Die Logik aus `Player.js` muss portiert werden. Unity nutzt `Transform.Translate` oder `Rigidbody` Physik.

```csharp
using UnityEngine;

public class PlayerController : MonoBehaviour {
    public float speed = 18f;
    public float turnSpeed = 2.2f;
    public float rollSpeed = 2.0f;
    
    private float currentSpeed;

    void Update() {
        // Kontinuierliche Vorwärtsbewegung
        transform.Translate(Vector3.forward * currentSpeed * Time.deltaTime);
        
        // Eingabe (Input System oder Legacy)
        float h = Input.GetAxis("Horizontal"); // A/D
        float v = Input.GetAxis("Vertical");   // W/S
        
        // Rotation (Pitch/Yaw/Roll) wie im JS Code
        // Achtung: Unity nutzt Linkshändiges Koordinatensystem, Three.js Rechtshändiges.
        // Ggf. +/- vertauschen.
        
        transform.Rotate(Vector3.right * v * turnSpeed * Time.deltaTime);
        transform.Rotate(Vector3.up * h * turnSpeed * Time.deltaTime);
        
        // Auto-Roll Logik hier einfügen
    }
}
```

---

## 5. Die Arena & Trail (Schweif)

### Arena

* Erstelle für jede Map (Standard, Maze, etc.) eine eigene **Szene** oder Prefabs.
* Nutze `ProBuilder` (kostenlos im Package Manager), um die Wände und Hindernisse exakt nachzubauen. Das ist viel einfacher als Koordinaten im Code zu tippen!

### Trail (Die Linie)

In Three.js hast du Arrays manipuliert. In Unity gibt es dafür den **TrailRenderer** Component.

* Füge dem Spieler ein GameObject mit `TrailRenderer` hinzu.
* Setze `Time` auf unendlich (oder sehr hoch), damit die Spur bleibt.
* Für die "Lücken" (Gaps): Schalte den `TrailRenderer.emitting = false` kurzzeitig aus und wieder an.
* **Kollision**: Der `TrailRenderer` hat keine Kollision. Du musst einen `MeshCollider` generieren lassen (es gibt Scripts wie "TrailCollider" im Asset Store oder GitHub) oder BoxCollider an jedem Frame-Step "droppen". *Empfehlung für Performance:* BoxCollider-Methode.

---

## 6. Powerups & Logik

1. **Spawnen**:
    * Erstelle einen `PowerupSpawner.cs`.
    * Instanziere Powerup-Prefabs an zufälligen Positionen innerhalb der Arena-Grenzen.

2. **Effekte**:
    * Jedes Powerup hat ein Script `Powerup.cs`.
    * `OnTriggerEnter(Collider other)` prüft, ob der Spieler es berührt.
    * Sende dann ein Event an den `PlayerController`, um Speed/Shield/etc. zu ändern.

---

## 7. UI & HUD

Unitys UI-System (Canvas) ist sehr mächtig.

1. Erstelle ein **Canvas** in der Szene.
2. Füge Texte für Score und Inventar hinzu.
3. Erstelle das Hauptmenü als separates Canvas, das bei Spielstart aktiv ist.
4. Verbinde die Buttons mit dem `SettingsManager`, um Werte zu ändern.

---

## 8. Build & Deploy

1. Gehe zu **File -> Build Settings**.
2. Wähle **WebGL**.
3. Klicke **Switch Platform**.
4. In den **Player Settings**:
    * Aktiviere "Decompression Fallback".
5. Klicke **Build**.

Wenn du diesen Build auf deinem Webserver hostest (dort, wo auch dein jetziges Spiel liegt), wird er beim Starten sofort deine alten Highscores, Tastenbelegungen und Einstellungen finden und laden!
