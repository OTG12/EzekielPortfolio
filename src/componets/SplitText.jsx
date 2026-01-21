import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

const SplitText = ({
  text,
  className = "",
  delay = 0.02, // Changed to seconds for consistency
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 20 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  gradientColors = ["#60a5fa", "#22d3ee", "#60a5fa"], // Blue gradient colors
  enableGradient = false,
  highlightColor = "#22d3ee", // Cyan color for highlight
  enableHighlight = false,
  staggerDirection = "normal", // normal, reverse, random
  onLetterAnimationComplete,
  revealDirection = "forward", // forward, backward, center, edges
  enableGlitch = false,
  glitchStrength = 0.1,
  enableWave = false,
  waveAmplitude = 5,
  enableFloat = false,
  floatStrength = 2,
}) => {
  const ref = useRef(null);

  // Calculate stagger based on direction
  const getStagger = () => {
    const baseStagger = delay;
    switch (staggerDirection) {
      case "reverse":
        return -baseStagger;
      case "random":
        return () => Math.random() * baseStagger * 2;
      case "center":
        return {
          amount: baseStagger * 2,
          from: "center"
        };
      case "edges":
        return {
          amount: baseStagger * 2,
          from: "edges"
        };
      default:
        return baseStagger;
    }
  };

  // Apply gradient text effect
  const applyGradientEffect = (elements) => {
    if (!enableGradient || !gradientColors || gradientColors.length < 2) return;

    elements.forEach((el, index) => {
      const progress = index / (elements.length - 1);
      const colorIndex = Math.floor(progress * (gradientColors.length - 1));
      const nextColorIndex = Math.min(colorIndex + 1, gradientColors.length - 1);
      const colorProgress = (progress * (gradientColors.length - 1)) - colorIndex;
      
      // Linear interpolation between colors
      const interpolateColor = (color1, color2, t) => {
        const r1 = parseInt(color1.slice(1, 3), 16);
        const g1 = parseInt(color1.slice(3, 5), 16);
        const b1 = parseInt(color1.slice(5, 7), 16);
        
        const r2 = parseInt(color2.slice(1, 3), 16);
        const g2 = parseInt(color2.slice(3, 5), 16);
        const b2 = parseInt(color2.slice(5, 7), 16);
        
        const r = Math.round(r1 + (r2 - r1) * t);
        const g = Math.round(g1 + (g2 - g1) * t);
        const b = Math.round(b1 + (b2 - b1) * t);
        
        return `rgb(${r}, ${g}, ${b})`;
      };
      
      const color = interpolateColor(
        gradientColors[colorIndex],
        gradientColors[nextColorIndex],
        colorProgress
      );
      
      el.style.color = color;
    });
  };

  // Apply highlight effect
  const applyHighlightEffect = (elements) => {
    if (!enableHighlight || !highlightColor) return;
    
    elements.forEach((el, index) => {
      // Add subtle shadow for depth
      el.style.textShadow = `0 2px 10px ${highlightColor}40`;
      
      // Add hover effect
      el.addEventListener('mouseenter', () => {
        gsap.to(el, {
          color: highlightColor,
          scale: 1.1,
          duration: 0.2,
          ease: "power2.out"
        });
      });
      
      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          color: enableGradient ? '' : '#f8fafc',
          scale: 1,
          duration: 0.2,
          ease: "power2.out"
        });
      });
    });
  };

  // Apply glitch effect
  const applyGlitchEffect = (elements) => {
    if (!enableGlitch) return;
    
    elements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        const tl = gsap.timeline();
        tl.to(el, {
          x: () => (Math.random() - 0.5) * glitchStrength * 20,
          y: () => (Math.random() - 0.5) * glitchStrength * 20,
          duration: 0.05,
          repeat: 3,
          yoyo: true
        })
        .to(el, {
          x: 0,
          y: 0,
          duration: 0.1
        });
      });
    });
  };

  // Apply wave effect
  const applyWaveEffect = (elements) => {
    if (!enableWave) return;
    
    elements.forEach((el, index) => {
      const time = index * 0.1;
      
      gsap.to(el, {
        y: () => Math.sin((gsap.ticker.time + time) * 2) * waveAmplitude,
        duration: 2,
        repeat: -1,
        ease: "sine.inOut"
      });
    });
  };

  // Apply float effect
  const applyFloatEffect = (elements) => {
    if (!enableFloat) return;
    
    elements.forEach((el, index) => {
      gsap.to(el, {
        y: `-=${floatStrength}`,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.1
      });
    });
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const absoluteLines = splitType === "lines";
    if (absoluteLines) el.style.position = "relative";

    const splitter = new GSAPSplitText(el, {
      type: splitType,
      absolute: absoluteLines,
      linesClass: "split-line",
      charsClass: "split-char",
      wordsClass: "split-word",
    });

    let targets;
    switch (splitType) {
      case "lines":
        targets = splitter.lines;
        break;
      case "words":
        targets = splitter.words;
        break;
      case "words, chars":
        targets = [...splitter.words, ...splitter.chars];
        break;
      default:
        targets = splitter.chars;
    }

    // Apply initial styles
    targets.forEach((t) => {
      t.style.willChange = "transform, opacity";
      t.style.display = "inline-block";
      t.style.whiteSpace = "pre-wrap";
      
      // Set initial color for gradient
      if (enableGradient) {
        t.style.color = gradientColors[0];
      }
    });

    // Apply effects
    applyGradientEffect(targets);
    applyHighlightEffect(targets);
    applyGlitchEffect(targets);
    if (enableWave) applyWaveEffect(targets);
    if (enableFloat) applyFloatEffect(targets);

    const startPct = (1 - threshold) * 100;
    const m = /^(-?\d+)px$/.exec(rootMargin);
    const raw = m ? parseInt(m[1], 10) : 0;
    const sign = raw < 0 ? `-=${Math.abs(raw)}px` : `+=${raw}px`;
    const start = `top ${startPct}%${sign}`;

    // Create timeline with enhanced animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
        once: true,
      },
      smoothChildTiming: true,
      onComplete: () => {
        if (onLetterAnimationComplete) onLetterAnimationComplete();
        
        // Add subtle glow after animation
        if (enableHighlight) {
          gsap.to(targets, {
            duration: 2,
            textShadow: `0 0 20px ${highlightColor}40`,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
          });
        }
      },
    });

    // Enhanced from state with rotation and scale
    const enhancedFrom = {
      ...from,
      rotationX: from.rotationX || 90,
      scale: from.scale || 0.8,
      filter: "blur(4px)",
      immediateRender: false,
      force3D: true,
    };

    // Enhanced to state
    const enhancedTo = {
      ...to,
      rotationX: to.rotationX || 0,
      scale: to.scale || 1,
      filter: "blur(0px)",
      duration,
      ease,
      stagger: getStagger(),
      force3D: true,
    };

    tl.set(targets, enhancedFrom);
    tl.to(targets, enhancedTo);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(targets);
      splitter.revert();
    };
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    from,
    to,
    threshold,
    rootMargin,
    onLetterAnimationComplete,
    enableGradient,
    gradientColors,
    enableHighlight,
    highlightColor,
    staggerDirection,
    revealDirection,
    enableGlitch,
    glitchStrength,
    enableWave,
    waveAmplitude,
    enableFloat,
    floatStrength,
  ]);

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline-block whitespace-normal leading-tight ${className}`}
      style={{
        textAlign,
        wordWrap: "break-word",
        color: enableGradient ? 'transparent' : '#f8fafc', // Blue-50 color
        background: enableGradient 
          ? `linear-gradient(90deg, ${gradientColors.join(', ')})`
          : 'transparent',
        WebkitBackgroundClip: enableGradient ? 'text' : 'initial',
        backgroundClip: enableGradient ? 'text' : 'initial',
        fontWeight: 600,
        letterSpacing: '-0.025em',
      }}
    >
      {text}
    </p>
  );
};

// Export preset configurations for easy use
export const SplitTextPresets = {
  HeroTitle: {
    splitType: "chars",
    delay: 0.03,
    duration: 0.8,
    from: { opacity: 0, y: 40, rotationX: 90 },
    to: { opacity: 1, y: 0, rotationX: 0 },
    enableGradient: true,
    gradientColors: ["#60a5fa", "#22d3ee", "#60a5fa"], // Blue gradient
    enableHighlight: true,
    highlightColor: "#22d3ee",
    enableFloat: true,
    floatStrength: 2,
  },
  SectionTitle: {
    splitType: "words",
    delay: 0.05,
    duration: 0.6,
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    enableGradient: true,
    gradientColors: ["#93c5fd", "#22d3ee"], // Lighter blue gradient
    enableWave: true,
    waveAmplitude: 3,
  },
  Paragraph: {
    splitType: "lines",
    delay: 0.1,
    duration: 0.5,
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    enableHighlight: true,
    highlightColor: "#38bdf8",
  },
  FeatureText: {
    splitType: "chars",
    delay: 0.02,
    duration: 0.4,
    from: { opacity: 0, scale: 0.5 },
    to: { opacity: 1, scale: 1 },
    enableGlitch: true,
    glitchStrength: 0.05,
    staggerDirection: "center",
  }
};

export default SplitText;