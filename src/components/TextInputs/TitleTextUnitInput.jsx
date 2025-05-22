export default function TitleTextUnitInput({ 
  unit = "cm", 
  title, 
  input, 
  setInput,
  mandatory = false, 
  placeholder = 'Ingrese el campo', 
  info = false, 
  disabled = false, 
  error = false 
}) {
    return (
      <div className={`tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-2 tw-w-full `}>
        <h2 className="tw-text-base tw-font-normal tw-text-[#2F3394]">
          {title}
          {mandatory && <span className="tw-font-bold tw-text-[#EB1C23]"> *</span>}
        </h2>
        <div className="tw-rounded-lg tw-text-center tw-flex tw-items-stretch tw-w-full tw-border tw-border-[#2F3394] focus:tw-outline-none tw-bg-[#FFFFFF]">
            <input
              type="text"
              value={input}
              placeholder={placeholder}
              onChange={(e) => setInput(e.target.value)}
              className={` tw-placeholder-[#B3B3B3] tw-rounded-l-lg tw-py-2 tw-w-full tw-pl-4 ${disabled ? 'tw-bg-[#E9ECEF] tw-border-[#B2B2B2] tw-text-[#756C7D] tw-cursor-not-allowed' : 'tw-border-[#2F3394] tw-bg-[#FFFFFF]'}`}
              required={mandatory}
              aria-label={title}
              disabled={disabled}
            />
            <div className="tw-bg-[#2F3394] tw-rounded-r-lg tw-flex tw-items-center tw-self-stretch tw-ml-2 tw-px-2">
              <span className="tw-text-white tw-text-center">
                {unit}
              </span>
            </div>
        </div>
          {typeof info === 'string' && (
            <span className="tw-text-[#2F3394] tw-w-fit tw-overflow-hidden tw-rounded-r-lg tw-flex tw-items-center tw-self-stretch">
              {info}
            </span>
          )}
          {error && (
            <span className="tw-text-[#EB1C23] tw-text-xs">{error}</span>
          )}
      </div>
    );
  }
  