using System.Collections.Generic;
using UnityEngine;

namespace NeonCurve3D
{
    public class PowerupSpawner : MonoBehaviour
    {
        [SerializeField] private ArenaBuilder arenaBuilder;
        [SerializeField] private Transform powerupRoot;
        [SerializeField] private List<Powerup> powerupPrefabs = new List<Powerup>();
        [SerializeField] private float spawnInterval = 3f;
        [SerializeField] private int maxOnField = 8;
        [SerializeField] private float spawnHeight = 1.5f;
        [SerializeField] private float edgePadding = 2f;
        [SerializeField] private bool autoSpawn = true;

        private readonly List<Powerup> spawnedPowerups = new List<Powerup>();
        private float spawnTimer;

        private void Awake()
        {
            if (arenaBuilder == null)
            {
                arenaBuilder = FindObjectOfType<ArenaBuilder>();
            }
        }

        private void Update()
        {
            if (!autoSpawn || powerupPrefabs.Count == 0)
            {
                return;
            }

            CleanupNullEntries();
            spawnTimer += Time.deltaTime;
            if (spawnTimer < spawnInterval)
            {
                return;
            }

            spawnTimer = 0f;
            if (spawnedPowerups.Count >= maxOnField)
            {
                return;
            }

            SpawnOne();
        }

        public void ApplySettings(GameSettings settings)
        {
            if (settings == null || settings.gameplay == null)
            {
                return;
            }

            maxOnField = Mathf.Clamp(Mathf.RoundToInt(settings.gameplay.itemAmount), 1, 20);
        }

        public void SpawnOne()
        {
            if (powerupPrefabs.Count == 0)
            {
                return;
            }

            var prefab = powerupPrefabs[Random.Range(0, powerupPrefabs.Count)];
            if (prefab == null)
            {
                return;
            }

            var parent = powerupRoot != null ? powerupRoot : transform;
            var instance = Instantiate(prefab, ResolveSpawnPosition(), Quaternion.identity, parent);
            spawnedPowerups.Add(instance);
        }

        public void Clear()
        {
            for (var i = 0; i < spawnedPowerups.Count; i++)
            {
                if (spawnedPowerups[i] != null)
                {
                    Destroy(spawnedPowerups[i].gameObject);
                }
            }

            spawnedPowerups.Clear();
            spawnTimer = 0f;
        }

        private Vector3 ResolveSpawnPosition()
        {
            var size = arenaBuilder != null ? arenaBuilder.CurrentArenaSize : new Vector3(80f, 30f, 80f);
            var halfX = Mathf.Max(1f, size.x * 0.5f - edgePadding);
            var halfZ = Mathf.Max(1f, size.z * 0.5f - edgePadding);

            return new Vector3(
                Random.Range(-halfX, halfX),
                spawnHeight,
                Random.Range(-halfZ, halfZ));
        }

        private void CleanupNullEntries()
        {
            for (var i = spawnedPowerups.Count - 1; i >= 0; i--)
            {
                if (spawnedPowerups[i] == null)
                {
                    spawnedPowerups.RemoveAt(i);
                }
            }
        }
    }
}
