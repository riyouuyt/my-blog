import Image from 'next/image';
import SubscribeInput from './SubscribeInput';
import siteData from 'siteData';
import Container from './Container';

export default function HeroHeader({ blog }: any) {
  return (
    <div className="py-24 text-center bg-gray-100">
      <Container>
        
        <div className="mt-4 text-3xl font-extrabold text-gray-900">
          {siteData?.headerTitle}
        </div>
        <div className="max-w-0xl mx-auto mt-2 text-xl text-gray-500">
          {siteData?.headerDescription}
        </div>

        <div className="hidden mt-12">
          <SubscribeInput />
        </div>
      </Container>
    </div>
  );
}
