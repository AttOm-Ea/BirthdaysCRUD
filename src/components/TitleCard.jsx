
export default function TitleCard({later}) {
    return (
        <div className='w-full py-1 flex justify-start items-center text-white text-lg'> {/* Title */}
            <span className='mr-3 ml-2 md:ml-6'> {later} </span>
            <div className='w-10/12 md:w-11/12 h-1 bg-white rounded-full'> </div>
        </div>
    );
}

