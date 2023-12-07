import type { AvatarGroup } from '@/model/components/basic/VAvatar';
import type { Chip } from '@/model/components/basic/VChip';

export interface Teams {
  id: string;
  avatar: string;
  title: string;
  desc: string;
  avatarGroup: AvatarGroup[];
  chips: Chip[];
}
