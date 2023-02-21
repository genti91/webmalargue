import desktop from '../../assets/img/desktop.jpg'
import tablet from '../../assets/img/tablet.jpg'
import mobile from '../../assets/img/mobile.jpg'

export const BannerHome1 = () => {

    return <picture style={{ padding: 0 }}>
        <source media='(max-width:768px)' srcSet={mobile} style={{ width: '100%', maxWidth: '100%' }} />
        <source media='(max-width:1024px)' srcSet={tablet} style={{ width: '100%', maxWidth: '100%' }} />
        <img src={desktop} alt='Banner Malargüe' style={{ width: '100%', maxWidth: '100%' }} />
    </picture>
}