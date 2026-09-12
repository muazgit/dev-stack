function YourStack({ selectedStack, setSelectedStack }) {
  const handleRemove = id => {
    setSelectedStack(selectedStack.filter(technology => technology.id !== id));
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <aside className="w-full rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)]">
      {/* Header */}
      <div>
        <h2 className="text-[18px] font-bold leading-7 text-slate-900">
          Your Stack
        </h2>

        <p className="mt-0.5 text-[11px] font-normal leading-[17px] text-slate-400">
          {selectedStack.length === 0
            ? 'No technologies selected yet.'
            : `${selectedStack.length} Technology Selected`}
        </p>
      </div>

      {/* Empty */}
      {selectedStack.length === 0 ? (
        <div className="mt-4 flex min-h-[68px] items-center justify-center rounded-xl border border-dashed border-slate-200">
          <p className="text-[11px] text-slate-400">Your stack is empty.</p>
        </div>
      ) : (
        <>
          {/* Selected Items */}
          <div className="mt-4 space-y-2">
            {selectedStack.map(technology => (
              <div
                key={technology.id}
                className="flex min-h-[50px] items-center gap-2 rounded-lg border border-slate-200 px-2.5 py-2"
              >
                {/* Icon */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                  <img
                    src={technology.icon}
                    alt={`${technology.name} icon`}
                    className="h-7 w-7 object-contain"
                  />
                </div>

                {/* Name */}
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-[11px] font-semibold leading-4 text-slate-800">
                    {technology.name}
                  </h3>

                  <p className="text-[9px] leading-4 text-slate-400">
                    {technology.category}
                  </p>
                </div>

                {/* Remove */}
                <button
                  type="button"
                  onClick={() => handleRemove(technology.id)}
                  className="px-1 text-xl font-normal leading-none text-slate-300 transition hover:text-slate-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            type="button"
            onClick={handleRemoveAll}
            className="mt-5 h-10 w-full rounded-lg border border-red-200 bg-white text-[12px] font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default YourStack;
