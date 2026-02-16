using System;
using UnityEngine;

namespace NeonCurve3D
{
    [Serializable]
    public class PlayerToggleSettings
    {
        public bool PLAYER_1;
        public bool PLAYER_2;

        public PlayerToggleSettings()
        {
            PLAYER_1 = false;
            PLAYER_2 = false;
        }
    }

    [Serializable]
    public class GameplaySettings
    {
        public float speed = 18f;
        public float turnSensitivity = 2.2f;
        public float planeScale = 1f;
        public float trailWidth = 0.6f;
        public float gapSize = 0.3f;
        public float gapFrequency = 0.02f;
        public int itemAmount = 8;
        public float fireRate = 0.45f;
        public int lockOnAngle = 15;
    }

    [Serializable]
    public class PlayerControls
    {
        public string UP;
        public string DOWN;
        public string LEFT;
        public string RIGHT;
        public string ROLL_LEFT;
        public string ROLL_RIGHT;
        public string BOOST;
        public string SHOOT;
        public string NEXT_ITEM;
        public string DROP;
        public string CAMERA;

        public static PlayerControls CreatePlayer1Defaults()
        {
            return new PlayerControls
            {
                UP = "KeyW",
                DOWN = "KeyS",
                LEFT = "KeyA",
                RIGHT = "KeyD",
                ROLL_LEFT = "KeyQ",
                ROLL_RIGHT = "KeyE",
                BOOST = "ShiftLeft",
                SHOOT = "KeyF",
                NEXT_ITEM = "KeyR",
                DROP = "KeyG",
                CAMERA = "KeyC"
            };
        }

        public static PlayerControls CreatePlayer2Defaults()
        {
            return new PlayerControls
            {
                UP = "ArrowUp",
                DOWN = "ArrowDown",
                LEFT = "ArrowLeft",
                RIGHT = "ArrowRight",
                ROLL_LEFT = "KeyN",
                ROLL_RIGHT = "KeyM",
                BOOST = "ShiftRight",
                SHOOT = "KeyJ",
                NEXT_ITEM = "KeyL",
                DROP = "KeyH",
                CAMERA = "KeyV"
            };
        }

        public void ApplyFallback(PlayerControls fallback)
        {
            if (fallback == null)
            {
                return;
            }

            UP = Choose(UP, fallback.UP);
            DOWN = Choose(DOWN, fallback.DOWN);
            LEFT = Choose(LEFT, fallback.LEFT);
            RIGHT = Choose(RIGHT, fallback.RIGHT);
            ROLL_LEFT = Choose(ROLL_LEFT, fallback.ROLL_LEFT);
            ROLL_RIGHT = Choose(ROLL_RIGHT, fallback.ROLL_RIGHT);
            BOOST = Choose(BOOST, fallback.BOOST);
            SHOOT = Choose(SHOOT, fallback.SHOOT);
            NEXT_ITEM = Choose(NEXT_ITEM, fallback.NEXT_ITEM);
            DROP = Choose(DROP, fallback.DROP);
            CAMERA = Choose(CAMERA, fallback.CAMERA);
        }

        private static string Choose(string value, string fallback)
        {
            return string.IsNullOrWhiteSpace(value) ? fallback : value;
        }
    }

    [Serializable]
    public class ControlSettings
    {
        public PlayerControls PLAYER_1 = PlayerControls.CreatePlayer1Defaults();
        public PlayerControls PLAYER_2 = PlayerControls.CreatePlayer2Defaults();
    }

    [Serializable]
    public class GameSettings
    {
        public string mode = "1p";
        public string mapKey = "standard";
        public int numBots = 1;
        public int winsNeeded = 5;
        public bool autoRoll = true;
        public PlayerToggleSettings invertPitch = new PlayerToggleSettings();
        public PlayerToggleSettings cockpitCamera = new PlayerToggleSettings();
        public bool portalsEnabled = true;
        public GameplaySettings gameplay = new GameplaySettings();
        public ControlSettings controls = new ControlSettings();

