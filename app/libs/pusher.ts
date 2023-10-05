import PusherServer from "pusher";
import PusherClient from "pusher-js";

export const pusherServer = new PusherServer({
  appId: process.env.NEXT_PUBLIC_PUSEHER_APP_ID!,
  key: process.env.NEXT_PUBLIC_PUSEHER_APP_KEY!,
  secret: process.env.NEXT_PUBLIC_PUSEHER_SECRET!,
  cluster: process.env.NEXT_PUBLIC_PUSEHER_CLUSTER!,
  useTLS: true,
});

export const pusherClient = new PusherClient(
  process.env.NEXT_PUBLIC_PUSEHER_APP_KEY!,
  {
    channelAuthorization: {
      endpoint: "/api/pusher/auth",
      transport: "ajax",
    },
    cluster: process.env.NEXT_PUBLIC_PUSEHER_CLUSTER!,
  }
);
