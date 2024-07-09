interface Destination {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  alt: string;
  description: string;
  distance: string;
  travel: string;
}

export interface Destinations {
  moon: Destination;
  mars: Destination;
  europa: Destination;
  titan: Destination;
}
