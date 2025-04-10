/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				code: ["Fira Code", "monospace"],
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				offwhite: "rgb(240, 240, 250)",
				blue: "rgb(64, 120, 192)",
				green: "rgb(0, 187, 0)",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				blink: {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0" },
				},
				typing: {
					"0%": { width: "0" },
					"100%": { width: "100%" },
				},
				"crt-on": {
					"0%": {
						opacity: "0",
						transform: "scale(0.8) translateY(10px)",
					},
					"80%": {
						opacity: "0.5",
						transform: "scale(1.05) translateY(-5px)",
					},
					"100%": {
						opacity: "1",
						transform: "scale(1) translateY(0)",
					},
				},
				scan: {
					"0%": {
						backgroundPosition: "0% 0%",
					},
					"100%": {
						backgroundPosition: "0% 100%",
					},
				},
				float: {
					"0%, 100%": {
						transform: "translateY(0)",
					},
					"50%": {
						transform: "translateY(-5px)",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				blink: "blink 1s step-end infinite",
				typing: "typing 3.5s steps(40, end)",
				"crt-on": "crt-on 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
				scan: "scan 8s linear infinite",
				float: "float 6s ease-in-out infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
