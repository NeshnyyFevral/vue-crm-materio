import type { GlobalColors } from '@/model/Colors';
import type { AvatarGroup } from '@/model/components/basic/VAvatar';

export interface ChipsGroup {
  id: string;
  color: GlobalColors;
  title: string;
}

export interface Teams {
  id: string;
  avatar: string;
  title: string;
  desc: string;
  avatarGroup: AvatarGroup[];
  chips: ChipsGroup[];
}
