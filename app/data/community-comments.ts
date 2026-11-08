export type MovieComment = {
  id: string;
  username: string;
  displayName: string;
  profilePictureUrl: string;
  timestamp: Date;
  body: string;
};

type CommunityMember = Pick<
  MovieComment,
  "username" | "displayName" | "profilePictureUrl"
>;

const communityMembers: CommunityMember[] = [
  {
    username: "framebyframe",
    displayName: "Jordan M.",
    profilePictureUrl: "https://placehold.co/96x96/d1d1ff/090934.png?text=JM",
  },
  {
    username: "softfocus",
    displayName: "Sam Rivera",
    profilePictureUrl: "https://placehold.co/96x96/d1d1ff/090934.png?text=SR",
  },
  {
    username: "nightatthereel",
    displayName: "Avery Chen",
    profilePictureUrl: "https://placehold.co/96x96/d1d1ff/090934.png?text=AC",
  },
  {
    username: "reel_feels",
    displayName: "Morgan Lee",
    profilePictureUrl: "https://placehold.co/96x96/d1d1ff/090934.png?text=ML",
  },
  {
    username: "cinemabloom",
    displayName: "Riley Brooks",
    profilePictureUrl: "https://placehold.co/96x96/d1d1ff/090934.png?text=RB",
  },
  {
    username: "popcornpoet",
    displayName: "Taylor James",
    profilePictureUrl: "https://placehold.co/96x96/d1d1ff/090934.png?text=TJ",
  },
];

export function createComment(
  movieId: number,
  commentNumber: number,
  memberIndex: number,
  timestamp: string,
  body: string,
): MovieComment {
  const member = communityMembers[memberIndex % communityMembers.length];

  return {
    id: `${movieId}-${commentNumber}`,
    ...member,
    timestamp: new Date(timestamp),
    body,
  };
}