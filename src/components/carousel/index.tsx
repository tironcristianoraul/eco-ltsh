import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import './index.css';
import 'swiper/css/navigation';
import 'swiper/css';
import { url } from '../../utils/axios/constants';

interface Props {
    images: string[]
}

const Carousel = ({ images }: Props) => {
    return (
        <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            navigation
            style={{ height: '100%' }}
        >
            {images.map((photo, index) => (
                <SwiperSlide key={`${photo}-${index}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img crossOrigin="anonymous" src={`${url}/uploads/${photo}`} key={`${index}-${photo}`} onLoad={(event) => {
                        const imgElement = event.target as HTMLImageElement;
                        const isPortrait = imgElement.naturalHeight > imgElement.naturalWidth;
                        console.log(`${index}: ${imgElement.naturalHeight} ${imgElement.naturalWidth}`);
                        imgElement.style.objectFit = 'contain'

                        if (isPortrait) {
                            imgElement.style.maxWidth = '90%'
                            imgElement.style.maxHeight = '80%'
                        } else {
                            imgElement.style.maxHeight = '80%'
                            imgElement.style.maxWidth = '80%'
                        }
                    }} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Carousel