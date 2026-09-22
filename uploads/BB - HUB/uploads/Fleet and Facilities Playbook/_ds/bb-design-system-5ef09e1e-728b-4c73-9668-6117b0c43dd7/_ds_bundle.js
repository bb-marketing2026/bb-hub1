/* @ds-bundle: {"format":3,"namespace":"BrainboxDesignSystem_5ef09e","components":[{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Stat","sourcePath":"components/brand/Stat.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"}],"sourceHashes":{"components/brand/Eyebrow.jsx":"2b2c00029dc4","components/brand/Logo.jsx":"a4faa5ecc404","components/brand/Stat.jsx":"ac8417bdb480","components/core/Avatar.jsx":"a199d8c87ae1","components/core/Badge.jsx":"074b57557481","components/core/Button.jsx":"e3ee8b7074c8","components/core/Card.jsx":"3e85c0cc65a7","components/core/Input.jsx":"53532c3ff9aa","components/core/Switch.jsx":"8e87743a728f","ui_kits/website/Icons.jsx":"5fad8502a01d","ui_kits/website/Site.jsx":"edad3e22bd3c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BrainboxDesignSystem_5ef09e = window.BrainboxDesignSystem_5ef09e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Brainbox Eyebrow — the wide-tracked uppercase kicker above headings.
 */
function Eyebrow({
  children,
  tone = "pink",
  dot = false,
  style = {},
  ...rest
}) {
  const colors = {
    pink: "var(--bb-pink)",
    blue: "var(--bb-blue-700)",
    muted: "var(--text-muted)",
    white: "rgba(255,255,255,0.9)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: "12px",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: colors[tone],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor",
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Brainbox Logo wordmark (text-based, self-contained).
 * Renders "BRAINBOX" in the Beon logotype face. For the full elephant
 * lockup, use the image assets in assets/logos/ directly.
 */
function Logo({
  tone = "gradient",
  size = 32,
  text = "BRAINBOX",
  style = {},
  ...rest
}) {
  const tones = {
    gradient: {
      background: "var(--bb-gradient-brand)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    },
    pink: {
      color: "var(--bb-pink)"
    },
    white: {
      color: "#fff"
    },
    ink: {
      color: "var(--bb-grey-700)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: "var(--font-logo)",
      fontSize: size,
      letterSpacing: "0.12em",
      lineHeight: 1,
      userSelect: "none",
      ...tones[tone],
      ...style
    }
  }, rest), text);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Brainbox Stat — a large gradient figure with a supporting label,
 * for marketing / report highlight numbers.
 */
function Stat({
  value,
  label,
  sub,
  align = "left",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "56px",
      lineHeight: 1,
      letterSpacing: "-0.02em",
      background: "var(--bb-gradient-brand)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, value), label && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "10px",
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: "15px",
      color: "var(--text-heading)"
    }
  }, label), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "4px",
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "13px",
      color: "var(--text-muted)"
    }
  }, sub));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Brainbox Avatar — image or initials, with brand-tinted fallback.
 */
function Avatar({
  src,
  name = "",
  size = 40,
  ring = false,
  style = {},
  ...rest
}) {
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]?.toUpperCase()).join("");
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "50%",
      background: src ? "var(--bb-grey-100)" : "var(--bb-pink-100)",
      color: "var(--bb-pink-700)",
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: size * 0.38,
      overflow: "hidden",
      flex: "none",
      boxShadow: ring ? "0 0 0 2px #fff, 0 0 0 4px var(--bb-pink)" : "none",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "?");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Brainbox Badge — compact status / category label.
 */
