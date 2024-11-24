import { Schema } from "@/amplify/data/resource";

export type CreationMatch = Pick<Schema["Match"]["type"],"team1" | "team2" | "date">