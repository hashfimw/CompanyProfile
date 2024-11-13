

interface ExpandableSectionProps {
  title: string;
  content: string;
  index: number;
  expandedIndex: null | number;
  toggleExpand: (index: number) => void;
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  content,
  index,
  expandedIndex,
  toggleExpand,
}) => {
  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => toggleExpand(index)}
        className="flex justify-between w-full text-left py-4 text-gray-700 font-semibold text-lg"
      >
        {title}
        <span>{expandedIndex === index ? "-" : "+"}</span>
      </button>
      {expandedIndex === index && (
        <div className="py-2 pl-4 text-gray-600">{content}</div>
      )}
    </div>
  );
};

export default ExpandableSection;
