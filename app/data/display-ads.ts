export type DisplayAd = {
  id: string;
  advertiser: string;
  title: string;
  imageUrl: string;
  altText: string;
  width: number;
  height: number;
  clickthroughUrl: string;
};

export const mockDisplayAds: DisplayAd[] = [
  {
    id: "queer-film-festival",
    advertiser: "Frame & Flame",
    title: "Stories worth seeing together",
    imageUrl:
      "https://placehold.co/380x250/d1d1ff/090934.png?text=Frame+%26+Flame+Film+Festival",
    altText: "Frame and Flame Queer Film Festival: Stories worth seeing together",
    width: 380,
    height: 250,
    clickthroughUrl: "https://example.com/frame-and-flame",
  },
  {
    id: "rainbow-picture-house",
    advertiser: "Rainbow Picture House",
    title: "A theater for every story",
    imageUrl:
      "https://placehold.co/250x660/f2c1d1/30203c.png?text=Rainbow+Picture+House%0AIndependent+Cinema",
    altText: "Rainbow Picture House: Independent cinema for every story",
    width: 250,
    height: 660,
    clickthroughUrl: "https://example.com/rainbow-picture-house",
  },
  {
    id: "community-cinema",
    advertiser: "Open Screen",
    title: "Make room for every story",
    imageUrl:
      "https://placehold.co/250x660/c7e6db/173b35.png?text=Open+Screen%0ALocal+Queer+Film+Nights",
    altText: "Open Screen: Local queer film nights and community screenings",
    width: 250,
    height: 660,
    clickthroughUrl: "https://example.com/open-screen",
  },
];
