using System;
using System.Collections.Generic;
using UnityEngine;

namespace NeonCurve3D
{
    [Serializable]
    public class ObstacleDefinition
    {
        public Vector3 position;
        public Vector3 size;

        public ObstacleDefinition()
        {
        }

        public ObstacleDefinition(Vector3 position, Vector3 size)
        {
            this.position = position;
            this.size = size;
        }
    }

    [Serializable]
    public class PortalDefinition
    {
        public Vector3 a;
        public Vector3 b;
        public Color color = Color.cyan;

        public PortalDefinition()
        {
        }

        public PortalDefinition(Vector3 a, Vector3 b, Color color)
        {
            this.a = a;
            this.b = b;
            this.color = color;
        }
    }

    [Serializable]
    public class ArenaMapDefinition
    {
        public string key = "standard";
        public string displayName = "Standard Arena";
        public Vector3 size = new Vector3(80f, 30f, 80f);
        public ObstacleDefinition[] obstacles = new ObstacleDefinition[0];
        public PortalDefinition[] portals = new PortalDefinition[0];
    }

    public class ArenaBuilder : MonoBehaviour
    {
        [SerializeField] private string mapKey = "standard";
        [SerializeField] private bool portalsEnabled = true;
        [SerializeField] private Transform arenaRoot;

        [Header("Geometry")]
        [SerializeField] private float wallThickness = 2f;
        [SerializeField] private float floorThickness = 1f;
        [SerializeField] private float portalMarkerScale = 1.5f;

        [Header("Materials")]
        [SerializeField] private Material floorMaterial;
        [SerializeField] private Material wallMaterial;
        [SerializeField] private Material obstacleMaterial;
        [SerializeField] private Material portalMaterial;

        [SerializeField] private ArenaMapDefinition[] maps = new ArenaMapDefinition[0];

        private readonly List<GameObject> generatedObjects = new List<GameObject>();
        private ArenaMapDefinition currentMap;

        public string MapKey
        {
            get { return mapKey; }
            set { mapKey = value; }
        }

        public bool PortalsEnabled
        {
            get { return portalsEnabled; }
            set { portalsEnabled = value; }
        }

        public Vector3 CurrentArenaSize
        {
            get
            {
                if (currentMap != null)
                {
                    return currentMap.size;
                }

                return new Vector3(80f, 30f, 80f);
            }
        }

        private void Awake()
        {
            EnsureMapsInitialized();
        }

        [ContextMenu("Build Arena")]
        public void Build()
        {
            EnsureMapsInitialized();
            ClearGenerated();

            currentMap = GetMapOrDefault(mapKey);
            if (currentMap == null)
            {
                Debug.LogWarning("ArenaBuilder: Keine Map-Definition verfügbar.");
                return;
            }

            var parent = arenaRoot != null ? arenaRoot : transform;
            CreateFloor(parent, currentMap.size);
            CreateBoundaryWalls(parent, currentMap.size);
            CreateObstacles(parent, currentMap.obstacles);

            if (portalsEnabled)
            {
                CreatePortals(parent, currentMap.portals);
            }
        }

        [ContextMenu("Clear Arena")]
        public void ClearGenerated()
        {
            for (var i = generatedObjects.Count - 1; i >= 0; i--)
            {
                DestroyObject(generatedObjects[i]);
            }

            generatedObjects.Clear();
        }

        private void EnsureMapsInitialized()
        {
            if (maps != null && maps.Length > 0)
            {
                return;
            }

            maps = CreateDefaultMaps();
        }

        private ArenaMapDefinition GetMapOrDefault(string key)
        {
            if (maps == null || maps.Length == 0)
            {
                return null;
            }

            for (var i = 0; i < maps.Length; i++)
            {
                if (maps[i] != null && string.Equals(maps[i].key, key, StringComparison.Ordinal))
                {
                    return maps[i];
                }
            }

            return maps[0];
        }

        private void CreateFloor(Transform parent, Vector3 arenaSize)
        {
            var floor = CreateBlock(
                "Floor",
                new Vector3(0f, -floorThickness * 0.5f, 0f),
                new Vector3(arenaSize.x, floorThickness, arenaSize.z),
                parent,
                floorMaterial);
            generatedObjects.Add(floor);
        }

