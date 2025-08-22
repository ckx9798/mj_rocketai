import { FILTER, HEADER, ROWS } from "../constant";

import ColoredCell from "./ColoredCell";
import DefaultCell from "./DefaultCell";
import EmptyCell from "./EmptyCell";
import React from "react";
import { SAJU_DATA as rawSajuData } from "../fortune-data";

export type Filter = "si" | "il" | "wol" | "nyeon";

export type CellItem = {
  value: string;
  name: string;
  subname?: string;
  bgColor?: string;
};

type CellData = CellItem | CellItem[] | null;

type SajuFilterData = {
  [key: string]: CellData;
};

type SajuData = {
  [key in Filter]: SajuFilterData;
};

const SAJU_DATA: SajuData = rawSajuData;

const SajuTable = () => {
  // 데이터 배열 변경 함수
  function normalizeCell(data: CellData): CellItem[] {
    if (!data) return [];
    return Array.isArray(data) ? data : [data];
  }
  return (
    <div className="bg-tablebg @container mx-3 mb-8 grid grid-cols-5 border-r border-b text-center">
      {/* === 헤더 행  === */}
      {HEADER.map((head, index) => (
        <div
          className="flex min-h-[12cqi] flex-col justify-center border-r border-b text-[6cqi] font-bold"
          key={head || index}
        >
          {head}
        </div>
      ))}

      {/* === 데이터 행 === */}
      {ROWS.map((row) => (
        <React.Fragment key={row.key}>
          {/* --- 왼쪽 라벨 셀 ---  */}
          <div className="flex flex-col items-center justify-center border-r border-b font-bold">
            <span className="text-[4cqi]">{row.label}</span>
            <span className="text-[2.5cqi]">({row.name})</span>
          </div>

          {FILTER.map((filter) => {
            const pillarData = SAJU_DATA[filter];
            const cellData = pillarData[row.key];
            const items = normalizeCell(cellData);
            const isColorRow = row.key === "cheonkan" || row.key === "jiji";

            // --- 없음 셀 ---
            if (items.length === 0) {
              return <EmptyCell key={filter} />;
            }

            // --- 천간/지지 색상 셀 ---
            if (isColorRow) {
              return <ColoredCell key={filter} item={items[0]} />;
            }

            // --- 기본 셀 ---
            return <DefaultCell key={filter} items={items} />;
          })}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SajuTable;
