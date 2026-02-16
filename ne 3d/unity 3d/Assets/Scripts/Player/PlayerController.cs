using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace NeonCurve3D
{
    public class PlayerController : MonoBehaviour
    {
        [Header("Identity")]
        [SerializeField] private string playerKey = "PLAYER_1";

        [Header("Movement")]
        [SerializeField] private float speed = 18f;
        [SerializeField] private float turnSpeed = 2.2f;
        [SerializeField] private float rollSpeed = 2f;
        [SerializeField] private float boostMultiplier = 1.8f;
        [SerializeField] private float autoRollSpeed = 1.5f;
        [SerializeField] private bool autoRoll = true;
        [SerializeField] private bool invertPitch;
        [SerializeField] private bool useRigidbody;
        [SerializeField] private Rigidbody body;

        [Header("Visuals")]
        [SerializeField] private Transform modelRoot;
        [SerializeField] private TrailGapController trailGapController;
        [SerializeField] private TrailColliderDropper trailColliderDropper;

        [Header("Fallback Bindings")]
        [SerializeField] private KeyCode upKey = KeyCode.W;
        [SerializeField] private KeyCode downKey = KeyCode.S;
        [SerializeField] private KeyCode leftKey = KeyCode.A;
        [SerializeField] private KeyCode rightKey = KeyCode.D;
        [SerializeField] private KeyCode rollLeftKey = KeyCode.Q;
        [SerializeField] private KeyCode rollRightKey = KeyCode.E;
        [SerializeField] private KeyCode boostKey = KeyCode.LeftShift;
        [SerializeField] private KeyCode shootKey = KeyCode.F;
        [SerializeField] private KeyCode nextItemKey = KeyCode.R;
        [SerializeField] private KeyCode dropItemKey = KeyCode.G;
        [SerializeField] private KeyCode cameraKey = KeyCode.C;

        private bool speedUpActive;
        private bool slowDownActive;
        private bool thickTrailActive;
        private bool thinTrailActive;
        private bool shieldActive;
        private bool ghostActive;
        private bool invertControlsActive;
        private readonly Dictionary<PowerupType, Coroutine> activeEffects = new Dictionary<PowerupType, Coroutine>();

        public bool ShieldActive
        {
            get { return shieldActive; }
        }

        public bool GhostActive
        {
            get { return ghostActive; }
        }

        private void Reset()
        {
            body = GetComponent<Rigidbody>();
            trailGapController = GetComponentInChildren<TrailGapController>();
            trailColliderDropper = GetComponentInChildren<TrailColliderDropper>();
        }

        private void Update()
        {
            var dt = Time.deltaTime;
            MoveForward(dt);
            RotatePlayer(dt);
        }

        public void ApplySettings(GameSettings settings)
        {
            if (settings == null || settings.gameplay == null)
            {
                return;
            }

            speed = settings.gameplay.speed;
            turnSpeed = settings.gameplay.turnSensitivity;
            autoRoll = settings.autoRoll;
            invertPitch = settings.GetInvertPitch(playerKey);

            if (modelRoot != null)
            {
                modelRoot.localScale = Vector3.one * settings.gameplay.planeScale;
            }

            if (trailGapController != null)
            {
                trailGapController.ApplySettings(settings);
            }

            if (trailColliderDropper != null)
            {
                trailColliderDropper.ApplySettings(settings);
            }

            var controls = settings.GetPlayerControls(playerKey);
            if (controls == null)
            {
                return;
            }

            upKey = MapOrFallback(controls.UP, upKey);
            downKey = MapOrFallback(controls.DOWN, downKey);
            leftKey = MapOrFallback(controls.LEFT, leftKey);
            rightKey = MapOrFallback(controls.RIGHT, rightKey);
            rollLeftKey = MapOrFallback(controls.ROLL_LEFT, rollLeftKey);
            rollRightKey = MapOrFallback(controls.ROLL_RIGHT, rollRightKey);
            boostKey = MapOrFallback(controls.BOOST, boostKey);
            shootKey = MapOrFallback(controls.SHOOT, shootKey);
            nextItemKey = MapOrFallback(controls.NEXT_ITEM, nextItemKey);
            dropItemKey = MapOrFallback(controls.DROP, dropItemKey);
            cameraKey = MapOrFallback(controls.CAMERA, cameraKey);
        }

        public void ApplyPowerup(PowerupType type, float durationSeconds)
        {
            if (durationSeconds <= 0f)
            {
                durationSeconds = 0.01f;
            }

            if (activeEffects.TryGetValue(type, out var routine) && routine != null)
            {
                StopCoroutine(routine);
            }

            activeEffects[type] = StartCoroutine(RunTimedEffect(type, durationSeconds));
        }

        public bool WasShootPressed()
        {
            return Input.GetKeyDown(shootKey);
        }

        public bool WasNextItemPressed()
        {
            return Input.GetKeyDown(nextItemKey);
        }

        public bool WasDropPressed()
        {
            return Input.GetKeyDown(dropItemKey);
        }

        public bool WasCameraTogglePressed()
        {
            return Input.GetKeyDown(cameraKey);
        }

        private void OnDisable()
        {
            foreach (var pair in activeEffects)
            {
                if (pair.Value != null)
                {
                    StopCoroutine(pair.Value);
                }
            }

            activeEffects.Clear();
            speedUpActive = false;
            slowDownActive = false;
            thickTrailActive = false;
            thinTrailActive = false;
            shieldActive = false;
            ghostActive = false;
            invertControlsActive = false;
            RefreshTrailWidthModifier();
        }

        private void MoveForward(float dt)
        {
            var currentSpeed = speed * ResolveSpeedMultiplier();
            var delta = transform.forward * currentSpeed * dt;

            if (useRigidbody && body != null)
            {
                body.MovePosition(body.position + delta);
                return;
            }

            transform.position += delta;
        }

        private void RotatePlayer(float dt)
        {
            var yawInput = GetAxis(leftKey, rightKey);
            var pitchInput = GetAxis(downKey, upKey);
            var rollInput = GetAxis(rollLeftKey, rollRightKey);

            if (invertPitch)
            {
                pitchInput = -pitchInput;
            }

            if (invertControlsActive)
            {
                yawInput = -yawInput;
                pitchInput = -pitchInput;
            }

            var turnDegPerSecond = turnSpeed * Mathf.Rad2Deg;
            var rollDegPerSecond = rollSpeed * Mathf.Rad2Deg;

            transform.Rotate(Vector3.right, pitchInput * turnDegPerSecond * dt, Space.Self);
            transform.Rotate(Vector3.up, yawInput * turnDegPerSecond * dt, Space.Self);

            if (Mathf.Abs(rollInput) > 0.001f)
            {
                transform.Rotate(Vector3.forward, -rollInput * rollDegPerSecond * dt, Space.Self);
            }
            else if (autoRoll)
            {
                var targetNoRoll = Quaternion.LookRotation(transform.forward, Vector3.up);
                transform.rotation = Quaternion.Slerp(transform.rotation, targetNoRoll, autoRollSpeed * dt);
            }
        }

        private float ResolveSpeedMultiplier()
        {
            var multiplier = Input.GetKey(boostKey) ? boostMultiplier : 1f;

            if (speedUpActive)
            {
                multiplier *= 1.6f;
            }

            if (slowDownActive)
            {
                multiplier *= 0.5f;
            }

            return multiplier;
        }

        private IEnumerator RunTimedEffect(PowerupType type, float duration)
        {
            SetEffect(type, true);
            yield return new WaitForSeconds(duration);
            SetEffect(type, false);
            activeEffects.Remove(type);
        }

        private void SetEffect(PowerupType type, bool enabled)
        {
            switch (type)
            {
                case PowerupType.SpeedUp:
                    speedUpActive = enabled;
                    break;
                case PowerupType.SlowDown:
                    slowDownActive = enabled;
                    break;
                case PowerupType.Thick:
                    thickTrailActive = enabled;
                    RefreshTrailWidthModifier();
                    break;
                case PowerupType.Thin:
                    thinTrailActive = enabled;
                    RefreshTrailWidthModifier();
                    break;
                case PowerupType.Shield:
                    shieldActive = enabled;
                    break;
                case PowerupType.Ghost:
                    ghostActive = enabled;
                    break;
                case PowerupType.Invert:
                    invertControlsActive = enabled;
                    break;
                case PowerupType.SlowTime:
                    // Match-wide timescale effect is handled centrally.
                    break;
            }
        }

        private void RefreshTrailWidthModifier()
        {
            if (trailGapController == null && trailColliderDropper == null)
            {
                return;
            }

            var multiplier = 1f;
            if (thickTrailActive)
            {
                multiplier *= 3f;
            }

            if (thinTrailActive)
            {
                multiplier *= 0.33333334f;
            }

            if (trailGapController != null)
            {
                trailGapController.SetWidthMultiplier(multiplier);
            }

            if (trailColliderDropper != null)
            {
                trailColliderDropper.SetWidthMultiplier(multiplier);
            }
        }

        private static float GetAxis(KeyCode negative, KeyCode positive)
        {
            var axis = 0f;
            if (Input.GetKey(negative))
            {
                axis -= 1f;
            }

            if (Input.GetKey(positive))
            {
                axis += 1f;
            }

            return axis;
        }

        private static KeyCode MapOrFallback(string webCode, KeyCode fallback)
        {
            return WebKeyCodeMapper.TryMap(webCode, out var mapped) ? mapped : fallback;
        }
    }
}
