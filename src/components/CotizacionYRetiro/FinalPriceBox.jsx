export const FinalPriceBox = ({ price }) => {
return (
    <div className='tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-full'>
        <div className='tw-flex tw-flex-col tw-w-full tw-max-w-[350px] tw-justify-center tw-items-center text-center tw-rounded-lg tw-border tw-border-[#707070] '>
          <span className='tw-text-[#2F3394] tw-text-2xl tw-font-semibold tw-py-2'>
            PRECIO FINAL
          </span>
          <span className='tw-w-full tw-text-white tw-text-2xl tw-font-semibold tw-bg-[#2F3394] tw-rounded-b-lg tw-py-2'>
            ARS ${price}
          </span>
        </div>
      </div>
)
}