import { toast } from 'react-toastify';

function YourStack({ selectedStack, setSelectedStack }) {
  const handleRemove = id => {
    const technology = selectedStack.find(item => item.id === id);

    const updatedStack = selectedStack.filter(item => item.id !== id);

    setSelectedStack(updatedStack);

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) {
      return;
    }

    setSelectedStack([]);

    toast.info('All technologies removed from your stack.');
  };

  return (
    <aside className="h-fit rounded-xl border border-slate-200 bg-white p-5 lg:sticky lg:top-24">
      {/* Header */}
      <div>
        <h2 className="text-[18px] font-bold text-slate-900">Your Stack</h2>

        <p className="mt-1 text-[12px] text-slate-400">
          {selectedStack.length === 0
            ? 'No technologies selected yet.'
            : `${selectedStack.length} Technology${
                selectedStack.length > 1 ? 'ies' : 'y'
              } Selected`}
        </p>
      </div>

      {/* Empty State */}
      {selectedStack.length === 0 ? (
        <div className="mt-5 flex min-h-[80px] items-center justify-center rounded-xl border border-dashed border-slate-200">
          <p className="text-[11px] text-slate-400">Your stack is empty.</p>
        </div>
      ) : (
        <>
          {/* Selected Technologies */}
          <div className="mt-5 space-y-2">
            {selectedStack.map(technology => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2.5"
              >
                {/* Icon */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                  <img
                    src={technology.icon}
                    alt={`${technology.name} icon`}
                    className="h-7 w-7 object-contain"
                  />
                </div>

                {/* Name + Category */}
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-[11px] font-semibold text-slate-800">
                    {technology.name}
                  </h3>

                  <p className="mt-0.5 text-[9px] text-slate-400">
                    {technology.category}
                  </p>
                </div>

                {/* Remove */}
                <button
                  onClick={() => handleRemove(technology.id)}
                  className="px-1 text-xl leading-none text-slate-300 transition hover:text-slate-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            onClick={handleRemoveAll}
            className="mt-5 w-full rounded-lg border border-red-200 py-2.5 text-[11px] font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default YourStack;
