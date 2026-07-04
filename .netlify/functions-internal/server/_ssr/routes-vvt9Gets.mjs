import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@lottiefiles/react-lottie-player+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-vvt9Gets.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WEDDING_DATE = /* @__PURE__ */ new Date("2027-06-14T17:00:00");
function getDiff(target) {
	const total = Math.max(0, target.getTime() - Date.now());
	return {
		days: Math.floor(total / (1e3 * 60 * 60 * 24)),
		hours: Math.floor(total / (1e3 * 60 * 60) % 24),
		minutes: Math.floor(total / (1e3 * 60) % 60),
		seconds: Math.floor(total / 1e3 % 60)
	};
}
function Countdown() {
	const [time, setTime] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setTime(getDiff(WEDDING_DATE));
		const id = setInterval(() => setTime(getDiff(WEDDING_DATE)), 1e3);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto",
		children: [
			["Días", time ? time.days : 0],
			["Horas", time ? time.hours : 0],
			["Min", time ? time.minutes : 0],
			["Seg", time ? time.seconds : 0]
		].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center justify-center rounded-sm border border-gold/40 bg-card/60 py-5 sm:py-8 backdrop-blur-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-serif text-3xl sm:text-5xl text-ink tabular-nums",
				children: time ? String(value).padStart(2, "0") : "00"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground",
				children: label
			})]
		}, label))
	});
}
function RSVPForm() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [attending, setAttending] = (0, import_react.useState)("yes");
	function handleSubmit(e) {
		e.preventDefault();
		setStatus("sent");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "w-full max-w-xl mx-auto grid gap-5 text-left",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
					children: "Nombre completo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					type: "text",
					name: "name",
					placeholder: "Tu nombre",
					className: "w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 font-sans text-base transition-colors placeholder:text-muted-foreground/60"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
					children: "Correo electrónico"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					type: "email",
					name: "email",
					placeholder: "tucorreo@ejemplo.com",
					className: "w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 font-sans text-base transition-colors placeholder:text-muted-foreground/60"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
						children: "Invitados"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						type: "number",
						min: 1,
						max: 6,
						defaultValue: 1,
						name: "guests",
						className: "w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 font-sans text-base transition-colors"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
						children: "¿Asistirás?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 pt-2",
						children: ["yes", "no"].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setAttending(v),
							className: `flex-1 py-2 text-xs uppercase tracking-[0.2em] border transition-colors ${attending === v ? "border-gold bg-gold/10 text-ink" : "border-border text-muted-foreground hover:border-gold/60"}`,
							children: v === "yes" ? "Sí" : "No"
						}, v))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
					children: "Restricciones alimentarias"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					name: "diet",
					rows: 3,
					placeholder: "Vegetariano, alergias, etc.",
					className: "w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 font-sans text-base transition-colors resize-none placeholder:text-muted-foreground/60"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "mt-4 group relative overflow-hidden border border-ink bg-ink text-cream py-4 text-xs uppercase tracking-[0.3em] transition-colors hover:bg-transparent hover:text-ink",
				children: status === "sent" ? "Gracias por confirmar" : "Confirmar asistencia"
			})
		]
	});
}
/**
* Client-only smooth scroll + scroll-triggered reveals.
* - Lenis drives smooth scrolling for the whole page.
* - GSAP ScrollTrigger animates `.reveal-section` and staggers
*   `.animate-on-scroll` children into view.
*/
function SmoothScroll() {
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		gsapWithCSS.registerPlugin(ScrollTrigger);
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true
		});
		lenis.on("scroll", ScrollTrigger.update);
		const tickerFn = (time) => lenis.raf(time * 1e3);
		gsapWithCSS.ticker.add(tickerFn);
		gsapWithCSS.ticker.lagSmoothing(0);
		const handleHashClick = (e) => {
			const anchor = e.target.closest("a");
			if (anchor && anchor.hash && anchor.hash.startsWith("#") && anchor.pathname === window.location.pathname) {
				const id = anchor.hash;
				if (document.querySelector(id)) {
					e.preventDefault();
					lenis.scrollTo(id, { offset: -80 });
				}
			}
		};
		document.documentElement.addEventListener("click", handleHashClick);
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.utils.toArray(".reveal-section").forEach((section) => {
				const targets = section.querySelectorAll(".animate-on-scroll");
				if (targets.length === 0) gsapWithCSS.from(section, {
					opacity: 0,
					y: 40,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: section,
						start: "top 85%",
						toggleActions: "play none none none"
					}
				});
				else gsapWithCSS.from(targets, {
					opacity: 0,
					y: 30,
					duration: 1,
					ease: "power3.out",
					stagger: .12,
					scrollTrigger: {
						trigger: section,
						start: "top 80%",
						toggleActions: "play none none none"
					}
				});
			});
			gsapWithCSS.utils.toArray(".gallery-img").forEach((item) => {
				gsapWithCSS.from(item, {
					scale: .8,
					opacity: 0,
					rotation: 2,
					duration: 1.2,
					ease: "power3.out",
					scrollTrigger: {
						trigger: item,
						start: "top 85%",
						toggleActions: "play none none none"
					}
				});
			});
			gsapWithCSS.utils.toArray(".parallax-bg").forEach((bg) => {
				gsapWithCSS.to(bg, {
					yPercent: 30,
					ease: "none",
					scrollTrigger: {
						trigger: bg.parentElement,
						start: "top bottom",
						end: "bottom top",
						scrub: true
					}
				});
			});
			gsapWithCSS.utils.toArray(".parallax-item").forEach((item) => {
				const speed = item.dataset.speed ? parseFloat(item.dataset.speed) : .5;
				gsapWithCSS.to(item, {
					y: () => -100 * speed,
					ease: "none",
					scrollTrigger: {
						trigger: item,
						start: "top bottom",
						end: "bottom top",
						scrub: true
					}
				});
			});
		});
		return () => {
			document.documentElement.removeEventListener("click", handleHashClick);
			ctx.revert();
			gsapWithCSS.ticker.remove(tickerFn);
			lenis.destroy();
		};
	}, []);
	return null;
}
function Section({ id, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: `reveal-section relative w-full px-6 sm:px-10 ${className}`,
		children
	});
}
function LottieBottom({ url, className = "" }) {
	const [PlayerComp, setPlayerComp] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		import("../_libs/@lottiefiles/react-lottie-player+[...].mjs").then((n) => n.t).then((module) => {
			setPlayerComp(() => module.Player);
		}).catch(console.error);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `absolute bottom-0 left-0 w-full pointer-events-none z-0 mix-blend-multiply opacity-80 flex items-end justify-center ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-[150%] sm:w-full -ml-[25%] sm:ml-0 flex justify-center origin-bottom scale-110 sm:scale-100",
			children: PlayerComp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerComp, {
				src: url,
				loop: true,
				autoplay: true,
				background: "transparent",
				style: {
					width: "100%",
					height: "auto"
				}
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-full h-full py-10 sm:py-16" })
		})
	});
}
function LottieDecoration({ url, className, loop = true }) {
	const [PlayerComp, setPlayerComp] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		import("../_libs/@lottiefiles/react-lottie-player+[...].mjs").then((n) => n.t).then((module) => {
			setPlayerComp(() => module.Player);
		}).catch(console.error);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `animate-on-scroll absolute pointer-events-none z-0 ${className}`,
		children: PlayerComp && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerComp, {
			src: url,
			loop,
			autoplay: true,
			background: "transparent",
			style: {
				width: "100%",
				height: "100%"
			}
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inicio",
		className: "relative h-screen w-full flex items-center justify-center overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 w-full h-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "parallax-bg absolute inset-0 w-full h-[120%] -top-[10%]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					autoPlay: true,
					loop: true,
					muted: true,
					playsInline: true,
					className: "w-full h-full object-cover",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: "/generame_un_video_de_estas_dos.mp4",
						type: "video/mp4"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/40 mix-blend-multiply" })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 text-center px-4 flex flex-col items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "animate-on-scroll text-xs sm:text-sm uppercase tracking-[0.4em] text-cream mb-8 drop-shadow-md",
					children: "14 · Junio · 2026"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "animate-on-scroll font-serif text-6xl sm:text-8xl md:text-9xl leading-[0.95] text-cream drop-shadow-lg",
					children: [
						"Sofía",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block italic text-gold text-4xl sm:text-6xl md:text-7xl my-3 sm:my-4 drop-shadow-md",
							children: "&"
						}),
						"Mateo"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-on-scroll flex items-center justify-center gap-4 my-6 drop-shadow-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-12 bg-gold/60" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							width: "10",
							height: "10",
							viewBox: "0 0 10 10",
							className: "text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "5",
								cy: "5",
								r: "2",
								fill: "currentColor"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-12 bg-gold/60" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "animate-on-scroll max-w-md text-sm sm:text-base text-cream/90 leading-relaxed mt-4 drop-shadow-md",
					children: "Tenemos el honor de invitarte a celebrar el día en que unimos nuestras vidas."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#rsvp",
					className: "animate-on-scroll mt-12 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cream border-b border-gold pb-1 hover:text-gold transition-colors drop-shadow-md",
					children: ["Confirmar asistencia", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						children: "↓"
					})]
				})
			]
		})]
	});
}
function Story() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "historia",
		className: "py-24 sm:py-32 relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LottieDecoration, {
			url: "/lotties/Floral Animated Design.json",
			className: "-bottom-20 -right-10 w-96 h-96 sm:w-[600px] sm:h-[600px] opacity-70 mix-blend-multiply"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-on-scroll relative h-[500px] sm:h-[700px] w-full rounded-2xl overflow-hidden shadow-2xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "parallax-item absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-[75%_center]",
					"data-speed": "0.15",
					style: { backgroundImage: "url('/images/pexels-pham-hoang-kha-1582786-8671896.jpg')" }
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "animate-on-scroll text-xs uppercase tracking-[0.3em] text-gold mb-4",
					children: "Nuestra historia"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "animate-on-scroll font-serif text-4xl sm:text-6xl text-ink",
					children: "Cómo empezó todo"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-12 sm:gap-16",
				children: [
					{
						year: "2019",
						title: "El primer encuentro",
						text: "Un café en una tarde de otoño se convirtió en una conversación de horas. Desde ese momento supimos que había algo distinto."
					},
					{
						year: "2022",
						title: "Un hogar juntos",
						text: "Decidimos compartir cada mañana, cada viaje y cada pequeña rutina. La vida se sintió más suave a dos."
					},
					{
						year: "2025",
						title: "La propuesta",
						text: "Frente al mar, sin testigos ni ruido. Solo nosotros y una promesa que hoy queremos celebrar contigo."
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-on-scroll grid grid-cols-[auto_1fr] gap-6 sm:gap-10 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-serif italic text-3xl sm:text-4xl text-gold min-w-0",
						children: item.year
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-xl sm:text-2xl text-ink mb-2",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm sm:text-base text-muted-foreground leading-relaxed",
							children: item.text
						})]
					})]
				}, item.year))
			})] })]
		})]
	});
}
function Details() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "detalles",
		className: "py-24 sm:py-32 bg-secondary/40 relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LottieDecoration, {
			url: "/lotties/Floral frame.json",
			className: "top-0 right-0 w-80 h-80 sm:w-[500px] sm:h-[500px] opacity-70 mix-blend-multiply"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-5xl mx-auto text-center relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.3em] text-gold mb-4",
					children: "Detalles del evento"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-4xl sm:text-6xl text-ink mb-4",
					children: "Sábado, 14 de junio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mb-16",
					children: "Reserva la fecha. Los detalles aquí abajo."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 gap-10 sm:gap-16 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-on-scroll border-t border-gold/40 pt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.3em] text-gold mb-3",
								children: "Ceremonia"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-2xl sm:text-3xl text-ink mb-3",
								children: "Hacienda San Isidro"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: [
									"17:00 h · Camino del Roble 24",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Valle de Bravo, México"
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-on-scroll border-t border-gold/40 pt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.3em] text-gold mb-3",
								children: "Recepción"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-2xl sm:text-3xl text-ink mb-3",
								children: "Jardín del Encino"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: [
									"19:30 h · Cena, baile y celebración",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Código: Formal — tonos tierra"
								]
							})
						]
					})]
				})
			]
		})]
	});
}
function RSVP() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "rsvp",
		className: "py-24 sm:py-32 relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl mx-auto text-center mb-14 relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.3em] text-gold mb-4",
					children: "Confirmación"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-4xl sm:text-6xl text-ink mb-4",
					children: "Acompáñanos"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Por favor confirma tu asistencia antes del 1 de mayo de 2026."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RSVPForm, {})]
	});
}
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "galeria",
		className: "py-24 sm:py-32 relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LottieDecoration, {
			url: "/lotties/Confetti.json",
			className: "inset-0 w-full h-[150%] -top-[25%] opacity-80 pointer-events-none",
			loop: false
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-14 relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "animate-on-scroll text-xs uppercase tracking-[0.3em] text-gold mb-4",
					children: "Galería"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "animate-on-scroll font-serif text-4xl sm:text-6xl text-ink",
					children: "Momentos nuestros"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 relative z-10",
				children: [
					{
						src: "/images/pexels-pham-hoang-kha-1582786-3217456.jpg",
						span: "sm:col-span-2 sm:row-span-2 aspect-[4/5] sm:aspect-square",
						speed: "0.15"
					},
					{
						src: "/images/pexels-pham-hoang-kha-1582786-3347411.jpg",
						span: "aspect-square",
						speed: "0.08"
					},
					{
						src: "/images/pexels-pham-hoang-kha-1582786-8325802.jpg",
						span: "aspect-square",
						speed: "0.2"
					},
					{
						src: "/images/pexels-pham-hoang-kha-1582786-8325803.jpg",
						span: "sm:col-span-2 aspect-[2/1]",
						speed: "0.1"
					},
					{
						src: "/images/pexels-pham-hoang-kha-1582786-8325804.jpg",
						span: "aspect-square",
						speed: "0.25"
					}
				].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `gallery-img ${it.span} relative overflow-hidden rounded-xl shadow-lg`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "parallax-item absolute inset-0 w-full h-[130%] -top-[15%] bg-cover bg-center",
						"data-speed": it.speed,
						style: { backgroundImage: `url('${it.src}')` }
					})
				}, i))
			})]
		})]
	});
}
function MapSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "mapa",
		className: "py-0 px-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center py-16 px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.3em] text-gold mb-4",
				children: "Cómo llegar"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-4xl sm:text-6xl text-ink",
				children: "Encuéntranos"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full h-[70vh] min-h-[420px] bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				title: "Ubicación de la boda",
				src: "https://www.google.com/maps?q=Valle+de+Bravo,+Mexico&output=embed",
				className: "w-full h-full grayscale contrast-105",
				loading: "lazy",
				referrerPolicy: "no-referrer-when-downgrade"
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative py-16 text-center border-t border-border/60 overflow-hidden bg-secondary/30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LottieBottom, {
			url: "/lotties/weddingfloral.json",
			className: "opacity-80"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-serif italic text-2xl text-gold",
				children: "S & M"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs uppercase tracking-[0.3em] text-muted-foreground",
				children: "Con amor · 14.06.2026"
			})]
		})]
	});
}
function LottieInline({ url, className = "" }) {
	const [PlayerComp, setPlayerComp] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		import("../_libs/@lottiefiles/react-lottie-player+[...].mjs").then((n) => n.t).then((module) => {
			setPlayerComp(() => module.Player);
		}).catch(console.error);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `animate-on-scroll pointer-events-none z-0 ${className}`,
		children: PlayerComp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerComp, {
			src: url,
			loop: true,
			autoplay: true,
			background: "transparent",
			style: {
				width: "100%",
				height: "100%"
			}
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-full h-full py-10 sm:py-16" })
	});
}
function Gifts() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "regalos",
		className: "py-24 sm:py-32 max-w-4xl mx-auto text-center relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LottieDecoration, {
				url: "/lotties/Piggy Bank - Dancing.json",
				className: "-bottom-20 right-0 sm:-right-10 w-48 h-48 sm:w-64 sm:h-64 opacity-90"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center mb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LottieInline, {
							url: "/lotties/Wedding Couple Animation.json",
							className: "w-48 h-48 sm:w-56 sm:h-56 opacity-90"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "animate-on-scroll text-xs uppercase tracking-[0.3em] text-gold mb-4",
						children: "Mesa de Regalos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "animate-on-scroll font-serif text-4xl sm:text-6xl text-ink mb-6",
						children: "Un empujoncito..."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "animate-on-scroll text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto",
						children: "Honestamente, ¡tu presencia es el mejor regalo que podríamos pedir! Pero si sientes ese impulso incontrolable de consentirnos, ayudarnos a que no nos toque lavar los platos en la luna de miel (o a pagar esta fiestota), aquí te dejamos nuestra cuenta. ¡Prometemos brindar por ti y quererte aún más!"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-on-scroll relative z-10 inline-block text-left bg-secondary/20 border border-gold/30 rounded-2xl p-8 sm:p-12 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.3em] text-gold mb-6 text-center",
					children: "Datos Bancarios"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 text-sm sm:text-base text-ink",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-8 border-b border-border/50 pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Banco:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: "El banco de tu preferencia"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-8 border-b border-border/50 pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Titulares:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: "Sofía y Mateo"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-8 border-b border-border/50 pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Cuenta:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium tabular-nums tracking-wider",
								children: "0123 4567 89"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-8 pb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "CLABE:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium tabular-nums tracking-wider",
								children: "012 345 6789 0123 4567"
							})]
						})
					]
				})]
			})
		]
	});
}
function Header() {
	const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-4 bg-background/90 backdrop-blur-md shadow-sm border-b border-border/40" : "py-6 bg-transparent"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-6 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#inicio",
				className: "font-serif italic text-2xl text-gold drop-shadow-sm hover:opacity-80 transition-opacity",
				children: "S & M"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "hidden md:flex items-center gap-8",
				children: [
					{
						name: "Historia",
						href: "#historia"
					},
					{
						name: "Detalles",
						href: "#detalles"
					},
					{
						name: "Regalos",
						href: "#regalos"
					},
					{
						name: "Asistencia",
						href: "#rsvp"
					}
				].map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					className: `text-xs uppercase tracking-[0.2em] transition-colors hover:text-gold text-ink/80 drop-shadow-sm`,
					children: link.name
				}, link.name))
			})]
		})
	});
}
function WeddingLanding() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Details, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gifts, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RSVP, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function LoadingFallback() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			minHeight: "100vh",
			background: "#FAF8F5",
			display: "flex",
			alignItems: "center",
			justifyContent: "center"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
			width: 32,
			height: 32,
			borderRadius: "50%",
			border: "2px solid #C9A96E",
			borderTopColor: "transparent",
			animation: "spin 0.8s linear infinite"
		} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@keyframes spin { to { transform: rotate(360deg); } }` })]
	});
}
/**
* ClientOnlyLanding renders a spinner on the server AND during the first
* client render (so SSR HTML and initial hydration match — no React #418).
* After hydration, useEffect fires and we swap to the real landing page.
*/
function ClientOnlyLanding() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	if (!mounted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingFallback, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeddingLanding, {});
}
//#endregion
export { ClientOnlyLanding as component };
