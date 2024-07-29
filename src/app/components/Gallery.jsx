// "use client";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "./ui/carousel";
// import Image from "next/image";

// const images = [
//   "https://i.imgur.com/3dHfvOk.jpg",
//   "https://i.imgur.com/dciY69O.jpg",
//   "https://i.imgur.com/8UEUlks.jpg",
//   "https://i.imgur.com/QghS3lK.jpg",
//   "https://i.imgur.com/69VmXIE.jpg",
//   "https://i.imgur.com/IXtZDa6.jpg",
//   "https://i.imgur.com/sw3MPFh.jpg",
//   "https://i.imgur.com/L0OepAz.jpg",
//   "https://i.imgur.com/3KzlZMI.jpg",
//   "https://i.imgur.com/rA3Dby3.jpg",
//   "https://i.imgur.com/m927hkb.jpg",
//   "https://i.imgur.com/GIOssTT.jpg",
//   "https://i.imgur.com/5uzxoP6.jpg",
//   "https://i.imgur.com/nUxahHk.jpg",
// ];

// export function Gallery() {
//   return (
//     <Carousel className="w-full max-w-xs">
//       <CarouselContent>
//         {images.map((image, index) => (
//           <CarouselItem key={index}>
//             <div className="p-1">
//               <Image
//                 src={image}
//                 alt="Random image"
//                 width={500}
//                 height={500}
//               />
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// }

// export default Gallery;

// const links = `"https://i.imgur.com/sw3MPFh.jpg", "https://i.imgur.com/L0OepAz.jpg", "https://i.imgur.com/3KzlZMI.jpg", "https://i.imgur.com/rA3Dby3.jpg", "https://i.imgur.com/m927hkb.jpg", "https://i.imgur.com/GIOssTT.jpg", "https://i.imgur.com/5uzxoP6.jpg", "https://i.imgur.com/nUxahHk.jpg"`;

// const images = [
//   "https://i.imgur.com/3dHfvOk.jpg",
//   "https://i.imgur.com/dciY69O.jpg",
//   "https://i.imgur.com/8UEUlks.jpg",
//   "https://i.imgur.com/QghS3lK.jpg",
//   "https://i.imgur.com/69VmXIE.jpg",
//   "https://i.imgur.com/IXtZDa6.jpg",
//   "https://i.imgur.com/sw3MPFh.jpg",
//   "https://i.imgur.com/L0OepAz.jpg",
//   "https://i.imgur.com/3KzlZMI.jpg",
//   "https://i.imgur.com/rA3Dby3.jpg",
//   "https://i.imgur.com/m927hkb.jpg",
//   "https://i.imgur.com/GIOssTT.jpg",
//   "https://i.imgur.com/5uzxoP6.jpg",
//   "https://i.imgur.com/nUxahHk.jpg",
// ];
import Image from "next/image";
const Gallery = () => {
  return (
    <div id="gallery" className="mb-10">
      <h2 className="text-center text-5xl my-5 font-greatVibes text-unolight">
        Photo Gallery
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="grid gap-4">
          <Image
            src="https://i.imgur.com/XKnToDp.jpeg"
            alt="Maria y Diego"
            width={500}
            height={200}
            className="object-cover rounded"
          />
          <Image
            src="https://i.imgur.com/dciY69O.jpeg"
            alt="Maria y Diego"
            width={500}
            height={900}
            className="object-cover rounded"
          />
          <Image
            src="https://i.imgur.com/M60WjnX.jpeg"
            alt="Maria y Diego"
            width={500}
            height={500}
            className="object-cover rounded"
          />
        </div>
        <div className="grid gap-4">
          <Image
            src="https://i.imgur.com/QghS3lK.jpeg"
            alt="Maria y Diego"
            width={500}
            height={500}
            className="object-cover rounded"
          />
          <Image
            src="https://i.imgur.com/69VmXIE.jpeg"
            alt="Maria y Diego"
            width={500}
            height={500}
            className="object-cover rounded"
          />
          <Image
            src="https://i.imgur.com/IXtZDa6.jpeg"
            alt="Maria y Diego"
            width={500}
            height={500}
            className="object-cover rounded"
          />
        </div>
        <div className="grid gap-4">
          <Image
            src="https://i.imgur.com/sw3MPFh.jpeg"
            alt="Maria y Diego"
            width={500}
            height={500}
            className="object-cover rounded"
          />
          <Image
            src="https://i.imgur.com/MRieZAT.jpeg"
            alt="Maria y Diego"
            width={500}
            height={500}
            className="object-cover rounded"
          />
          <Image
            src="https://i.imgur.com/3KzlZMI.jpeg"
            alt="Maria y Diego"
            width={500}
            height={500}
            className="object-cover rounded"
          />
        </div>
        <div className="grid gap-4">
          <Image
            src="https://i.imgur.com/rA3Dby3.jpeg"
            alt="Maria y Diego"
            width={500}
            height={500}
            className="object-cover rounded"
          />
          <Image
            src="https://i.imgur.com/m927hkb.jpeg"
            alt="Maria y Diego"
            width={500}
            height={500}
            className="object-cover rounded"
          />
          <Image
            src="https://i.imgur.com/5uzxoP6.jpeg"
            alt="Maria y Diego"
            width={500}
            height={500}
            className="object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
