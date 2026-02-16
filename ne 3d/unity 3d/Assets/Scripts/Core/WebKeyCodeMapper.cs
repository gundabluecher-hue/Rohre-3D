using System;
using UnityEngine;

namespace NeonCurve3D
{
    public static class WebKeyCodeMapper
    {
        public static bool TryMap(string webCode, out KeyCode keyCode)
        {
            keyCode = KeyCode.None;
            if (string.IsNullOrWhiteSpace(webCode))
            {
                return false;
            }

            if (webCode.StartsWith("Key", StringComparison.Ordinal) && webCode.Length == 4)
            {
                var c = webCode[3];
                if (c >= 'A' && c <= 'Z')
                {
                    keyCode = (KeyCode)Enum.Parse(typeof(KeyCode), c.ToString());
                    return true;
                }
            }

            if (webCode.StartsWith("Digit", StringComparison.Ordinal) && webCode.Length == 6)
            {
                switch (webCode[5])
                {
                    case '0': keyCode = KeyCode.Alpha0; return true;
                    case '1': keyCode = KeyCode.Alpha1; return true;
                    case '2': keyCode = KeyCode.Alpha2; return true;
                    case '3': keyCode = KeyCode.Alpha3; return true;
                    case '4': keyCode = KeyCode.Alpha4; return true;
                    case '5': keyCode = KeyCode.Alpha5; return true;
                    case '6': keyCode = KeyCode.Alpha6; return true;
                    case '7': keyCode = KeyCode.Alpha7; return true;
                    case '8': keyCode = KeyCode.Alpha8; return true;
                    case '9': keyCode = KeyCode.Alpha9; return true;
                }
            }

            if (webCode.StartsWith("Numpad", StringComparison.Ordinal) && webCode.Length == 7)
            {
                switch (webCode[6])
                {
                    case '0': keyCode = KeyCode.Keypad0; return true;
                    case '1': keyCode = KeyCode.Keypad1; return true;
                    case '2': keyCode = KeyCode.Keypad2; return true;
                    case '3': keyCode = KeyCode.Keypad3; return true;
                    case '4': keyCode = KeyCode.Keypad4; return true;
                    case '5': keyCode = KeyCode.Keypad5; return true;
                    case '6': keyCode = KeyCode.Keypad6; return true;
                    case '7': keyCode = KeyCode.Keypad7; return true;
                    case '8': keyCode = KeyCode.Keypad8; return true;
                    case '9': keyCode = KeyCode.Keypad9; return true;
                }
            }

            switch (webCode)
            {
                case "ArrowUp": keyCode = KeyCode.UpArrow; return true;
                case "ArrowDown": keyCode = KeyCode.DownArrow; return true;
                case "ArrowLeft": keyCode = KeyCode.LeftArrow; return true;
                case "ArrowRight": keyCode = KeyCode.RightArrow; return true;
                case "ShiftLeft": keyCode = KeyCode.LeftShift; return true;
                case "ShiftRight": keyCode = KeyCode.RightShift; return true;
                case "ControlLeft": keyCode = KeyCode.LeftControl; return true;
                case "ControlRight": keyCode = KeyCode.RightControl; return true;
                case "AltLeft": keyCode = KeyCode.LeftAlt; return true;
                case "AltRight": keyCode = KeyCode.RightAlt; return true;
                case "Space": keyCode = KeyCode.Space; return true;
                case "Enter": keyCode = KeyCode.Return; return true;
                case "Escape": keyCode = KeyCode.Escape; return true;
                case "Tab": keyCode = KeyCode.Tab; return true;
                case "Backspace": keyCode = KeyCode.Backspace; return true;
            }

            return false;
        }
    }
}
