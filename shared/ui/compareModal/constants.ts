export const CompareModalMessages = {
    LeaveMatch: {
      title: "Leave a Match?",
      message: "If you leave this match, it will count as a loss. Are you sure you want to exit?",
      confirmText: "Yes",
      cancelText: "Cancel",
    },
    RemoveFriend: (name: string) => ({
      title: "Remove a Friend?",
      message: `Are you sure you want to remove "${name}" from your friends list?`,
      confirmText: "Remove",
      cancelText: "Cancel",
    }),
  };
  