using System.Collections.Generic;
using UnityEngine;

namespace NeonCurve3D
{
    public class TrailColliderDropper : MonoBehaviour
    {
        private struct TrailSegment
        {
            public GameObject gameObject;
            public float expiresAt;
        }

        [SerializeField] private Transform sourceTransform;
        [SerializeField] private TrailGapController trailGapController;
        [SerializeField] private Transform colliderRoot;
        [SerializeField] private float dropInterval = 0.05f;
        [SerializeField] private float baseWidth = 0.6f;
        [SerializeField] private float widthMultiplier = 1f;
        [SerializeField] private float colliderHeight = 1f;
        [SerializeField] private int maxSegments = 1400;
        [SerializeField] private float segmentLifetime = 120f;
        [SerializeField] private int colliderLayer;

        private readonly Queue<TrailSegment> segments = new Queue<TrailSegment>();
        private float dropTimer;
        private Vector3 lastPoint;
        private bool hasLastPoint;

        private void Reset()
        {
            sourceTransform = transform;
            trailGapController = GetComponentInChildren<TrailGapController>();
        }

        private void Awake()
        {
            if (sourceTransform == null)
            {
                sourceTransform = transform;
            }

            if (trailGapController == null)
            {
                trailGapController = GetComponentInChildren<TrailGapController>();
            }
        }

        private void Update()
        {
            CleanupExpiredSegments();

            if (sourceTransform == null)
            {
                return;
            }

            if (trailGapController != null && !trailGapController.IsEmitting)
            {
                hasLastPoint = false;
                dropTimer = 0f;
                return;
            }

            if (!hasLastPoint)
            {
                lastPoint = sourceTransform.position;
                hasLastPoint = true;
                return;
            }

            dropTimer += Time.deltaTime;
            if (dropTimer < dropInterval)
            {
                return;
            }

            dropTimer = 0f;
            var currentPoint = sourceTransform.position;
            CreateSegment(lastPoint, currentPoint);
            lastPoint = currentPoint;
        }

        public void ApplySettings(GameSettings settings)
        {
            if (settings == null || settings.gameplay == null)
            {
                return;
            }

            baseWidth = settings.gameplay.trailWidth;
        }

        public void SetWidthMultiplier(float value)
        {
            widthMultiplier = Mathf.Max(0.01f, value);
        }

        public void ClearColliders()
        {
            while (segments.Count > 0)
            {
                DestroySegment(segments.Dequeue().gameObject);
            }

            hasLastPoint = false;
        }

        private void CreateSegment(Vector3 start, Vector3 end)
        {
            var delta = end - start;
            var length = delta.magnitude;
            if (length < 0.01f)
            {
                return;
            }

            var segmentObject = new GameObject("TrailColliderSegment");
            var parent = colliderRoot != null ? colliderRoot : transform;
            segmentObject.transform.SetParent(parent, false);
            segmentObject.transform.position = start + delta * 0.5f;
            segmentObject.transform.rotation = Quaternion.LookRotation(delta.normalized, Vector3.up);
            segmentObject.layer = Mathf.Clamp(colliderLayer, 0, 31);

            var collider = segmentObject.AddComponent<BoxCollider>();
            collider.size = new Vector3(baseWidth * widthMultiplier, colliderHeight, length);

            var segment = new TrailSegment
            {
                gameObject = segmentObject,
                expiresAt = Time.time + segmentLifetime
            };
            segments.Enqueue(segment);

            while (segments.Count > maxSegments)
            {
                DestroySegment(segments.Dequeue().gameObject);
            }
        }

        private void CleanupExpiredSegments()
        {
            while (segments.Count > 0 && segments.Peek().expiresAt <= Time.time)
            {
                DestroySegment(segments.Dequeue().gameObject);
            }
        }

        private void DestroySegment(GameObject segment)
        {
            if (segment == null)
            {
                return;
            }

            if (Application.isPlaying)
            {
                Destroy(segment);
            }
            else
            {
                DestroyImmediate(segment);
            }
        }
    }
}
