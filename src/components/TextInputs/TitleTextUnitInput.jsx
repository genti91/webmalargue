export default function TitleTextUnitInput({ unit = "cm", title, input, setInput, mandatory = false, placeholder = 'Ingrese el campo' }) {
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
                className={` tw-placeholder-[#B3B3B3] tw-rounded-lg tw-p-2 tw-w-full tw-px-4`}
                required={mandatory}
                aria-label={title}
            />
            <span className="tw-text-center tw-px-3 tw-bg-[#2F3394] tw-text-white tw-w-fit tw-overflow-hidden tw-rounded-r-lg tw-flex tw-items-center tw-h-full">
              {unit}
            </span>
        </div>
      </div>
    );
  }
  