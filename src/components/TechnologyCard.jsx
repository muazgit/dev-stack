import { toast } from 'react-toastify';

function TechnologyCard({ technology, selectedStack, setSelectedStack }) {
  const isAdded = selectedStack.some(item => item.id === technology.id);

  const handleAddToStack = () => {
    // Duplicate technology
    if (isAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    // Add technology
    setSelectedStack([...selectedStack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  return (
    <article className="flex min-h-[194px] flex-col rounded-xl border border-slate-200 bg-white p-4">
      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="h-8 w-8 object-contain"
          />
        </div>

        <span className="rounded-full bg-orange-50 px-3 py-1 text-[10px] font-semibold text-orange-600">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-4 text-[18px] font-bold text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 line-clamp-3 text-[12px] leading-5 text-slate-500">
        {technology.description}
      </p>

      {/* Bottom Information */}
      <div className="mt-auto">
        <div className="mt-4 flex items-center justify-between gap-2">
          <div className="flex gap-2">
            <span className="rounded bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500">
              {technology.category}
            </span>

            <span className="rounded bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500">
              {technology.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px]">
            <span className="text-yellow-400">★</span>

            <span className="font-semibold text-slate-600">
              {technology.rating}
            </span>
          </div>
        </div>

        {/* Add Button */}
        <button
          onClick={handleAddToStack}
          disabled={isAdded}
          className={`mt-4 w-full rounded-lg px-3 py-2.5 text-[11px] font-semibold transition ${
            isAdded
              ? 'cursor-not-allowed bg-slate-200 text-slate-500'
              : 'bg-slate-950 text-white hover:bg-slate-800'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </article>
  );
}

export default TechnologyCard;
