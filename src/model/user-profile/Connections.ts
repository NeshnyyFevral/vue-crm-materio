import type { Chip } from '@/model/components/basic/VChip';

export interface Connections {
  id: string;
  avatar: string;
  name: string;
  post: string;
  chips: Chip[];
  projectsCount: string;
  tasksCount: string;
  connectionsCount: string;
  connected: boolean;
}

export interface ConnectionsCompact {
  id: string;
  avatar: string;
  name: string;
  connectionsCount: string;
  connected: boolean;
}
