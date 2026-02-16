#if UNITY_EDITOR
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace NeonCurve3D.EditorTools
{
    public static class NeonCurveSceneCreator
    {
        private const string ScenePath = "Assets/Scenes/NeonCurve3D_Play.unity";
        private const string MaterialFolder = "Assets/Materials";
        private const string PowerupMaterialFolder = "Assets/Materials/Powerups";
        private const string PowerupPrefabFolder = "Assets/Prefabs/Powerups";

        private struct PlayerBundle
        {
            public PlayerController Controller;
            public TrailGapController GapController;
            public TrailColliderDropper ColliderDropper;
            public Transform Transform;
        }

        [MenuItem("Tools/NeonCurve3D/Create Play Scene")]
        public static void CreatePlayScene()
        {
            if (!EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo())
            {
                return;
            }

            var scene = EditorSceneManager.NewScene(NewSceneSetup.DefaultGameObjects, NewSceneMode.Single);
            SetupSceneInternal(scene);

            EnsureFolder("Assets/Scenes");
            EditorSceneManager.SaveScene(scene, ScenePath);
            EditorSceneManager.SaveOpenScenes();
            AssetDatabase.SaveAssets();
            AssetDatabase.Refresh();

            EditorUtility.DisplayDialog(
                "NeonCurve3D",
                "Die Szene wurde erstellt: " + ScenePath + "\nDruecke jetzt Play.",
                "OK");
        }

        [MenuItem("Tools/NeonCurve3D/Setup Current Scene")]
        public static void SetupCurrentScene()
        {
            var scene = SceneManager.GetActiveScene();
            if (!scene.IsValid())
            {
                EditorUtility.DisplayDialog("NeonCurve3D", "Keine aktive Szene gefunden.", "OK");
                return;
            }

            SetupSceneInternal(scene);
            EditorSceneManager.MarkSceneDirty(scene);
            AssetDatabase.SaveAssets();
            AssetDatabase.Refresh();
            EditorUtility.DisplayDialog(
                "NeonCurve3D",
                "Aktive Szene wurde konfiguriert.\nDruecke jetzt Play.",
                "OK");
        }

        private static void SetupSceneInternal(Scene scene)
        {
            EnsureFolder(MaterialFolder);
            EnsureFolder(PowerupMaterialFolder);
            EnsureFolder(PowerupPrefabFolder);

            var gameRoot = CreateOrReplaceRoot("GameRoot");
            var settingsManager = gameRoot.AddComponent<SettingsManager>();
            var bootstrap = gameRoot.AddComponent<GameBootstrap>();

            var arenaRoot = CreateChild(gameRoot.transform, "Arena");
            var arenaBuilder = arenaRoot.AddComponent<ArenaBuilder>();
            ConfigureArenaBuilder(arenaBuilder, arenaRoot.transform);

            var powerupRoot = CreateChild(gameRoot.transform, "Powerups");
            var powerupSpawner = powerupRoot.AddComponent<PowerupSpawner>();
            ConfigurePowerupSpawner(powerupSpawner, arenaBuilder, powerupRoot.transform);

            var playersRoot = CreateChild(gameRoot.transform, "Players");
            var player1 = CreatePlayer(playersRoot.transform, "Player_1", "PLAYER_1", new Vector3(-15f, 5f, -10f), Quaternion.LookRotation(Vector3.forward), new Color(0f, 0.66f, 1f));
            var player2 = CreatePlayer(playersRoot.transform, "Player_2", "PLAYER_2", new Vector3(15f, 5f, 10f), Quaternion.LookRotation(Vector3.back), new Color(1f, 0.53f, 0f));

            ConfigureBootstrap(
                bootstrap,
                settingsManager,
                arenaBuilder,
                powerupSpawner,
                new[] { player1, player2 });

            SetupCamera(player1.Transform);
            SetupLighting();

            settingsManager.LoadSettings();
            arenaBuilder.Build();

            EditorSceneManager.MarkSceneDirty(scene);
        }

        private static void ConfigureArenaBuilder(ArenaBuilder arenaBuilder, Transform arenaRoot)
        {
            var so = new SerializedObject(arenaBuilder);
            so.FindProperty("arenaRoot").objectReferenceValue = arenaRoot;
            so.FindProperty("mapKey").stringValue = "standard";
            so.FindProperty("portalsEnabled").boolValue = true;
            so.ApplyModifiedPropertiesWithoutUndo();
        }

        private static void ConfigurePowerupSpawner(PowerupSpawner spawner, ArenaBuilder arenaBuilder, Transform root)
        {
            var prefabs = new[]
            {
                EnsurePowerupPrefab(PowerupType.SpeedUp, new Color(0f, 1f, 0.4f)),
                EnsurePowerupPrefab(PowerupType.SlowDown, new Color(1f, 0.2f, 0.2f)),
                EnsurePowerupPrefab(PowerupType.Thick, new Color(1f, 0.8f, 0f)),
                EnsurePowerupPrefab(PowerupType.Thin, new Color(0.67f, 0.27f, 1f)),
                EnsurePowerupPrefab(PowerupType.Shield, new Color(0.27f, 0.53f, 1f)),
                EnsurePowerupPrefab(PowerupType.SlowTime, new Color(0.27f, 1f, 0.53f)),
                EnsurePowerupPrefab(PowerupType.Ghost, new Color(1f, 0.4f, 0.8f)),
                EnsurePowerupPrefab(PowerupType.Invert, new Color(1f, 0f, 1f))
            };

            var so = new SerializedObject(spawner);
            so.FindProperty("arenaBuilder").objectReferenceValue = arenaBuilder;
            so.FindProperty("powerupRoot").objectReferenceValue = root;
            so.FindProperty("autoSpawn").boolValue = true;
            so.FindProperty("spawnInterval").floatValue = 3f;
            so.FindProperty("maxOnField").intValue = 8;
            so.FindProperty("spawnHeight").floatValue = 1.5f;

            var list = so.FindProperty("powerupPrefabs");
            list.arraySize = prefabs.Length;
            for (var i = 0; i < prefabs.Length; i++)
            {
                list.GetArrayElementAtIndex(i).objectReferenceValue = prefabs[i];
            }

            so.ApplyModifiedPropertiesWithoutUndo();
        }

        private static void ConfigureBootstrap(
            GameBootstrap bootstrap,
            SettingsManager settingsManager,
            ArenaBuilder arenaBuilder,
            PowerupSpawner spawner,
            PlayerBundle[] players)
        {
            var so = new SerializedObject(bootstrap);
            so.FindProperty("settingsManager").objectReferenceValue = settingsManager;
            so.FindProperty("arenaBuilder").objectReferenceValue = arenaBuilder;
            so.FindProperty("powerupSpawner").objectReferenceValue = spawner;
            so.FindProperty("rebuildArenaOnLoad").boolValue = true;

            var playerArray = so.FindProperty("players");
            playerArray.arraySize = players.Length;
            for (var i = 0; i < players.Length; i++)
            {
                playerArray.GetArrayElementAtIndex(i).objectReferenceValue = players[i].Controller;
            }

            var gapArray = so.FindProperty("trailGapControllers");
            gapArray.arraySize = players.Length;
            for (var i = 0; i < players.Length; i++)
            {
                gapArray.GetArrayElementAtIndex(i).objectReferenceValue = players[i].GapController;
            }

            var dropArray = so.FindProperty("trailColliderDroppers");
            dropArray.arraySize = players.Length;
            for (var i = 0; i < players.Length; i++)
            {
                dropArray.GetArrayElementAtIndex(i).objectReferenceValue = players[i].ColliderDropper;
            }

            so.ApplyModifiedPropertiesWithoutUndo();
        }

        private static PlayerBundle CreatePlayer(
            Transform parent,
            string name,
            string playerKey,
            Vector3 position,
            Quaternion rotation,
            Color color)
        {
            var player = GameObject.CreatePrimitive(PrimitiveType.Capsule);
            player.name = name;
            player.transform.SetParent(parent, false);
            player.transform.position = position;
            player.transform.rotation = rotation;

            var rb = player.AddComponent<Rigidbody>();
            rb.useGravity = false;
            rb.isKinematic = true;

            var renderer = player.GetComponent<Renderer>();
            if (renderer != null)
            {
                renderer.sharedMaterial = GetOrCreateMaterial(
                    MaterialFolder + "/" + name + "_Body.mat",
                    color,
                    false);
            }

            var trail = player.AddComponent<TrailRenderer>();
            ConfigureTrailRenderer(trail, color, name);

            var gapController = player.AddComponent<TrailGapController>();
            var colliderDropper = player.AddComponent<TrailColliderDropper>();
            var controller = player.AddComponent<PlayerController>();

            var dropperSo = new SerializedObject(colliderDropper);
            dropperSo.FindProperty("sourceTransform").objectReferenceValue = player.transform;
            dropperSo.FindProperty("trailGapController").objectReferenceValue = gapController;
            dropperSo.FindProperty("colliderRoot").objectReferenceValue = parent;
            dropperSo.ApplyModifiedPropertiesWithoutUndo();

            var controllerSo = new SerializedObject(controller);
            controllerSo.FindProperty("playerKey").stringValue = playerKey;
            controllerSo.FindProperty("modelRoot").objectReferenceValue = player.transform;
            controllerSo.FindProperty("trailGapController").objectReferenceValue = gapController;
            controllerSo.FindProperty("trailColliderDropper").objectReferenceValue = colliderDropper;
            controllerSo.ApplyModifiedPropertiesWithoutUndo();

            return new PlayerBundle
            {
                Controller = controller,
                GapController = gapController,
                ColliderDropper = colliderDropper,
                Transform = player.transform
            };
        }

        private static void ConfigureTrailRenderer(TrailRenderer trail, Color color, string id)
        {
            trail.time = 9999f;
            trail.minVertexDistance = 0.05f;
            trail.widthMultiplier = 0.6f;
            trail.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
            trail.receiveShadows = false;
            trail.numCornerVertices = 2;
            trail.numCapVertices = 2;
            trail.generateLightingData = false;
            trail.emitting = true;

            var gradient = new Gradient();
            gradient.SetKeys(
                new[]
                {
                    new GradientColorKey(color, 0f),
                    new GradientColorKey(color, 1f),
                },
                new[]
                {
                    new GradientAlphaKey(0.95f, 0f),
                    new GradientAlphaKey(0.95f, 1f),
                });
            trail.colorGradient = gradient;
            trail.sharedMaterial = GetOrCreateMaterial(
                MaterialFolder + "/" + id + "_Trail.mat",
                color,
                true);
        }

        private static void SetupCamera(Transform followTarget)
        {
            var camera = Camera.main;
            if (camera == null)
            {
                var cameraGo = new GameObject("Main Camera");
                cameraGo.tag = "MainCamera";
                camera = cameraGo.AddComponent<Camera>();
            }

            var follow = camera.GetComponent<SimpleFollowCamera>();
            if (follow == null)
            {
                follow = camera.gameObject.AddComponent<SimpleFollowCamera>();
            }

            var so = new SerializedObject(follow);
            so.FindProperty("target").objectReferenceValue = followTarget;
            so.ApplyModifiedPropertiesWithoutUndo();

            camera.transform.position = followTarget.position + new Vector3(0f, 6f, -12f);
            camera.transform.LookAt(followTarget.position + followTarget.forward * 5f);
            camera.fieldOfView = 75f;
        }

        private static void SetupLighting()
        {
            var lights = Object.FindObjectsOfType<Light>();
            var hasDirectional = false;
            for (var i = 0; i < lights.Length; i++)
            {
                if (lights[i].type == LightType.Directional)
                {
                    hasDirectional = true;
                    lights[i].intensity = 1f;
                    lights[i].transform.rotation = Quaternion.Euler(40f, -30f, 0f);
                }
            }

            if (!hasDirectional)
            {
                var directional = new GameObject("Directional Light");
                var light = directional.AddComponent<Light>();
                light.type = LightType.Directional;
                light.intensity = 1f;
                directional.transform.rotation = Quaternion.Euler(40f, -30f, 0f);
            }
        }

        private static Powerup EnsurePowerupPrefab(PowerupType type, Color color)
        {
            var prefabPath = PowerupPrefabFolder + "/Powerup_" + type + ".prefab";
            var prefabRoot = AssetDatabase.LoadAssetAtPath<GameObject>(prefabPath);
            if (prefabRoot == null)
            {
                var temp = GameObject.CreatePrimitive(PrimitiveType.Sphere);
                temp.name = "Powerup_" + type;
                temp.transform.localScale = Vector3.one * 1.5f;

                var sphere = temp.GetComponent<SphereCollider>();
                if (sphere != null)
                {
                    sphere.isTrigger = true;
                }

                var renderer = temp.GetComponent<Renderer>();
                if (renderer != null)
                {
                    renderer.sharedMaterial = GetOrCreateMaterial(
                        PowerupMaterialFolder + "/Powerup_" + type + ".mat",
                        color,
                        true);
                }

                var powerup = temp.AddComponent<Powerup>();
                SetPowerupType(powerup, type);

                prefabRoot = PrefabUtility.SaveAsPrefabAsset(temp, prefabPath);
                Object.DestroyImmediate(temp);
            }

            var prefabPowerup = prefabRoot.GetComponent<Powerup>();
            if (prefabPowerup != null)
            {
                SetPowerupType(prefabPowerup, type);
                EditorUtility.SetDirty(prefabPowerup);
            }

            return prefabPowerup;
        }

        private static void SetPowerupType(Powerup powerup, PowerupType type)
        {
            if (powerup == null)
            {
                return;
            }

            var so = new SerializedObject(powerup);
            var prop = so.FindProperty("type");
            if (prop != null)
            {
                prop.enumValueIndex = (int)type;
            }
            so.ApplyModifiedPropertiesWithoutUndo();
        }

        private static Material GetOrCreateMaterial(string path, Color color, bool emissive)
        {
            var material = AssetDatabase.LoadAssetAtPath<Material>(path);
            if (material == null)
            {
                var shader = Shader.Find("Universal Render Pipeline/Lit");
                if (shader == null)
                {
                    shader = Shader.Find("Standard");
                }

                material = new Material(shader);
                AssetDatabase.CreateAsset(material, path);
            }

            material.color = color;
            if (emissive)
            {
                material.EnableKeyword("_EMISSION");
                material.SetColor("_EmissionColor", color * 0.8f);
            }
            else
            {
                material.DisableKeyword("_EMISSION");
            }

            EditorUtility.SetDirty(material);
            return material;
        }

        private static GameObject CreateOrReplaceRoot(string name)
        {
            var existing = GameObject.Find(name);
            if (existing != null)
            {
                Object.DestroyImmediate(existing);
            }

            return new GameObject(name);
        }

        private static GameObject CreateChild(Transform parent, string name)
        {
            var child = new GameObject(name);
            child.transform.SetParent(parent, false);
            return child;
        }

        private static void EnsureFolder(string folderPath)
        {
            if (AssetDatabase.IsValidFolder(folderPath))
            {
                return;
            }

            var parts = folderPath.Split('/');
            var current = parts[0];
            for (var i = 1; i < parts.Length; i++)
            {
                var next = current + "/" + parts[i];
                if (!AssetDatabase.IsValidFolder(next))
                {
                    AssetDatabase.CreateFolder(current, parts[i]);
                }

                current = next;
            }
        }
    }
}
#endif
