using UnityEngine;

namespace NeonCurve3D
{
    public class GameBootstrap : MonoBehaviour
    {
        [SerializeField] private SettingsManager settingsManager;
        [SerializeField] private ArenaBuilder arenaBuilder;
        [SerializeField] private PowerupSpawner powerupSpawner;
        [SerializeField] private PlayerController[] players = new PlayerController[0];
        [SerializeField] private TrailGapController[] trailGapControllers = new TrailGapController[0];
        [SerializeField] private TrailColliderDropper[] trailColliderDroppers = new TrailColliderDropper[0];
        [SerializeField] private bool rebuildArenaOnLoad = true;

        private void Awake()
        {
            if (settingsManager == null)
            {
                settingsManager = FindObjectOfType<SettingsManager>();
            }
        }

        private void OnEnable()
        {
            if (settingsManager != null)
            {
                settingsManager.SettingsLoaded += OnSettingsLoaded;
            }
        }

        private void OnDisable()
        {
            if (settingsManager != null)
            {
                settingsManager.SettingsLoaded -= OnSettingsLoaded;
            }
        }

        private void Start()
        {
            if (settingsManager == null)
            {
                Debug.LogWarning("GameBootstrap: Kein SettingsManager gefunden.");
                return;
            }

            if (settingsManager.CurrentSettings == null)
            {
                settingsManager.LoadSettings();
                return;
            }

            ApplySettings(settingsManager.CurrentSettings);
        }

        public void ReloadSettings()
        {
            if (settingsManager == null)
            {
                return;
            }

            settingsManager.LoadSettings();
        }

        public void SaveSettings()
        {
            if (settingsManager == null)
            {
                return;
            }

            settingsManager.SaveSettings();
        }

        private void OnSettingsLoaded(GameSettings settings)
        {
            ApplySettings(settings);
        }

        private void ApplySettings(GameSettings settings)
        {
            if (settings == null)
            {
                return;
            }

            if (arenaBuilder != null)
            {
                arenaBuilder.MapKey = settings.mapKey;
                arenaBuilder.PortalsEnabled = settings.portalsEnabled;
                if (rebuildArenaOnLoad)
                {
                    arenaBuilder.Build();
                }
            }

            if (powerupSpawner != null)
            {
                powerupSpawner.ApplySettings(settings);
            }

            for (var i = 0; i < players.Length; i++)
            {
                if (players[i] != null)
                {
                    players[i].ApplySettings(settings);
                }
            }

            for (var i = 0; i < trailGapControllers.Length; i++)
            {
                if (trailGapControllers[i] != null)
                {
                    trailGapControllers[i].ApplySettings(settings);
                }
            }

            for (var i = 0; i < trailColliderDroppers.Length; i++)
            {
                if (trailColliderDroppers[i] != null)
                {
                    trailColliderDroppers[i].ApplySettings(settings);
                }
            }
        }
    }
}
