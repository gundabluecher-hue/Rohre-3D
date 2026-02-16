using UnityEngine;

namespace NeonCurve3D
{
    [RequireComponent(typeof(Collider))]
    public class Powerup : MonoBehaviour
    {
        [SerializeField] private PowerupType type = PowerupType.SpeedUp;
        [SerializeField] private float durationSeconds = -1f;
        [SerializeField] private float rotationSpeed = 2f;
        [SerializeField] private float bounceSpeed = 1.5f;
        [SerializeField] private float bounceHeight = 0.5f;
        [SerializeField] private bool destroyOnPickup = true;

        private Vector3 baseLocalPosition;

        private void Awake()
        {
            baseLocalPosition = transform.localPosition;
            var trigger = GetComponent<Collider>();
            trigger.isTrigger = true;
        }

        private void Update()
        {
            transform.Rotate(Vector3.up, rotationSpeed * Mathf.Rad2Deg * Time.deltaTime, Space.World);

            var local = baseLocalPosition;
            local.y += Mathf.Sin(Time.time * bounceSpeed) * bounceHeight;
            transform.localPosition = local;
        }

        private void OnTriggerEnter(Collider other)
        {
            var player = other.GetComponentInParent<PlayerController>();
            if (player == null)
            {
                return;
            }

            player.ApplyPowerup(type, ResolveDuration(type));
            if (destroyOnPickup)
            {
                Destroy(gameObject);
            }
        }

        private float ResolveDuration(PowerupType powerupType)
        {
            if (durationSeconds > 0f)
            {
                return durationSeconds;
            }

            switch (powerupType)
            {
                case PowerupType.SpeedUp:
                    return 4f;
                case PowerupType.SlowDown:
                    return 4f;
                case PowerupType.Thick:
                    return 5f;
                case PowerupType.Thin:
                    return 5f;
                case PowerupType.Shield:
                    return 3f;
                case PowerupType.SlowTime:
                    return 4f;
                case PowerupType.Ghost:
                    return 3f;
                case PowerupType.Invert:
                    return 4f;
                default:
                    return 4f;
            }
        }
    }
}
