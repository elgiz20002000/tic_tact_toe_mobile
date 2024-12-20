import { EInviteStatus, EStatus, } from "./constants";
import { Player } from "./interface";

export const players: Player[] = [
    {
      id: 1,
      name: "Chris Hamilton",
      status: EStatus.Online,
      inviteStatus: EInviteStatus.Accepted,
    },
    {
      id: 2,
      name: "Chris Hamilton",
      status: EStatus.Playing,
      inviteStatus: EInviteStatus.Pending,
    },
    {
      id: 3,
      name: "Chris Hamilton",
      status: EStatus.Online,
      inviteStatus: EInviteStatus.Invited,
    },
    {
        id: 4,
        name: "Chris Hamilton",
        status: EStatus.Online,
        inviteStatus: EInviteStatus.Denied,
      },
  ];
  