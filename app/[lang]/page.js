import {getDictionary} from "@/app/[lang]/dictionaries";
import PhotoList from "@/components/PhotoList";
export default async function Home() {
    // const dictionary = await getDictionary(lang);
    // console.log(process.env.BASE_API_URL)

    const response = await fetch (`${process.env.BASE_API_URL}/photos`);
    const photos = await response.json();
    return (
        <PhotoList photos={photos}/>
    );
}