function Badge({
  children,
  variant = "neutral",
  solid = false,
  style = {},
  ...rest
}) {
  const tints = {
    pink: {
      bg: "var(--bb-pink-100)",
      fg: "var(--bb-pink-700)"
    },
    blue: {
      bg: "var(--bb-blue-100)",
      fg: "var(--bb-blue-900)"
    },
    neutral: {
      bg: "var(--bb-grey-100)",
      fg: "var(--bb-grey-700)"
    },
    success: {
      bg: "#e3f3ec",
      fg: "var(--color-success)"
    },
    warning: {
      bg: "#fbf0d9",
      fg: "#9a6400"
    },
    danger: {
      bg: "#fbe4ea",
      fg: "var(--color-danger)"
    }
  };
  const solids = {
    pink: {
      bg: "var(--bb-pink)",
      fg: "#fff"
    },
    blue: {
      bg: "var(--bb-blue-700)",
      fg: "#fff"
    },
    neutral: {
      bg: "var(--bb-grey-700)",
      fg: "#fff"
    },
    success: {
      bg: "var(--color-success)",
      fg: "#fff"
    },
    warning: {
      bg: "#d98a00",
      fg: "#fff"
    },
    danger: {
      bg: "var(--color-danger)",
      fg: "#fff"
    }
  };
  const c = (solid ? solids : tints)[variant] || tints.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: 1,
      letterSpacing: "0.01em",
      padding: "5px 10px",
      borderRadius: "var(--radius-pill)",
      background: c.bg,
      color: c.fg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Brainbox Button — the primary interactive control.
 * Pink-hero primary, calm secondary/ghost/outline variants. Rounded, friendly,
 * soft motion. Use sentence case labels ("Start a conversation").
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  pill = false,
  block = false,
  disabled = false,
  type = "button",
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: "13px",
      padding: "7px 14px",
      gap: "6px",
      height: "34px"
    },
    md: {
      fontSize: "15px",
      padding: "10px 20px",
      gap: "8px",
      height: "44px"
    },
    lg: {
      fontSize: "16px",
      padding: "13px 26px",
      gap: "9px",
      height: "52px"
    }
  };
  const base = {
    display: block ? "flex" : "inline-flex",
    width: block ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-heading)",
    fontWeight: 600,
    lineHeight: 1,
    border: "1px solid transparent",
    borderRadius: pill ? "var(--radius-pill)" : "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background var(--duration-normal) var(--ease-standard), color var(--duration-normal) var(--ease-standard), box-shadow var(--duration-normal) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)",
    whiteSpace: "nowrap",
    ...sizes[size],
    ...style
  };
  const variants = {
    primary: {
      background: "var(--bb-pink)",
      color: "var(--text-on-brand)",
      boxShadow: "var(--shadow-brand)"
    },
    secondary: {
      background: "var(--bb-pink-50)",
      color: "var(--bb-pink-700)",
      borderColor: "var(--bb-pink-100)"
    },
    outline: {
      background: "transparent",
      color: "var(--bb-pink)",
      borderColor: "var(--bb-pink)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-heading)"
    },
    dark: {
      background: "var(--bb-grey-700)",
      color: "#fff"
    }
  };
  const hovers = {
    primary: (e, on) => {
      e.currentTarget.style.background = on ? "var(--bb-pink-600)" : "var(--bb-pink)";
    },
    secondary: (e, on) => {
      e.currentTarget.style.background = on ? "var(--bb-pink-100)" : "var(--bb-pink-50)";
    },
    outline: (e, on) => {
      e.currentTarget.style.background = on ? "var(--bb-pink-50)" : "transparent";
    },
    ghost: (e, on) => {
      e.currentTarget.style.background = on ? "var(--bb-grey-100)" : "transparent";
    },
    dark: (e, on) => {
      e.currentTarget.style.background = on ? "var(--bb-grey-800)" : "var(--bb-grey-700)";
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: {
      ...base,
      ...variants[variant]
    },
    onMouseEnter: e => !disabled && hovers[variant](e, true),
    onMouseLeave: e => {
      if (!disabled) {
        hovers[variant](e, false);
        e.currentTarget.style.transform = "none";
      }
    },
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = "translateY(1px)"),
    onMouseUp: e => !disabled && (e.currentTarget.style.transform = "none")
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Brainbox Card — soft, rounded surface container.
 * `accent` adds a thin top gradient bar; `interactive` adds a hover lift.
 */
function Card({
  children,
  padding = "lg",
  accent = false,
  interactive = false,
  style = {},
  ...rest
}) {
  const pads = {
    none: "0",
    sm: "16px",
    md: "20px",
    lg: "28px",
    xl: "36px"
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      position: "relative",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: pads[padding],
      boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transform: hover ? "translateY(-2px)" : "none",
      transition: "box-shadow var(--duration-normal) var(--ease-standard), transform var(--duration-normal) var(--ease-standard)",
      overflow: "hidden",
      ...style
    }
  }, rest), accent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "4px",
      background: "var(--bb-gradient-brand)"
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Brainbox Input — text field with optional label, helper & leading icon.
 */
