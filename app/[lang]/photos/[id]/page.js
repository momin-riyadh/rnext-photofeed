import PhotoDetails from "@/components/PhotoDetails";

const PhotoDetailPage = ({params: {id, lang}}) => {
    return (
        <PhotoDetails id={id} lang={lang}/>
    )
}

export default PhotoDetailPage;
