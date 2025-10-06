import { Star } from 'lucide-react'
import React from 'react'

const StarRating = ({count}) => {
    return (
        <div className='flex text-amber-400'>
            {[...Array(5)].map((_,i) => (
                <Star key={i} className={`w-4 h-4 fill-current ${i < count ? 'opacity-100' : 'opacity-30'}`}/>
            ))}
        </div>
    );
}

export default StarRating;
