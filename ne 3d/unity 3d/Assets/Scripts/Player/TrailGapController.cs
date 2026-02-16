using UnityEngine;

namespace NeonCurve3D
{
    [RequireComponent(typeof(TrailRenderer))]
    public class TrailGapController : MonoBehaviour
    {
        [SerializeField] private TrailRenderer trailRenderer;
        [SerializeField] private float persistentTime = 9999f;
        [SerializeField] private float baseWidth = 0.6f;
        [SerializeField] private float widthMultiplier = 1f;
        [SerializeField] private float updateInterval = 0.05f;
        [SerializeField] private float gapChance = 0.02f;
        [SerializeField] private float gapDuration = 0.3f;
        [SerializeField] private bool startEmitting = true;

        private float updateTimer;
        private float gapTimer;
        private bool gapActive;

        public bool IsEmitting
        {
            get { return trailRenderer != null && trailRenderer.emitting; }
        }

        private void Reset()
        {
            trailRenderer = GetComponent<TrailRenderer>();
        }

        private void Awake()
        {
            if (trailRenderer == null)
            {
                trailRenderer = GetComponent<TrailRenderer>();
            }

            if (trailRenderer != null)
            {
                trailRenderer.time = persistentTime;
                trailRenderer.emitting = startEmitting;
                UpdateTrailWidth();
            }
        }

        private void Update()
        {
            if (trailRenderer == null)
            {
                return;
            }

            if (gapActive)
            {
                gapTimer -= Time.deltaTime;
                if (gapTimer <= 0f)
                {
                    gapActive = false;
                    trailRenderer.emitting = true;
                }
                return;
            }

            updateTimer += Time.deltaTime;
            while (updateTimer >= updateInterval)
            {
                updateTimer -= updateInterval;
                if (Random.value < gapChance)
                {
                    StartGap();
                    break;
                }
            }
        }

        public void ApplySettings(GameSettings settings)
        {
            if (settings == null || settings.gameplay == null)
            {
                return;
            }

            baseWidth = settings.gameplay.trailWidth;
            gapDuration = settings.gameplay.gapSize;
            gapChance = settings.gameplay.gapFrequency;
            UpdateTrailWidth();
        }

        public void SetWidthMultiplier(float value)
        {
            widthMultiplier = Mathf.Max(0.01f, value);
            UpdateTrailWidth();
        }

        public void ClearTrail()
        {
            if (trailRenderer != null)
            {
                trailRenderer.Clear();
            }
        }

        private void StartGap()
        {
            gapActive = true;
            gapTimer = gapDuration;
            trailRenderer.emitting = false;
        }

        private void UpdateTrailWidth()
        {
            if (trailRenderer != null)
            {
                trailRenderer.widthMultiplier = baseWidth * widthMultiplier;
            }
        }
    }
}
