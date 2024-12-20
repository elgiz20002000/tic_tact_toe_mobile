import { EInviteStatus, EStatus } from "./constants";

export interface Player {
    id?: number;
    name: string;
    status: EStatus;
    inviteStatus?: EInviteStatus; 
  }
  