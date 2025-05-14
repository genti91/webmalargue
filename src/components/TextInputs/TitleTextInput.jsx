export default function TitleTextInput({ email = false, title, input, setInput, mandatory = false, placeholder = 'Ingrese el campo', zipCode = false }) {
  return (
    <div className={`tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-2 tw-w-full ${zipCode && 'tw-max-w-[158px]'}`}>
      <h2 className="tw-text-base tw-font-normal tw-text-[#2F3394]">
        {title}
        {mandatory && <span className="tw-font-bold tw-text-[#EB1C23]"> *</span>}
      </h2>
      <input
        type="text"
        value={input}
        placeholder={placeholder}
        onChange={(e) => setInput(e.target.value)}
        className={`${zipCode && 'tw-max-w-[158px]'} ${email && 'tw-max-w-[537px]'} tw-border tw-border-[#2F3394] tw-placeholder-[#B3B3B3] tw-rounded-lg tw-p-2 tw-w-full focus:tw-outline-none tw-bg-[#FFFFFF] tw-px-4`}
        required={mandatory}
        aria-label={title}
      />
    </div>
  );
}