        private void CreateBoundaryWalls(Transform parent, Vector3 arenaSize)
        {
            var halfX = arenaSize.x * 0.5f;
            var halfZ = arenaSize.z * 0.5f;
            var wallCenterY = arenaSize.y * 0.5f;

            var north = CreateBlock(
                "Wall_North",
                new Vector3(0f, wallCenterY, halfZ + wallThickness * 0.5f),
                new Vector3(arenaSize.x + wallThickness * 2f, arenaSize.y, wallThickness),
                parent,
                wallMaterial);
            generatedObjects.Add(north);

            var south = CreateBlock(
                "Wall_South",
                new Vector3(0f, wallCenterY, -halfZ - wallThickness * 0.5f),
                new Vector3(arenaSize.x + wallThickness * 2f, arenaSize.y, wallThickness),
                parent,
                wallMaterial);
            generatedObjects.Add(south);

            var east = CreateBlock(
                "Wall_East",
                new Vector3(halfX + wallThickness * 0.5f, wallCenterY, 0f),
                new Vector3(wallThickness, arenaSize.y, arenaSize.z),
                parent,
                wallMaterial);
            generatedObjects.Add(east);

            var west = CreateBlock(
                "Wall_West",
                new Vector3(-halfX - wallThickness * 0.5f, wallCenterY, 0f),
                new Vector3(wallThickness, arenaSize.y, arenaSize.z),
                parent,
                wallMaterial);
            generatedObjects.Add(west);
        }

        private void CreateObstacles(Transform parent, ObstacleDefinition[] obstacles)
        {
            if (obstacles == null)
            {
                return;
            }

            for (var i = 0; i < obstacles.Length; i++)
            {
                var obstacle = obstacles[i];
                if (obstacle == null)
                {
                    continue;
                }

                var block = CreateBlock(
                    "Obstacle_" + i,
                    obstacle.position,
                    obstacle.size,
                    parent,
                    obstacleMaterial);
                generatedObjects.Add(block);
            }
        }

        private void CreatePortals(Transform parent, PortalDefinition[] portals)
        {
            if (portals == null)
            {
                return;
            }

            for (var i = 0; i < portals.Length; i++)
            {
                var portal = portals[i];
                if (portal == null)
                {
                    continue;
                }

                var markerA = CreatePortalMarker("Portal_" + i + "_A", portal.a, portal.color, parent);
                var markerB = CreatePortalMarker("Portal_" + i + "_B", portal.b, portal.color, parent);
                generatedObjects.Add(markerA);
                generatedObjects.Add(markerB);

                var link = CreatePortalLink("Portal_" + i + "_Link", portal.a, portal.b, portal.color, parent);
                generatedObjects.Add(link);
            }
        }

        private GameObject CreatePortalMarker(string name, Vector3 position, Color color, Transform parent)
        {
            var marker = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
            marker.name = name;
            marker.transform.SetParent(parent, false);
            marker.transform.localPosition = position;
            marker.transform.localScale = new Vector3(portalMarkerScale, 0.2f, portalMarkerScale);

            var renderer = marker.GetComponent<Renderer>();
            ApplyMaterial(renderer, portalMaterial, color);
            return marker;
        }

        private GameObject CreatePortalLink(string name, Vector3 a, Vector3 b, Color color, Transform parent)
        {
            var link = new GameObject(name);
            link.transform.SetParent(parent, false);

            var line = link.AddComponent<LineRenderer>();
            line.positionCount = 2;
            line.SetPosition(0, a);
            line.SetPosition(1, b);
            line.widthMultiplier = 0.15f;
            line.startColor = color;
            line.endColor = color;
            line.useWorldSpace = false;

            if (portalMaterial != null)
            {
                line.material = portalMaterial;
            }
            else
            {
                var shader = Shader.Find("Sprites/Default");
                if (shader != null)
                {
                    var tempMaterial = new Material(shader);
                    tempMaterial.color = color;
                    line.material = tempMaterial;
                }
            }

            return link;
        }

        private static GameObject CreateBlock(
            string name,
            Vector3 position,
            Vector3 size,
            Transform parent,
            Material material)
        {
            var block = GameObject.CreatePrimitive(PrimitiveType.Cube);
            block.name = name;
            block.transform.SetParent(parent, false);
            block.transform.localPosition = position;
            block.transform.localScale = size;

            var renderer = block.GetComponent<Renderer>();
            if (renderer != null && material != null)
            {
                renderer.material = material;
            }

            return block;
        }

        private static void ApplyMaterial(Renderer renderer, Material material, Color fallbackColor)
        {
            if (renderer == null)
            {
                return;
            }

            if (material != null)
            {
                renderer.material = material;
                return;
            }

            var shader = Shader.Find("Standard");
            if (shader == null)
            {
                return;
            }

            var tempMaterial = new Material(shader);
            tempMaterial.color = fallbackColor;
            renderer.material = tempMaterial;
        }

        private static void DestroyObject(GameObject gameObject)
        {
            if (gameObject == null)
            {
                return;
            }

            if (Application.isPlaying)
            {
                Destroy(gameObject);
            }
            else
            {
                DestroyImmediate(gameObject);
            }
        }

