import { CellItem } from "./SajuTable";

interface DefaultCellProps {
  items: CellItem[];
}

const DefaultCell = ({ items }: DefaultCellProps) => {
  return (
    <div className="flex flex-col items-center justify-center border-r border-b bg-white py-1">
      {items.map((item, i) => (
        <div
          key={i}
          className="px-0.5 py-1 text-center leading-tight font-semibold"
        >
          <div className="text-[5cqi]">{item.value}</div>
          <div className="text-[3cqi]">({item.name})</div>
        </div>
      ))}
    </div>
  );
};

export default DefaultCell;
