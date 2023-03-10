import TitleImage from './resources/Title.png';
import LocationMapImage from './resources/LocationMap.png';
import GalleryPhoto1 from './resources/Gallery_Photo_1.png';
import GalleryPhoto2 from './resources/Gallery_Photo_2.png';
import GalleryPhoto3 from './resources/Gallery_Photo_3.png';
import GalleryPhoto4 from './resources/Gallery_Photo_4.png';
import GalleryPhoto5 from './resources/Gallery_Photo_5.png';
import GalleryPhoto6 from './resources/Gallery_Photo_6.png';

const Configs: ConfigsType = {
  url: 'http://localhost:3000',
  kakaoToken: '카카오톡 API 토큰을 입력해주세요!',
  kakaoImage: '카카오톡으로 공유할 때 사용되는 대표이미지 URL을 입력해주세요!',
  weddingDate: '2023년 10월 08일, 일요일 오후 12시 10분',
  weddingLocation: '더컨벤션 영등포, 2층 다이너스티홀',
  groom: {
    name: '김재헌',
    accountNumber: '국민은행 539102-01-234151',
    fatherName: '김인기',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: '오순환',
    motherAccountNumber: '○○은행 ***-***-******',
  },
  bride: {
    name: '김소현',
    accountNumber: '우리은행 396176-765-02001',
    fatherName: '김',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: '서명초',
    motherAccountNumber: '○○은행 ***-***-******',
  },
  titleImage: TitleImage,
  locationMapImage: LocationMapImage,
  galleryImages: [
    GalleryPhoto1,
    GalleryPhoto2,
    GalleryPhoto3,
    GalleryPhoto4,
    GalleryPhoto5,
    GalleryPhoto6,
  ],
};

export type ConfigsType = {
  url: string;
  kakaoToken: string;
  kakaoImage: string;
  weddingDate: string;
  weddingLocation: string;
  groom: Person;
  bride: Person;
  titleImage: string;
  locationMapImage: string;
  galleryImages: string[];
};

type Person = {
  name: string;
  accountNumber: string;
  fatherName?: string;
  fatherAccountNumber?: string;
  motherName?: string;
  motherAccountNumber?: string;
};

export default Configs;
