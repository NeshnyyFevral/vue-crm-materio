import type { GlobalColors } from '@/model/Colors';

export interface Users {
  avatar: string | null;
  name: string;
  tag: string;
  email: string;
  roleIcon: any;
  roleColor: GlobalColors;
  role: string;
  status: string;
  statusColor: GlobalColors;
}
