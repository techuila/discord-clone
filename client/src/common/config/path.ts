export const path = {
  auth: {
    login: {
      path: "/login",
      getHref: () => "/login",
    },
  },
  channels: {
    root: {
      path: "/channels",
      getHref: () => "/channels",
    },
    friends: {
      path: "@me",
      getHref: () => "/channels/@me",
    },
    directMessages: {
      path: "@me/:channelId",
      getHref: (channelId: string) => `/channels/@me/${channelId}`,
    },
    servers: {
      path: ":channelId",
      getHref: (channelId: string) => `/channels/${channelId}`,
    },
  },
} as const;
