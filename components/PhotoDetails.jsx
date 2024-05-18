import {getDictionary} from "@/app/[lang]/dictionaries";
import Image from "next/image";
import Link from "next/link";

async function PhotoDetails({id, lang}) {
    const response = await fetch(`${process.env.BASE_API_URL}/photos/${id}`);
    const photo = await response.json();
    const dictionary = await getDictionary(lang);
    return (
        <div className="grid grid-cols-12 gap-4 2xl:gap-10 ">

            <div className="col-span-12 lg:col-span-8 border rounded-xl">
                <Image width={900} height={900} className="max-w-full h-full max-h-[70vh] object-contain mx-auto"
                       src={photo.url}
                       alt={photo.title}/>
            </div>


            <div className="p-6 border rounded-xl col-span-12 lg:col-span-4">
                <h2 className="text-lg lg:text-2xl font-bold mb-2">
                    {photo.title}
                </h2>
                <div className="text-xs lg:text-sm text-black/60 mb-6 flex gap-1">
                    {photo.tags.map(tag => <span key={photo.id}>#{tag}</span>)}
                </div>

                <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">

                    <div className="flex justify-between">
                        <span>{dictionary.views}</span>
                        <span className="font-bold">{photo.views}</span>
                    </div>

                    <div className="flex justify-between">
                        <span>{dictionary.share}</span>
                        <span className="font-bold">{photo.share}</span>
                    </div>

                    <div className="flex justify-between">
                        <span>{dictionary.uploadedOn}</span>
                        <span className="font-bold">{photo.uploaded}</span>
                    </div>

                </div>

                <div className="mt-6">

                    <div className="flex justify-between items-center mb-3">

                        <div className="flex items-center gap-3">
                            <Image className="size-12 lg:size-14 rounded-full border"
                                   src={photo.author.avatar} alt="avatar" width={50} height={50}/>
                            <div className="spacy-y-3">
                                <h6 className="lg:text-lg font-bold">{photo.author.name}</h6>
                                <p className="text-black/60 text-xs lg:text-sm">{photo.author.followers} {dictionary.followers}</p>
                            </div>
                        </div>

                        <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
                            <Image width={50} height={50} alt="follow" src="/follow.svg" className="w-5 h-5"/>
                            {dictionary.follow}
                        </button>
                    </div>

                    <p className="text-xs lg:text-sm text-black/60">
                        {photo.author.bio}
                    </p>
                </div>

                <div className="mt-6">
                    <div className="flex items-stretch gap-3">
                        <button
                            className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                            <Image width={50} height={50} src="/heart.svg" className="w-5 h-5" alt="likes"/>
                            {photo.likes}
                        </button>
                        <button
                            className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                            <Image width={50} height={50} src="/save.svg" className="w-5 h-5" alt="save"/>
                            {dictionary.save}
                        </button>
                        <button
                            className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                            <Image width={50} height={50} src="/share.svg" alt="share" className="w-5 h-5"/>

                            {dictionary.share}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default PhotoDetails;
