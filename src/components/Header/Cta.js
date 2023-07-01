import { PlusIcon } from '@heroicons/react/20/solid';

export const Cta = () => {
	return (
		<div>
			<div className="flex-shrink-0">
				<button
					type="button"
					className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
				>
					<PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
					New Job
				</button>
			</div>
		</div>
	);
};
