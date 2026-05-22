/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      /* --- LUXURY DESIGN TOKENS --- */
      colors: {
        /* Dominant Dark & Light bases */
        obsidian: "#0A0A0A",
        cream: "#F5F0EB",
        /* Accent palette */
        gold: "#C9A96E",
        terracotta: "#C17F5B",
        charcoal: "#1A1A1A",
        "warm-gray": "#8B8580",
        "pure-white": "#FFFFFF",
        "soft-ivory": "#FBF8F4",
        "deep-ebony": "#111111",
      },
      fontFamily: {
        /* Editorial Serif for headings + Clean Sans for body */
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        /* Fluid typography scale */
        "fluid-sm": "clamp(0.75rem, 0.6rem + 0.5vw, 0.875rem)",
        "fluid-base": "clamp(0.875rem, 0.7rem + 0.6vw, 1rem)",
        "fluid-lg": "clamp(1rem, 0.8rem + 0.8vw, 1.25rem)",
        "fluid-xl": "clamp(1.25rem, 1rem + 1.2vw, 1.75rem)",
        "fluid-2xl": "clamp(1.5rem, 1.1rem + 1.8vw, 2.25rem)",
        "fluid-3xl": "clamp(1.875rem, 1.3rem + 2.5vw, 3rem)",
        "fluid-4xl": "clamp(2.25rem, 1.5rem + 3.5vw, 4.5rem)",
        "fluid-5xl": "clamp(3rem, 2rem + 5vw, 6rem)",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "slide-down": "slideDown 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "gold-sweep": "goldSweep 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(201, 169, 110, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(201, 169, 110, 0.4)" },
        },
        goldSweep: {
          "0%": { transform: "translateX(-25%) translateY(-25%)" },
          "50%": { transform: "translateX(25%) translateY(25%)" },
          "100%": { transform: "translateX(-25%) translateY(-25%)" },
        },
      },
    },
  },
  plugins: [],
};
