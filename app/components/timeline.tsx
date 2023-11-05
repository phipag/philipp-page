function BulletPoint({ icon }: { readonly icon: React.ReactNode }) {
  return (
    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-sky-700 ring-8 ring-white">
      {icon ?? (
        <svg
          className="h-2.5 w-2.5 text-gray-50"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      )}
    </span>
  );
}

export interface TimelineEntryProps {
  readonly title: string;
  readonly date: string;
  readonly children: React.ReactNode;
  readonly current?: boolean;
  readonly className?: string;
  readonly icon?: React.ReactNode;
}

export function TimelineEntry({ title, date, children, current, className, icon }: TimelineEntryProps) {
  return (
    <li className={`ml-6 ${className ?? ""}`}>
      <BulletPoint icon={icon} />
      <h3 className="mb-1 flex items-center text-lg font-semibold">
        {title}
        {current && (
          <span className="ml-3 mr-2 rounded bg-sky-700 px-2.5 py-0.5 text-sm font-medium text-gray-50">
            Current position
          </span>
        )}
      </h3>
      <time className="mb-2 block text-sm font-normal leading-none text-gray-600">{date}</time>
      {children}
    </li>
  );
}

export interface TimelineProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export default function Timeline({ children, className }: TimelineProps) {
  return <ol className={`relative ml-3 border-l border-gray-200 ${className ?? ""}`}>{children}</ol>;
}
