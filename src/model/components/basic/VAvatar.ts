export enum AvatarSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  EXTRA_LARGE = 'extra-large',
}

export enum AvatarVariant {
  CYCLE = 'cycle',
  ROUNDED = 'rounded',
  SQUARE = 'square',
}

export interface AvatarGroup {
  id: string;
  src: string;
  alt: string;
}
