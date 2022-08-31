// const EasingType = {
//     Linear,
//     OutQuad,
//     InOutQuad,
//     OutSine,
//     InOutSine,
//     OutExpo,
//     InOutExpo,
//     OutCirc,
//     InOutCirc,
//     OutCubic,
//     InOutCubic,
//     OutQuart,
//     InOutQuart
// };

// Object.freeze(Season);

// function easeByEasingType(type, t, b, c, d){
//   switch (type){
//     case EasingType.InOutCirc:
//         return easeInOutCirc(t, b, c, d);
//     case EasingType.InOutCubic:
//         return easeInOutCubic(t, b, c, d);
//     case EasingType.InOutExpo:
//         return easeInOutExpo(t, b, c, d);
//     case EasingType.InOutQuad:
//         return easeInOutQuad(t, b, c, d);
//     case EasingType.InOutQuart:
//         return easeInOutQuart(t, b, c, d);
//     case EasingType.InOutSine:
//         return easeInOutSine(t, b, c, d);
//     case EasingType.Linear:
//         return easeLinear(t, b, c, d);
//     case EasingType.OutCirc:
//         return easeOutCirc(t, b, c, d);
//     case EasingType.OutCubic:
//         return easeOutCubic(t, b, c, d);
//     case EasingType.OutExpo:
//         return easeOutExpo(t, b, c, d);
//     case EasingType.OutQuad:
//         return easeOutQuad(t, b, c, d);
//     case EasingType.OutQuart:
//         return easeOutQuart(t, b, c, d);
//     case EasingType.OutSine:
//         return easeOutSine(t, b, c, d);
//     default:
//         return easeLinear(t, b, c, d);
//   }
// }

// function easeLinear(t, b, c, d)
// {
//     if (t > d) return c;
//     return c * t / d + b;
// }

// function easeOutQuad(t, b, c, d)
// {
//     if (t > d) return c;
//     return -c * (t /= d) * (t - 2) + b;
// }

// function easeInOutQuad(t, b, c, d)
// {
//     if (t > d) return c;
//     if ((t /= d / 2) < 1) return c / 2 * t * t + b;
//     return -c / 2 * ((--t) * (t - 2) - 1) + b;
// }

// function easeOutSine(t, b, c, d)
// {
//     if (t > d) return c;
//     return c * Math.sin(t / d * (Math.PI / 2)) + b;
// }

// function easeInOutSine(t, b, c, d)
// {
//     if (t > d) return c;
//     return -c / 2 * (Math.Cos(Math.PI * t / d) - 1) + b;
// }

// function easeOutExpo(t, b, c, d)
// {
//     if (t > d) return c;
//     return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
// }

// function easeInOutExpo(t, b, c, d)
// {
//     if (t > d) return c;
//     if (t == 0) return b;
//     if (t == d) return b + c;
//     if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
//     return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
// }

// function easeOutCirc(t, b, c, d)
// {
//     if (t > d) return c;
//     return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
// }

// function easeInOutCirc(t, b, c, d)
// {
//     if (t > d) return c;
//     if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
//     return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
// }

// function easeOutCubic(t, b, c, d)
// {
//     if (t > d) return c;
//     return c * ((t = t / d - 1) * t * t + 1) + b;
// }

// function easeInOutCubic(t, b, c, d)
// {
//     if (t > d) return c;
//     if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
//     return c / 2 * ((t -= 2) * t * t + 2) + b;
// }

// function easeOutQuart(t, b, c, d)
// {
//     if (t > d) return c;
//     return -c * ((t = t / d - 1) * t * t * t - 1) + b;
// }

// function easeInOutQuart(t, b, c, d)
// {
//     if (t > d) return c;
//     if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
//     return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
// }
