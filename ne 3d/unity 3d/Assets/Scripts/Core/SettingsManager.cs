using System;
using System.Runtime.InteropServices;
using UnityEngine;

namespace NeonCurve3D
{
    public class SettingsManager : MonoBehaviour
    {
        public const string StorageKey = "mini-curve-fever-3d.settings.v3";

        [SerializeField] private bool loadOnAwake = true;
        [SerializeField] private bool saveOnApplicationQuit = true;
        [SerializeField] private GameSettings currentSettings = new GameSettings();

        public GameSettings CurrentSettings
        {
            get { return currentSettings; }
        }

        public event Action<GameSettings> SettingsLoaded;
        public event Action<GameSettings> SettingsSaved;

#if UNITY_WEBGL && !UNITY_EDITOR
        [DllImport("__Internal")]
        private static extern IntPtr LoadWebSettings();

        [DllImport("__Internal")]
        private static extern void SaveWebSettings(string json);

        [DllImport("__Internal")]
        private static extern void FreeWebBuffer(IntPtr ptr);
#endif

        private void Awake()
        {
            if (loadOnAwake)
            {
                LoadSettings();
            }
        }

        private void OnApplicationQuit()
        {
            if (saveOnApplicationQuit)
            {
                SaveSettings();
            }
        }

        public void LoadSettings()
        {
            var defaults = GameSettings.CreateDefaults();
            currentSettings = defaults.Clone();

            var json = LoadSettingsJson();
            if (!string.IsNullOrWhiteSpace(json))
            {
                try
                {
                    JsonUtility.FromJsonOverwrite(json, currentSettings);
                }
                catch (Exception ex)
                {
                    Debug.LogWarning("Settings konnten nicht gelesen werden: " + ex.Message);
                    currentSettings = defaults.Clone();
                }
            }

            currentSettings.NormalizeWithDefaults(defaults);
            SettingsLoaded?.Invoke(currentSettings);
        }

        public void SaveSettings()
        {
            if (currentSettings == null)
            {
                currentSettings = GameSettings.CreateDefaults();
            }

            currentSettings.NormalizeWithDefaults(GameSettings.CreateDefaults());
            var json = JsonUtility.ToJson(currentSettings);
            SaveSettingsJson(json);
            SettingsSaved?.Invoke(currentSettings);
        }

        public void SetSettings(GameSettings newSettings, bool saveImmediately = true)
        {
            var defaults = GameSettings.CreateDefaults();
            currentSettings = newSettings != null ? newSettings.Clone() : defaults.Clone();
            currentSettings.NormalizeWithDefaults(defaults);

            if (saveImmediately)
            {
                SaveSettings();
            }
            else
            {
                SettingsLoaded?.Invoke(currentSettings);
            }
        }

        private static string LoadSettingsJson()
        {
#if UNITY_WEBGL && !UNITY_EDITOR
            IntPtr ptr = IntPtr.Zero;
            try
            {
                ptr = LoadWebSettings();
                if (ptr == IntPtr.Zero)
                {
                    return string.Empty;
                }

                var json = Marshal.PtrToStringAnsi(ptr);
                return json ?? string.Empty;
            }
            catch (Exception ex)
            {
                Debug.LogWarning("WebGL-Settings konnten nicht geladen werden: " + ex.Message);
                return string.Empty;
            }
            finally
            {
                if (ptr != IntPtr.Zero)
                {
                    FreeWebBuffer(ptr);
                }
            }
#else
            return PlayerPrefs.GetString(StorageKey, string.Empty);
#endif
        }

        private static void SaveSettingsJson(string json)
        {
#if UNITY_WEBGL && !UNITY_EDITOR
            try
            {
                SaveWebSettings(json ?? "{}");
            }
            catch (Exception ex)
            {
                Debug.LogWarning("WebGL-Settings konnten nicht gespeichert werden: " + ex.Message);
            }
#else
            PlayerPrefs.SetString(StorageKey, json ?? "{}");
            PlayerPrefs.Save();
#endif
        }
    }
}