        private static ArenaMapDefinition[] CreateDefaultMaps()
        {
            return new[]
            {
                new ArenaMapDefinition
                {
                    key = "standard",
                    displayName = "Standard Arena",
                    size = new Vector3(80f, 30f, 80f),
                    obstacles = new[]
                    {
                        O(0f, 5f, 0f, 4f, 10f, 4f),
                        O(20f, 5f, 20f, 3f, 10f, 3f),
                        O(-20f, 5f, -20f, 3f, 10f, 3f),
                        O(20f, 5f, -20f, 3f, 10f, 3f),
                        O(-20f, 5f, 20f, 3f, 10f, 3f),
                    },
                    portals = new[]
                    {
                        P(-30f, 12f, 0f, 30f, 12f, 0f, 0x00ffcc)
                    }
                },
                new ArenaMapDefinition
                {
                    key = "empty",
                    displayName = "Leer",
                    size = new Vector3(50f, 25f, 50f),
                    obstacles = new ObstacleDefinition[0],
                    portals = new PortalDefinition[0]
                },
                new ArenaMapDefinition
                {
                    key = "maze",
                    displayName = "Labyrinth",
                    size = new Vector3(80f, 25f, 80f),
                    obstacles = new[]
                    {
                        O(-20f, 5f, -20f, 20f, 10f, 2f),
                        O(20f, 5f, -20f, 20f, 10f, 2f),
                        O(0f, 5f, 0f, 30f, 10f, 2f),
                        O(-20f, 5f, 20f, 20f, 10f, 2f),
                        O(20f, 5f, 20f, 20f, 10f, 2f),
                        O(-20f, 5f, 0f, 2f, 10f, 20f),
                        O(20f, 5f, 0f, 2f, 10f, 20f),
                        O(0f, 5f, -20f, 2f, 10f, 15f),
                        O(0f, 5f, 20f, 2f, 10f, 15f),
                    },
                    portals = new[]
                    {
                        P(-30f, 10f, -30f, 30f, 10f, 30f, 0xff66ff),
                        P(30f, 10f, -30f, -30f, 10f, 30f, 0x66ccff),
                    }
                },
                new ArenaMapDefinition
                {
                    key = "complex",
                    displayName = "Komplex",
                    size = new Vector3(90f, 30f, 90f),
                    obstacles = new[]
                    {
                        O(0f, 5f, 0f, 6f, 12f, 6f),
                        O(-25f, 5f, -25f, 10f, 8f, 2f),
                        O(25f, 5f, -25f, 2f, 8f, 10f),
                        O(-25f, 5f, 25f, 2f, 8f, 10f),
                        O(25f, 5f, 25f, 10f, 8f, 2f),
                        O(-15f, 5f, 0f, 2f, 15f, 15f),
                        O(15f, 5f, 0f, 2f, 15f, 15f),
                        O(0f, 5f, -15f, 15f, 15f, 2f),
                        O(0f, 5f, 15f, 15f, 15f, 2f),
                        O(-30f, 3f, 0f, 5f, 6f, 5f),
                        O(30f, 3f, 0f, 5f, 6f, 5f),
                    },
                    portals = new[]
                    {
                        P(-35f, 12f, -35f, 35f, 12f, 35f, 0xffaa00),
                        P(35f, 12f, -35f, -35f, 12f, 35f, 0x00aaff),
                    }
                },
                new ArenaMapDefinition
                {
                    key = "pyramid",
                    displayName = "Pyramide",
                    size = new Vector3(80f, 35f, 80f),
                    obstacles = new[]
                    {
                        O(0f, 2f, 0f, 20f, 4f, 20f),
                        O(0f, 6f, 0f, 15f, 4f, 15f),
                        O(0f, 10f, 0f, 10f, 4f, 10f),
                        O(0f, 14f, 0f, 5f, 4f, 5f),
                        O(-30f, 5f, -30f, 3f, 10f, 3f),
                        O(30f, 5f, -30f, 3f, 10f, 3f),
                        O(-30f, 5f, 30f, 3f, 10f, 3f),
                        O(30f, 5f, 30f, 3f, 10f, 3f),
                    },
                    portals = new[]
                    {
                        P(0f, 25f, -30f, 0f, 25f, 30f, 0xff44ff),
                    }
                }
            };
        }

        private static ObstacleDefinition O(float px, float py, float pz, float sx, float sy, float sz)
        {
            return new ObstacleDefinition(new Vector3(px, py, pz), new Vector3(sx, sy, sz));
        }

        private static PortalDefinition P(float ax, float ay, float az, float bx, float by, float bz, int colorHex)
        {
            return new PortalDefinition(
                new Vector3(ax, ay, az),
                new Vector3(bx, by, bz),
                ColorFromHex(colorHex));
        }

        private static Color ColorFromHex(int hex)
        {
            var r = ((hex >> 16) & 0xff) / 255f;
            var g = ((hex >> 8) & 0xff) / 255f;
            var b = (hex & 0xff) / 255f;
            return new Color(r, g, b, 1f);
        }
    }
}
