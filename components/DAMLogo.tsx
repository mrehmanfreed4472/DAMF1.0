'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface DAMLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  withText?: boolean
  href?: string
}

const sizeClasses = {
  sm: 'h-8',
  md: 'h-12', 
  lg: 'h-16',
  xl: 'h-20'
}

export function DAMLogo({ 
  className = '',
  size = 'md',
  withText = false,
  href = '/'
}: DAMLogoProps) {
  const logoElement = (
    <div className={cn('flex items-center gap-3', className)}>
      {/* Professional logo without excessive animations */}
      <div className="relative">
        <Image
          src="/images/logo.png"
          alt="Dar Al Muaazil (DAM LLC)"
          width={200}
          height={200}
          className={cn(
            sizeClasses[size],
            'w-auto object-contain transition-transform duration-300 hover:scale-105'
          )}
          priority={false}
        />
      </div>
      
      {/* Optional text */}
      {withText && (
        <div className="flex flex-col">
          <span className="font-bold text-xl text-foreground">DAM</span>
          <span className="text-sm text-muted-foreground font-medium">
            Dar Al Muaazil LLC
          </span>
        </div>
      )}
    </div>
  )

  if (href && href !== '') {
    return (
      <Link href={href} className="inline-block transition-opacity duration-300 hover:opacity-90">
        {logoElement}
      </Link>
    )
  }

  return logoElement
}
