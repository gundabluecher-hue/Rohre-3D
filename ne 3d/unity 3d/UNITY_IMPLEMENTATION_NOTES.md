# Unity Implementierungsstand

Umgesetzt wurde eine lauffaehige Baseline fuer die Migration unter `Assets/`:

- `Assets/Plugins/LocalStorage.jslib`
- `Assets/Scripts/Core/*`
- `Assets/Scripts/Player/*`
- `Assets/Scripts/Powerups/*`
- `Assets/Scripts/Arena/ArenaBuilder.cs`

## Enthaltene Funktionen

1. Browser-Settings Import/Export (WebGL) mit dem bestehenden Key `mini-curve-fever-3d.settings.v3`.
2. C#-Settingsmodell, kompatibel zum JSON-Schema aus `js/main.js`.
3. Player-Steuerung mit konfigurierbaren Keybindings (Web-Code -> Unity KeyCode Mapping).
4. Trail mit Gap-Logik (`TrailRenderer.emitting`) und optionalen BoxCollider-Segmenten.
5. Powerup-Pickup + Timer-Effekte (Speed, Slow, Thick, Thin, Shield, SlowTime, Ghost, Invert).
6. ArenaBuilder mit Maps: `standard`, `empty`, `maze`, `complex`, `pyramid` (inkl. Portale).
7. Bootstrap-Script, das Settings auf Arena/Player/Trail/Powerups anwendet.

## Schnellstart im Unity Editor

1. Leeres Objekt `GameRoot` erstellen.
2. `SettingsManager` und `GameBootstrap` an `GameRoot` haengen.
3. Arena-Objekt erstellen und `ArenaBuilder` zuweisen.
4. Spielerobjekte erstellen, jeweils `PlayerController` + `TrailGapController` + optional `TrailColliderDropper` setzen.
5. `GameBootstrap` Referenzen fuellen (`settingsManager`, `arenaBuilder`, `players`, Trail-Scripts, optional `powerupSpawner`).
6. Fuer WebGL Build sicherstellen, dass `LocalStorage.jslib` im Projekt enthalten ist.

## Hinweis

Dieses Paket ist bewusst als solide Portierungsbasis aufgebaut. Prefabs, Materialien, UI und Feintuning der Effekte werden im Editor aufgesetzt.

## Neuer One-Click Setup (kein manuelles Verkabeln mehr)

Im Unity Editor gibt es jetzt Menuepunkte:

- `Tools -> NeonCurve3D -> Create Play Scene`
- `Tools -> NeonCurve3D -> Setup Current Scene`

`Create Play Scene` erzeugt automatisch:

1. `Assets/Scenes/NeonCurve3D_Play.unity`
2. `GameRoot` mit `SettingsManager` + `GameBootstrap`
3. Arena + Map-Builder
4. Zwei Spieler mit Controller, Trail und Trail-Kollision
5. Kamera-Follow auf Spieler 1
6. Powerup-Prefabs und Spawner

Danach direkt `Play` druecken.
