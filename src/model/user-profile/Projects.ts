import type { GlobalColors } from '@/model/Colors';
import type { AvatarGroup } from '@/model/components/basic/VAvatar';

export interface Projects {
  id: string;
  avatar: string;
  title: string;
  client: string;
  totalBudgetGot: string;
  totalBudgetNeed: string;
  startDate: string;
  deadline: string;
  desc: string;
  allHours: string;
  daysLeft: number;
  daysLeftColor: GlobalColors;
  taskComplete: number;
  taskNeed: number;
  avatarGroup: AvatarGroup[];
  membersCount: string;
  comments: number;
}

export interface ProjectsCompact {
  id: string;
  avatar: string | null;
  title: string;
  date: string;
  leader: string;
  team: AvatarGroup[];
  progress: string;
  actions: any;
}
