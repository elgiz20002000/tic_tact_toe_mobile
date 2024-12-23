import { EInviteStatus, EStatus } from "./constants";

export interface Player {
    id?: number;
    name: string;
    status: EStatus;
    inviteStatus?: EInviteStatus; 
  }
  
  export interface IPlayerCard{
    player: Player;
    index: number;
    handlePresentPress: (player: Player) => void;
  }

  export interface IPlayerInfo extends Player {
    isFriend?: boolean;
  }