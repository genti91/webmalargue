export default function TitleSelectInput({
  title,
  input,
  setInput,
  mandatory = false,
  placeholder = 'Seleccione una opción',
  options = [],
  error = false,
  small
}) {
  return (
    <div className={`tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-2 tw-w-full ${small && 'md:tw-max-w-[158px]'}`}>
      <h2 className="tw-text-base tw-font-normal tw-text-[#2F3394]">
        {title}
        {mandatory && <span className="tw-font-bold tw-text-[#EB1C23]"> *</span>}
      </h2>
      <select
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={`tw-border tw-border-[#2F3394] tw-placeholder-[#B3B3B3] tw-rounded-lg tw-p-2 tw-w-full focus:tw-outline-none tw-bg-[#FFFFFF] tw-px-4 '}`}
        required={mandatory}
        aria-label={title}
      >
        <option value="" disabled hidden>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="tw-text-[#EB1C23] tw-text-xs">{error}</span>
      )}
    </div>
  );
}
  