        public static GameSettings CreateDefaults()
        {
            return new GameSettings
            {
                mode = "1p",
                mapKey = "standard",
                numBots = 1,
                winsNeeded = 5,
                autoRoll = true,
                invertPitch = new PlayerToggleSettings
                {
                    PLAYER_1 = false,
                    PLAYER_2 = false
                },
                cockpitCamera = new PlayerToggleSettings
                {
                    PLAYER_1 = false,
                    PLAYER_2 = false
                },
                portalsEnabled = true,
                gameplay = new GameplaySettings
                {
                    speed = 18f,
                    turnSensitivity = 2.2f,
                    planeScale = 1f,
                    trailWidth = 0.6f,
                    gapSize = 0.3f,
                    gapFrequency = 0.02f,
                    itemAmount = 8,
                    fireRate = 0.45f,
                    lockOnAngle = 15
                },
                controls = new ControlSettings
                {
                    PLAYER_1 = PlayerControls.CreatePlayer1Defaults(),
                    PLAYER_2 = PlayerControls.CreatePlayer2Defaults()
                }
            };
        }

        public GameSettings Clone()
        {
            return JsonUtility.FromJson<GameSettings>(JsonUtility.ToJson(this));
        }

        public void NormalizeWithDefaults(GameSettings defaults)
        {
            if (defaults == null)
            {
                defaults = CreateDefaults();
            }

            if (mode != "1p" && mode != "2p")
            {
                mode = defaults.mode;
            }

            if (string.IsNullOrWhiteSpace(mapKey))
            {
                mapKey = defaults.mapKey;
            }

            numBots = Mathf.Clamp(numBots, 0, 8);
            winsNeeded = Mathf.Clamp(winsNeeded, 1, 15);

            if (invertPitch == null)
            {
                invertPitch = new PlayerToggleSettings();
            }

            if (cockpitCamera == null)
            {
                cockpitCamera = new PlayerToggleSettings();
            }

            if (gameplay == null)
            {
                gameplay = new GameplaySettings();
            }

            gameplay.speed = Mathf.Clamp(gameplay.speed, 8f, 40f);
            gameplay.turnSensitivity = Mathf.Clamp(gameplay.turnSensitivity, 0.8f, 5f);
            gameplay.planeScale = Mathf.Clamp(gameplay.planeScale, 0.6f, 2f);
            gameplay.trailWidth = Mathf.Clamp(gameplay.trailWidth, 0.2f, 2.5f);
            gameplay.gapSize = Mathf.Clamp(gameplay.gapSize, 0.05f, 1.5f);
            gameplay.gapFrequency = Mathf.Clamp(gameplay.gapFrequency, 0f, 0.25f);
            gameplay.itemAmount = Mathf.Clamp(gameplay.itemAmount, 1, 20);
            gameplay.fireRate = Mathf.Clamp(gameplay.fireRate, 0.1f, 2f);
            gameplay.lockOnAngle = Mathf.Clamp(gameplay.lockOnAngle, 5, 45);

            if (controls == null)
            {
                controls = new ControlSettings();
            }

            if (controls.PLAYER_1 == null)
            {
                controls.PLAYER_1 = PlayerControls.CreatePlayer1Defaults();
            }

            if (controls.PLAYER_2 == null)
            {
                controls.PLAYER_2 = PlayerControls.CreatePlayer2Defaults();
            }

            controls.PLAYER_1.ApplyFallback(defaults.controls.PLAYER_1);
            controls.PLAYER_2.ApplyFallback(defaults.controls.PLAYER_2);
        }

        public PlayerControls GetPlayerControls(string playerKey)
        {
            if (string.Equals(playerKey, "PLAYER_2", StringComparison.OrdinalIgnoreCase))
            {
                return controls.PLAYER_2;
            }

            return controls.PLAYER_1;
        }

        public bool GetInvertPitch(string playerKey)
        {
            if (string.Equals(playerKey, "PLAYER_2", StringComparison.OrdinalIgnoreCase))
            {
                return invertPitch.PLAYER_2;
            }

            return invertPitch.PLAYER_1;
        }

        public bool GetCockpitCamera(string playerKey)
        {
            if (string.Equals(playerKey, "PLAYER_2", StringComparison.OrdinalIgnoreCase))
            {
                return cockpitCamera.PLAYER_2;
            }

            return cockpitCamera.PLAYER_1;
        }
    }
}
