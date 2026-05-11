import React from "react";
import { motion } from "framer-motion";

export function Carousel3D({
  items,
  className = "",
  wrapperClassName = "",
  cardClassName = "",
  cardWidth = 160,
  cardHeight = 160,
  translateZ = 200,
  rotateX = -10,
  perspective = 1000,
  animationDuration = 32,
  pauseOnHover = false,
}) {
  const quantity = items.length;

  return (
    <div
      className={`carousel3d-wrapper ${wrapperClassName}`}
      style={{
        "--quantity": quantity,
      }}
    >
      <div
        className={`carousel3d-inner ${pauseOnHover ? "pause-on-hover" : ""} ${className}`}
        style={{
          "--w": `${cardWidth}px`,
          "--h": `${cardHeight}px`,
          "--translateZ": `${translateZ}px`,
          "--rotateX": `${rotateX}deg`,
          "--perspective": `${perspective}px`,
          "--animation-duration": `${animationDuration}s`,
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`carousel3d-card border* border-primary/10 hover:border-primary/80 ${cardClassName}`}
            style={{
              "--index": index,
              "--width": `${item.width}px`,
              "--height": `${item.height}px`,
            }}
          >
            {item.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Convenience component for image carousels
export function Carousel3DImages({
  images,
  cardWidth = 260,
  cardHeight = 260,
  translateZ = 280,
  rotateX = -10,
  perspective = 1000,
  animationDuration = 32,
  pauseOnHover = true,
  ...carouselProps
}) {
  const items = images.map((image) => ({
    id: image.id,
    alt: image.alt,
    content: image.isMobileApp ? (
      // Mobile phone mockup frame
      <div className="h-full w-fit mx-auto flex items-center justify-center">
        <div className="relative bg-base-100 overflow-hidden rounded-xl border-2 border-base-content/80 h-[95%] aspect-[9/19.5]">
          {/* Screen */}
          <div className="relative w-full h-full bg-base-300 rounded-lg overflow-hidden">
            <img
              alt={image.alt}
              src={image.src}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Home indicator */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-black rounded-full" />
        </div>
      </div>
    ) : (
      <div className="h-full w-full rounded-md items-center flex justify-center overflow-hidden">
        <img
          alt={image.alt}
          src={image.src}
          className="hover:border transition-all duration-300 border-foreground/40 hover:shadow-lg hover:shadow-amber-200/40 object-contain rounded-md"
          width={image.width}
          height={image.height}
          loading="lazy"
        />
      </div>
    ),
  }));

  return (
    <Carousel3D
      items={items}
      cardWidth={cardWidth}
      cardHeight={cardHeight}
      translateZ={translateZ}
      rotateX={rotateX}
      perspective={perspective}
      animationDuration={animationDuration}
      pauseOnHover={pauseOnHover}
      {...carouselProps}
    />
  );
}
