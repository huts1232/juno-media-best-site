type Props = {
  /** 'fill' = massieve merkvorm (default). 'draw' = centerlijnen voor de intro-animatie. */
  variant?: 'fill' | 'draw'
  className?: string
  title?: string
}

const LIGHT_FILL =
  'M24.145 62.955C17.926 62.109 12.565 59.458 8.151 55.047C4.676 51.575 2.397 47.707 1.014 42.934C0.066 39.665 0.104 40.427 0.044 23.618L-0.011 8.183L1.12 8.281C4.103 8.538 6.623 9.674 8.869 11.776C10.752 13.537 11.915 15.468 12.623 18.012C12.929 19.113 12.952 19.686 13.043 28.494C13.136 37.454 13.153 37.858 13.481 39.053C14.939 44.353 18.911 48.251 24.352 49.719C26.075 50.184 29.224 50.187 31.085 49.724C33.803 49.049 35.902 47.911 37.862 46.049C40.505 43.538 42.115 40.187 42.471 36.452L42.571 35.404L49.104 35.404L55.637 35.404L55.536 36.939C54.648 50.486 44.68 61.183 31.285 62.966C29.202 63.243 26.226 63.239 24.145 62.955Z'

const DARK_FILL =
  'M97.526 54.8C92.538 53.822 88.619 50.128 87.242 45.109C86.915 43.916 86.897 43.496 86.802 34.55C86.717 26.501 86.668 25.111 86.444 24.34C85.609 21.472 84.395 19.332 82.537 17.458C76.249 11.117 65.786 11.826 60.412 18.958C58.773 21.133 57.707 23.9 57.508 26.495L57.408 27.795L50.831 27.795L44.255 27.795L44.255 27.446C44.255 27.253 44.327 26.328 44.416 25.388C45.03 18.881 47.655 13.118 52.082 8.563C55.839 4.696 59.982 2.243 64.942 0.946C67.81 0.197 68.793 0.078 72.127 0.078C75.462 0.078 76.445 0.197 79.313 0.946C90.451 3.857 98.794 13.686 99.799 25.078C99.867 25.846 99.902 32.886 99.877 40.722L99.831 54.969L99.023 54.952C98.578 54.943 97.904 54.874 97.526 54.8Z'

/** Centerlijnen, geometrisch afgeleid uit dezelfde bron. */
export const LIGHT_DRAW = 'M6.52 8.23 V35.32 A21.19 21.19 0 0 0 48.91 35.32'
export const DARK_DRAW = 'M93.48 54.97 V27.88 A21.19 21.19 0 0 0 51.09 27.88'
export const STROKE_WIDTH = 13.04

export default function LogoMark({ variant = 'fill', className, title = 'JUNO Media' }: Props) {
  if (variant === 'draw') {
    return (
      <svg viewBox="0 0 100 63.199" className={className} role="img" aria-label={title}>
        <g fill="none" strokeWidth={STROKE_WIDTH} strokeLinecap="butt">
          <path
            data-logo-light
            d={LIGHT_DRAW}
            stroke="var(--brand-light, #43B1D6)"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={1}
          />
          <path
            data-logo-dark
            d={DARK_DRAW}
            stroke="var(--brand-dark, #015C92)"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={1}
          />
        </g>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 100 63.199" className={className} role="img" aria-label={title}>
      <path d={LIGHT_FILL} fill="var(--brand-light, #43B1D6)" />
      <path d={DARK_FILL} fill="var(--brand-dark, #015C92)" />
    </svg>
  )
}
