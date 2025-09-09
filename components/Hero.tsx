'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState, useCallback } from 'react';

export function Hero() {
  const { t, isRTL } = useTranslation();

  const slides = [
    'https://cdn.builder.io/api/v1/image/assets%2F1f92479787d647a5873d822973f760c7%2Fc5d02e0dc2c74859bba425d28e991ddc?format=webp&width=800',
    'https://cdn.builder.io/api/v1/image/assets%2F1f92479787d647a5873d822973f760c7%2F97373c22686e448c8c3ec74943d0c89c?format=webp&width=800',
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => {
      if (!emblaApi) return;
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      else emblaApi.scrollTo(0);
    }, 3500);
    emblaApi.on('select', onSelect);
    onSelect();
    return () => clearInterval(id);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  }, [emblaApi]);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL() ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-8"
            >
              <Award className="h-4 w-4" />
              {t('hero.standards')}
            </motion.div>

            <motion.h1
              suppressHydrationWarning
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6 leading-tight"
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-muted-foreground mb-4 leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground mb-8 leading-relaxed max-w-lg"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/products">
                <Button size="lg" className="gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 transition-all duration-300">
                  {t('hero.cta')}
                  <ArrowRight className={`h-5 w-5 ${isRTL() ? 'rotate-180' : ''}`} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="gap-3 border-primary/30 text-primary hover:bg-primary/10 font-semibold px-8 py-4">
                  {t('common.contactUs')}
                </Button>
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
            >
              {[
                { icon: Shield, title: isRTL() ? 'ضمان الجودة' : 'Quality Assured', subtitle: isRTL() ? 'معايير عالمية' : 'International Standards' },
                { icon: Truck, title: isRTL() ? 'توصيل سريع' : 'Fast Delivery', subtitle: isRTL() ? 'في جميع أنحاء الإمارات' : 'Across UAE' },
                { icon: Award, title: isRTL() ? 'خبرة موثوقة' : 'Trusted Expertise', subtitle: isRTL() ? 'سنوات من الخبرة' : 'Years of Experience' }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-3 text-center sm:text-left"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{feature.title}</p>
                      <p className="text-xs text-muted-foreground">{feature.subtitle}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: isRTL() ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[60vh] sm:h-[64vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh] rounded-2xl overflow-hidden shadow-2xl">
              <div className="h-full" ref={emblaRef}>
                <div className="flex h-full">
                  {slides.map((src, idx) => (
                    <div key={idx} className="min-w-0 flex-[0_0_100%] h-full relative">
                      <img src={src} alt={`Insulation and waterproofing solutions in UAE - The DAM LLC (slide ${idx + 1})`} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-accent/40"></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => scrollTo(i)}
                    className={`h-2.5 w-2.5 rounded-full ${i === selectedIndex ? 'bg-white/90' : 'bg-white/50 hover:bg-white/70'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
