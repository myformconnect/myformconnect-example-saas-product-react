import React, { useEffect, useState, useRef } from 'react';
import ScrollReveal from '../common/ScrollReveal';

function AnimatedCounter({ endValue, suffix = '', prefix = '', decimals = 0, duration = 1200 }) {
  const [count, setCount] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return endValue;
      }
    }
    return 0;
  });
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    if (count === endValue) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, endValue]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = endValue / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, endValue, duration]);

  return (
    <span ref={counterRef} className="font-mono font-bold tracking-tight text-orange-600">
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString()}
      {suffix}
    </span>
  );
}

export default function MetricsSection() {
  const metrics = [
    {
      component: <AnimatedCounter endValue={10} suffix="k+" />,
      label: 'Active teams & developers',
    },
    {
      component: <AnimatedCounter endValue={99.9} suffix="%" decimals={1} />,
      label: 'Platform uptime SLA',
    },
    {
      component: <AnimatedCounter endValue={42} suffix="%" />,
      label: 'Faster workflow turnaround',
    },
    {
      component: <AnimatedCounter endValue={25} prefix="< " suffix="ms" />,
      label: 'Average trigger latency',
    },
  ];

  return (
    <section className="py-16 bg-transparent border-b border-stone-200/80">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-stone-200/80 text-center">
          {metrics.map((item, index) => (
            <ScrollReveal key={item.label} direction="up" delay={index * 80}>
              <div className={`px-4 ${index > 0 ? 'pt-6 sm:pt-0' : ''}`}>
                <div className="text-3xl sm:text-4xl">
                  {item.component}
                </div>
                <div className="text-xs sm:text-sm text-stone-500 mt-2 font-medium">
                  {item.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
