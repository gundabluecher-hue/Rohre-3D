using UnityEngine;

namespace NeonCurve3D
{
    public class SimpleFollowCamera : MonoBehaviour
    {
        [SerializeField] private Transform target;
        [SerializeField] private Vector3 localOffset = new Vector3(0f, 6f, -12f);
        [SerializeField] private float lookAhead = 5f;
        [SerializeField] private float moveSmoothing = 8f;
        [SerializeField] private float rotationSmoothing = 10f;

        public void SetTarget(Transform value)
        {
            target = value;
        }

        private void LateUpdate()
        {
            if (target == null)
            {
                return;
            }

            var desiredPosition = target.position + target.TransformDirection(localOffset);
            var targetLookAt = target.position + target.forward * lookAhead;
            var desiredRotation = Quaternion.LookRotation(targetLookAt - desiredPosition, Vector3.up);

            var tMove = 1f - Mathf.Exp(-moveSmoothing * Time.deltaTime);
            var tRot = 1f - Mathf.Exp(-rotationSmoothing * Time.deltaTime);

            transform.position = Vector3.Lerp(transform.position, desiredPosition, tMove);
            transform.rotation = Quaternion.Slerp(transform.rotation, desiredRotation, tRot);
        }
    }
}
