import * as React from "react";
import { Thread } from "../types/threads";
import { View, Text } from "./Themed";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { timeAgo } from "../utils/time-ago";

export default function ThreadsItem(thread: Thread): JSX.Element {
  return (
    <View>
      <Text>{thread.author.username}</Text>
      <View>
        <PostHeading
          name={thread.author.name}
          createdAt={thread.createdAt}
          verified={thread.author.verified}
        />
        <PostFooter
          replies={thread.repliesCount}
          likes={thread.likesCount}
        ></PostFooter>
      </View>
    </View>
  );
}

function PostHeading({
  name,
  createdAt,
  verified,
}: {
  name: String;
  createdAt: string;
  verified: boolean;
}): JSX.Element {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexGrow: 1,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Text style={{ fontWeight: "500" }}>{name}</Text>
        {verified && (
          <MaterialIcons name="verified" size={14} color="#60a5fa" />
        )}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Text style={{ color: "gray" }}>{timeAgo(createdAt)}</Text>
        <Feather name="more-horizontal" size={14} color="gray" />
      </View>
    </View>
  );
}

function PostFooter({
  replies,
  likes,
}: {
  replies: number;
  likes: number;
}): JSX.Element {
  return (
    <Text style={{ color: "gray" }}>
      {replies} replies · {likes} likes
    </Text>
  );
}
