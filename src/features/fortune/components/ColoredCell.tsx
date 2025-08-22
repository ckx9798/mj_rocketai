import { CellItem } from "./SajuTable";

interface ColoredCellProps {
  item: CellItem;
}

const ColoredCell = ({ item }: ColoredCellProps) => {
  const textColor = item.bgColor === "#F9F9F9" ? "#000000" : "#F9F9F9";

  return (
    <div className="flex items-center justify-center border-r border-b bg-white p-1.5">
      <div
        className={`flex aspect-square w-full flex-col items-center justify-center rounded-xl p-1 ${
          textColor === "#000000" ? "border border-black" : ""
        }`}
        style={{
          backgroundColor: item.bgColor,
          color: textColor,
        }}
      >
        <div className="text-[2.5cqi]">{item.name}</div>
        <div className="text-[6cqi] font-bold">{item.value}</div>
        <div className="text-[2.5cqi]">{item.subname}</div>
      </div>
    </div>
  );
};

export default ColoredCell;
