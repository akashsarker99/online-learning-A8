import React from 'react';
import { newReleases} from '@/lib/newRelease'
import NewReleaseCard from './shared/NewReleaseCard';
const NewReleases = () => {
    return (
        <div className="container mx-auto py-20 px-4">
        <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">
          New Releases
        </h2>
        <p className="text-gray-500 mt-2">
          Explore the latest courses added to SkillSphere.
        </p>
      </div>
       
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {
            newReleases.map(newCard => <NewReleaseCard key={newCard.id} newCard={newCard}></NewReleaseCard>)
        }
       </div>

        </div>
    );
};

export default NewReleases;