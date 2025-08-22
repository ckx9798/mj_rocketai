import { Filter } from "./components/SajuTable";

export const HEADER = ["", "時", "日", "月", "年"];

export const ROWS = [
  { key: "sipseong", label: "十星", name: "십성" },
  { key: "cheonkan", label: "天干", name: "천간" },
  { key: "jiji", label: "地支", name: "지지" },
  { key: "sipseong2", label: "十星", name: "십성" },
  { key: "sibiunseong", label: "十二運星", name: "십이운성" },
  { key: "sibishinsal", label: "十二神殺", name: "십이신살" },
  { key: "gwiin", label: "貴人", name: "귀인" },
];

export const FILTER: Filter[] = ["si", "il", "wol", "nyeon"];
