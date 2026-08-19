type MobileFrameProps = {
  video?: {
    ariaLabel: string;
    poster: string;
    src: string;
  };
  /** Wordt pas true zodra de kaart in beeld komt; dan krijgt de video zijn src. */
  loadVideo: boolean;
};

/**
 * Telefoonframe met een korte video. De video wordt lazy geladen en start bij
 * intersect; de sectie zet play/pause via [data-mobile-video].
 */
export function MobileFrame({ video, loadVideo }: MobileFrameProps) {
  return (
    <div className="sv-mobile">
      <div className="sv-mobile__device">
        <span className="sv-mobile__notch" aria-hidden="true" />
        {video ? (
          <video
            className="sv-mobile__video"
            data-mobile-video
            aria-label={video.ariaLabel}
            muted
            loop
            playsInline
            preload="none"
            poster={video.poster}
            width={720}
            height={1280}
          >
            {loadVideo && video.src ? <source src={video.src} type="video/mp4" /> : null}
          </video>
        ) : (
          <span className="sv-mobile__placeholder" aria-hidden="true" />
        )}
      </div>
      <span className="sv-mobile__glow" aria-hidden="true" />
    </div>
  );
}
