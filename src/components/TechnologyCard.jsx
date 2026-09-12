function TechnologyCard({ technology, selectedStack, setSelectedStack }) {
  const isAdded = selectedStack.some(item => item.id === technology.id);

  const handleAddToStack = () => {
    if (isAdded) return;

    setSelectedStack([...selectedStack, technology]);
  };

  return (
    <article className="flex min-h-[282px] w-full flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)]">
      {/* Top */}
      <div className="flex items-start justify-between">
        {/* Icon */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="h-7 w-7 object-contain"
          />
        </div>

        {/* Badge */}
        <span className="rounded-full border border-orange-100 bg-orange-50 px-[10px] py-[2px] text-[11px] font-semibold leading-[18px] text-orange-600">
          {technology.badge}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-1 text-[18px] font-bold leading-7 text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-1 line-clamp-3 text-[12px] font-normal leading-[19.5px] text-slate-500">
        {technology.description}
      </p>

      {/* Bottom Content */}
      <div className="mt-auto">
        {/* Divider */}
        <div className="mt-4 border-t border-slate-50 pt-2">
          <div className="flex items-center justify-between">
            {/* Category */}
            <span className="rounded bg-slate-100/80 px-2 py-[2px] text-[11px] font-medium leading-[17px] text-slate-600">
              {technology.category}
            </span>

            {/* Difficulty */}
            <span className="text-[11px] font-medium text-slate-500">
              {technology.difficulty}
            </span>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <span className="text-[12px] text-amber-400">★</span>

              <span className="text-[11px] font-semibold text-slate-600">
                {technology.rating}
              </span>
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleAddToStack}
          disabled={isAdded}
          className={`mt-4 flex h-10 w-full items-center justify-center rounded-lg px-3 text-[12px] font-medium transition ${
            isAdded
              ? 'cursor-not-allowed bg-slate-200 text-slate-500'
              : 'bg-[#0a0f1d] text-white hover:bg-slate-800'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </article>
  );
}

export default TechnologyCard;
