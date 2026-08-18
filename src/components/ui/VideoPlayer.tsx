"use client";

type VideoPlayerProps = {
  poster: string;
  src: string;
  label: string;
};

export function VideoPlayer({ poster, src, label }: VideoPlayerProps) {
  return (
    <video aria-label={label} muted loop playsInline poster={poster} preload="none">
      <source src={src} />
    </video>
  );
}