function Input({
  label,
  helper,
  error,
  iconLeft = null,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? "in-" + label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const borderColor = error ? "var(--color-danger)" : focus ? "var(--bb-pink)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: "13px",
      color: "var(--text-heading)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      background: "#fff",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      padding: "0 14px",
      height: "44px",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      transition: "border-color var(--duration-normal) var(--ease-standard), box-shadow var(--duration-normal) var(--ease-standard)"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: "var(--text-muted)"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "15px",
      color: "var(--text-body)",
      minWidth: 0
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: error ? "var(--color-danger)" : "var(--text-muted)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Brainbox Switch — toggle control.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      position: "relative",
      width: "44px",
      height: "26px",
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--bb-pink)" : "var(--bb-grey-300)",
      transition: "background var(--duration-normal) var(--ease-standard)",
      flex: "none"
    },
    role: "switch",
    "aria-checked": checked
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "3px",
      left: checked ? "21px" : "3px",
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--duration-normal) var(--ease-out)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icons.jsx
try { (() => {
/* Brainbox UI kit — a small set of Lucide icons (https://lucide.dev, ISC license)
   inlined as React components so stroke uses currentColor (full brand colouring).
   Stroke geometry matches the rounded, single-weight brand linework. */
(function () {
  function I(paths) {
    return function Icon({
      size = 24,
      stroke = 2,
      style = {},
      ...rest
    }) {
      return React.createElement("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: stroke,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        style,
        ...rest
      }, paths.map((d, i) => React.createElement("path", {
        key: i,
        d
      }))
      // some icons need circles/other prims, handled via arrays of objects below
      );
    };
  }
  // For icons needing non-path elements, build manually.
  function svg(children) {
    return function Icon({
      size = 24,
      stroke = 2,
      style = {},
      ...rest
    }) {
      return React.createElement("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: stroke,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        style,
        ...rest
      }, children());
    };
  }
  const E = React.createElement;
  const Icons = {
    Search: svg(() => [E("circle", {
      key: 0,
      cx: 11,
      cy: 11,
      r: 8
    }), E("path", {
      key: 1,
      d: "m21 21-4.3-4.3"
    })]),
    Users: svg(() => [E("path", {
      key: 0,
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
    }), E("circle", {
      key: 1,
      cx: 9,
      cy: 7,
      r: 4
    }), E("path", {
      key: 2,
      d: "M22 21v-2a4 4 0 0 0-3-3.87"
    }), E("path", {
      key: 3,
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })]),
    Target: svg(() => [E("circle", {
      key: 0,
      cx: 12,
      cy: 12,
      r: 10
    }), E("circle", {
      key: 1,
      cx: 12,
      cy: 12,
      r: 6
    }), E("circle", {
      key: 2,
      cx: 12,
      cy: 12,
      r: 2
    })]),
    Heart: svg(() => [E("path", {
      key: 0,
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
    })]),
    Globe: svg(() => [E("circle", {
      key: 0,
      cx: 12,
      cy: 12,
      r: 10
    }), E("path", {
      key: 1,
      d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
    }), E("path", {
      key: 2,
      d: "M2 12h20"
    })]),
    Sparkles: svg(() => [E("path", {
      key: 0,
      d: "M9.94 14.34A2 2 0 0 0 8.66 13.06L3 11l5.66-2.06a2 2 0 0 0 1.28-1.28L12 2l2.06 5.66a2 2 0 0 0 1.28 1.28L21 11l-5.66 2.06a2 2 0 0 0-1.28 1.28L12 20Z"
    }), E("path", {
      key: 1,
      d: "M20 3v4"
    }), E("path", {
      key: 2,
      d: "M22 5h-4"
    })]),
    ArrowRight: svg(() => [E("path", {
      key: 0,
      d: "M5 12h14"
    }), E("path", {
      key: 1,
      d: "m12 5 7 7-7 7"
    })]),
    Check: svg(() => [E("path", {
      key: 0,
      d: "M20 6 9 17l-5-5"
    })]),
    Menu: svg(() => [E("path", {
      key: 0,
      d: "M4 12h16"
    }), E("path", {
      key: 1,
      d: "M4 6h16"
    }), E("path", {
      key: 2,
      d: "M4 18h16"
    })]),
    Quote: svg(() => [E("path", {
      key: 0,
      d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
    }), E("path", {
      key: 1,
      d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 .991 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
    })]),
    MapPin: svg(() => [E("path", {
      key: 0,
      d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0"
    }), E("circle", {
      key: 1,
      cx: 12,
      cy: 10,
      r: 3
    })])
  };
  window.BBIcons = Icons;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Site.jsx
try { (() => {
/* Brainbox marketing site — homepage recreation (UI kit).
   Composes the design-system primitives + BBIcons. Attaches window.BrainboxSite. */
(function () {
  const E = React.createElement;
  const DS = window.BrainboxDesignSystem_5ef09e;
  const {
    Button,
    Eyebrow,
    Stat,
    Card,
    Logo,
    Badge,
    Avatar
  } = DS;
  const I = window.BBIcons;
  const PINK = "var(--bb-pink)";
  const wrap = {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 40px"
  };

  /* ---------------- Nav ---------------- */
  function Nav() {
    const links = ["What we do", "Offshoring", "Industries", "About", "Insights"];
    return E("header", {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "rgba(255,255,255,0.86)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, E("div", {
      style: {
        ...wrap,
        height: 76,
        display: "flex",
        alignItems: "center",
        gap: 32
      }
    }, E(Logo, {
      tone: "gradient",
      size: 28
    }), E("nav", {
      style: {
        display: "flex",
        gap: 28,
        marginLeft: 20
      }
    }, links.map(l => E("a", {
      key: l,
      href: "#",
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 400,
        fontSize: 15,
        color: "var(--text-body)",
        textDecoration: "none"
      }
    }, l))), E("div", {
      style: {
        marginLeft: "auto",
        display: "flex",
        gap: 12,
        alignItems: "center"
      }
    }, E("a", {
      href: "#",
      style: {
        fontFamily: "var(--font-heading)",
        fontWeight: 600,
        fontSize: 14,
        color: "var(--text-heading)",
        textDecoration: "none"
      }
    }, "Client login"), E(Button, {
      size: "sm",
      iconRight: E(I.ArrowRight, {
        size: 16
      })
    }, "Start a conversation"))));
  }

  /* ---------------- Hero ---------------- */
  function Hero() {
    return E("section", {
      style: {
        position: "relative",
        overflow: "hidden",
        background: "#fff"
      }
    }, E("div", {
      style: {
        ...wrap,
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        gap: 48,
        alignItems: "center",
        padding: "88px 40px 96px"
      }
    }, E("div", null, E(Eyebrow, {
      dot: true
    }, "Powerful People Performance"), E("h1", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 60,
        lineHeight: 1.04,
        letterSpacing: "-0.02em",
        color: "var(--text-heading)",
        margin: "18px 0 0"
      }
    }, "Build a team that ", E("span", {
      className: "bb-gradient-text",
      style: {
        background: "var(--bb-gradient-brand)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent"
      }
    }, "actually wants"), " to be here."), E("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 19,
        lineHeight: 1.55,
        color: "var(--text-muted)",
        margin: "22px 0 32px",
        maxWidth: 520
      }
    }, "We help you find, grow and keep the people who make your business work — kindly, and for the long haul. From recruitment to managed offshore teams."), E("div", {
      style: {
        display: "flex",
        gap: 14,
        flexWrap: "wrap"
      }
    }, E(Button, {
      size: "lg",
      iconRight: E(I.ArrowRight, {
        size: 18
      })
    }, "Start a conversation"), E(Button, {
      size: "lg",
      variant: "outline"
    }, "See how we help")), E("div", {
      style: {
        display: "flex",
        gap: 26,
        marginTop: 40
      }
    }, E(MiniStat, {
      v: "98%",
      l: "12-month retention"
    }), E(Divider), E(MiniStat, {
      v: "120+",
      l: "People placed"
    }), E(Divider), E(MiniStat, {
      v: "4.9",
      l: "Client rating"
    }))), E("div", {
      style: {
        position: "relative"
      }
    }, E("div", {
      style: {
        borderRadius: "var(--radius-2xl)",
        overflow: "hidden",
        boxShadow: "var(--shadow-xl)",
        aspectRatio: "4/5",
        background: "var(--bb-gradient-duotone)"
      }
    }, E("img", {
      src: "../../assets/images/elephant-cover-02.jpg",
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })), E("div", {
      style: {
        position: "absolute",
        bottom: -22,
        left: -22,
        background: "#fff",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-lg)",
        padding: "16px 18px",
        display: "flex",
        gap: 12,
        alignItems: "center",
        maxWidth: 260
      }
    }, E("span", {
      style: {
        width: 42,
        height: 42,
        borderRadius: "50%",
        background: "var(--bb-pink-100)",
        color: PINK,
        display: "grid",
        placeItems: "center",
        flex: "none"
      }
    }, E(I.Heart, {
      size: 22
    })), E("div", null, E("div", {
      style: {
        fontFamily: "var(--font-heading)",
        fontWeight: 600,
        fontSize: 14,
        color: "var(--text-heading)"
      }
    }, "Always Be Kind"), E("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, "Our number-one value"))))));
  }
  function Divider() {
    return E("div", {
      style: {
        width: 1,
        alignSelf: "stretch",
        background: "var(--border-subtle)"
      }
    });
  }
  function MiniStat({
    v,
    l
  }) {
    return E("div", null, E("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 26,
        color: "var(--text-heading)"
      }
    }, v), E("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, l));
  }

  /* ---------------- Trust strip ---------------- */
  function Trust() {
    const names = ["Northwind", "Meridian", "Coastline Co", "BrightPath", "Acacia Group", "Vantage"];
    return E("section", {
      style: {
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        background: "var(--bb-grey-50)"
      }
    }, E("div", {
      style: {
        ...wrap,
        padding: "26px 40px",
        display: "flex",
        alignItems: "center",
        gap: 28,
        flexWrap: "wrap",
        justifyContent: "center"
      }
    }, E("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        letterSpacing: ".08em",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }
    }, "Trusted by people-first teams"), names.map(n => E("span", {
      key: n,
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 18,
        color: "var(--bb-grey-light)"
      }
    }, n))));
  }

  /* ---------------- Services ---------------- */
  function Services() {
    const items = [{
      icon: I.Search,
      t: "Find",
      d: "Recruitment that screens for capability and culture — not just a CV match. Roles filled faster, and filled right."
    }, {
      icon: I.Sparkles,
      t: "Grow",
      d: "Leadership, culture and HR strategy that helps your people do the best work of their careers."
    }, {
      icon: I.Users,
      t: "Keep",
      d: "Managed offshore teams and retention programmes that hold the line long after we've gone."
    }];
    return E("section", {
      style: {
        ...wrap,
        padding: "96px 40px"
      }
    }, E("div", {
      style: {
        maxWidth: 640
      }
    }, E(Eyebrow, {
      dot: true
    }, "What we do"), E("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 42,
        lineHeight: 1.08,
        color: "var(--text-heading)",
        margin: "16px 0 12px"
      }
    }, "Three ways we lift performance."), E("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 18,
        color: "var(--text-muted)",
        margin: 0
      }
    }, "People-first, kind by default — and built to last beyond the engagement.")), E("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 24,
        marginTop: 44
      }
    }, items.map(it => E(Card, {
      key: it.t,
      interactive: true,
      padding: "lg"
    }, E("span", {
      style: {
        width: 52,
        height: 52,
        borderRadius: "var(--radius-md)",
        background: "var(--bb-pink-50)",
        color: PINK,
        display: "grid",
        placeItems: "center"
      }
    }, E(it.icon, {
      size: 26
    })), E("h3", {
      style: {
        fontFamily: "var(--font-heading)",
        fontWeight: 600,
        fontSize: 23,
        color: "var(--text-heading)",
        margin: "20px 0 8px"
      }
    }, it.t), E("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 15.5,
        lineHeight: 1.6,
        color: "var(--text-body)",
        margin: "0 0 18px"
      }
    }, it.d), E("a", {
      href: "#",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-heading)",
        fontWeight: 600,
        fontSize: 14,
        color: PINK,
        textDecoration: "none"
      }
    }, "Learn more", E(I.ArrowRight, {
      size: 15
    }))))));
  }

  /* ---------------- Offshoring feature ---------------- */
  function Offshoring() {
    const points = ["Hand-picked talent in your time zone", "We handle HR, payroll & compliance", "You keep full control of the work", "Scale up or down, kindly"];
    return E("section", {
      style: {
        background: "var(--bb-grey-50)",
        borderTop: "1px solid var(--border-subtle)"
      }
    }, E("div", {
      style: {
        ...wrap,
        display: "grid",
        gridTemplateColumns: "0.9fr 1.1fr",
        gap: 56,
        alignItems: "center",
        padding: "90px 40px"
      }
    }, E("div", {
      style: {
        borderRadius: "var(--radius-2xl)",
        overflow: "hidden",
        boxShadow: "var(--shadow-lg)",
        aspectRatio: "1/1"
      }
    }, E("img", {
      src: "../../assets/images/elephant-cover-04.jpg",
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })), E("div", null, E(Badge, {
      variant: "blue"
    }, "Managed offshore teams"), E("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 40,
        lineHeight: 1.1,
        color: "var(--text-heading)",
        margin: "16px 0 14px",
        maxWidth: "16ch"
      }
    }, "Your team, extended — without the overhead."), E("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 18,
        lineHeight: 1.6,
        color: "var(--text-muted)",
        margin: "0 0 26px",
        maxWidth: 540
      }
    }, "We build and look after high-performing offshore teams so you can grow with confidence. People-first, always — they're treated like your people, because they are."), E("ul", {
      style: {
        listStyle: "none",
        padding: 0,
        margin: "0 0 30px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "14px 22px"
      }
    }, points.map(p => E("li", {
      key: p,
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start",
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 15.5,
        color: "var(--text-body)"
      }
    }, E("span", {
      style: {
        color: "var(--color-success)",
        marginTop: 1,
        flex: "none"
      }
    }, E(I.Check, {
      size: 18
    })), p))), E(Button, {
      iconRight: E(I.ArrowRight, {
        size: 18
      })
    }, "Explore offshoring"))));
  }

  /* ---------------- Stats band ---------------- */
  function StatsBand() {
    return E("section", {
      style: {
        background: "var(--bb-gradient-duotone)"
      }
    }, E("div", {
      style: {
        ...wrap,
        padding: "70px 40px",
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 30,
        textAlign: "center"
      }
    }, [["98%", "Retention at 12 months"], ["120+", "People placed last year"], ["3×", "Faster time-to-hire"], ["4.9", "Average client rating"]].map(([v, l]) => E("div", {
      key: l
    }, E("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 56,
        lineHeight: 1,
        color: "#fff"
      }
    }, v), E("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 15,
        color: "rgba(255,255,255,0.92)",
        marginTop: 10
      }
    }, l)))));
  }

  /* ---------------- Testimonial ---------------- */
  function Testimonial() {
    return E("section", {
      style: {
        ...wrap,
        padding: "96px 40px"
      }
    }, E(Card, {
      padding: "xl",
      accent: true,
      style: {
        maxWidth: 880,
        margin: "0 auto",
        textAlign: "center"
      }
    }, E("span", {
      style: {
        color: "var(--bb-pink-200)",
        display: "inline-flex"
      }
    }, E(I.Quote, {
      size: 44
    })), E("blockquote", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 30,
        lineHeight: 1.3,
        color: "var(--text-heading)",
        margin: "16px auto 28px",
        maxWidth: "26ch",
        letterSpacing: "-0.01em"
      }
    }, "Brainbox didn't just fill our roles — they reshaped how our whole team works together. Kindly, and brilliantly."), E("div", {
      style: {
        display: "flex",
        gap: 12,
        alignItems: "center",
        justifyContent: "center"
      }
    }, E(Avatar, {
      name: "Renee Adams",
      size: 48
    }), E("div", {
      style: {
        textAlign: "left"
      }
    }, E("div", {
      style: {
        fontFamily: "var(--font-heading)",
        fontWeight: 600,
        fontSize: 15,
        color: "var(--text-heading)"
      }
    }, "Renee Adams"), E("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 14,
        color: "var(--text-muted)"
      }
    }, "COO, Meridian Group")))));
  }

  /* ---------------- CTA ---------------- */
  function CTA() {
    return E("section", {
      style: {
        ...wrap,
        paddingBottom: 96
      }
    }, E("div", {
      style: {
        position: "relative",
        overflow: "hidden",
        borderRadius: "var(--radius-2xl)",
        background: "var(--bb-gradient-brand)",
        padding: "64px 56px",
        display: "flex",
        alignItems: "center",
        gap: 40,
        flexWrap: "wrap"
      }
    }, E("div", {
      style: {
        flex: 1,
        minWidth: 320
      }
    }, E("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 40,
        lineHeight: 1.08,
        color: "#fff",
        margin: "0 0 12px",
        maxWidth: "18ch"
      }
    }, "Let's build something people love working for."), E("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 18,
        color: "rgba(255,255,255,0.92)",
        margin: 0,
        maxWidth: 520
      }
    }, "Tell us what you're trying to do. We'll bring the kindness and the performance.")), E("div", {
      style: {
        display: "flex",
        gap: 12,
        flexWrap: "wrap"
      }
    }, E(Button, {
      size: "lg",
      variant: "dark"
    }, "Start a conversation"), E(Button, {
      size: "lg",
      variant: "outline",
      style: {
        color: "#fff",
        borderColor: "rgba(255,255,255,0.6)"
      }
    }, "Book a call"))));
  }

  /* ---------------- Footer ---------------- */
  function Footer() {
    const cols = [["What we do", ["Recruitment", "HR & culture", "Offshoring", "Leadership"]], ["Company", ["About us", "Our values", "Insights", "Careers"]], ["Connect", ["Contact", "LinkedIn", "Newsletter"]]];
    return E("footer", {
      style: {
        background: "var(--bb-grey-700)",
        color: "#fff"
      }
    }, E("div", {
      style: {
        ...wrap,
        padding: "64px 40px 40px",
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
        gap: 40
      }
    }, E("div", null, E(Logo, {
      tone: "white",
      size: 28
    }), E("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 14.5,
        lineHeight: 1.6,
        color: "rgba(255,255,255,0.75)",
        margin: "18px 0 16px",
        maxWidth: 280
      }
    }, "Powerful people performance — kind by default, built to last."), E("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center",
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 14,
        color: "rgba(255,255,255,0.75)"
      }
    }, E(I.MapPin, {
      size: 16
    }), "Perth, Western Australia")), cols.map(([h, links]) => E("div", {
      key: h
    }, E("div", {
      style: {
        fontFamily: "var(--font-heading)",
        fontWeight: 600,
        fontSize: 13,
        letterSpacing: ".06em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.6)",
        marginBottom: 14
      }
    }, h), E("ul", {
      style: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "grid",
        gap: 10
      }
    }, links.map(l => E("li", {
      key: l
    }, E("a", {
      href: "#",
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 14.5,
        color: "rgba(255,255,255,0.85)",
        textDecoration: "none"
      }
    }, l))))))), E("div", {
      style: {
        ...wrap,
        padding: "20px 40px",
        borderTop: "1px solid rgba(255,255,255,0.12)",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 10
      }
    }, E("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 13,
        color: "rgba(255,255,255,0.6)"
      }
    }, "© 2025 Brainbox Group · brain-box.com.au"), E("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 13,
        color: "rgba(255,255,255,0.6)"
      }
    }, "#AlwaysBeKind · #TogetherWeThrive")));
  }
  function Site() {
    return E("div", {
      style: {
        background: "#fff"
      }
    }, E(Nav), E(Hero), E(Trust), E(Services), E(Offshoring), E(StatsBand), E(Testimonial), E(CTA), E(Footer));
  }
  window.BrainboxSite = Site;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

})();
