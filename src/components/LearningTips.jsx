import {tips} from '@/lib/tips'
import {Avatar, Card} from "@heroui/react";
import Image from 'next/image';
const LearningTips = () => {
    return (
       <div>
        <div className="text-center mb-8 mt-16">
        <h2 className="text-3xl font-bold">
          Learning Tips
        </h2>

        <p className="text-gray-500 mt-2">
          Improve your productivity and learning habits.
        </p>
      </div>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5  container mx-auto'>
            {
                tips.map(tip => <Card key={tip.id} className="gap-2 shadow">

           <div className='text-3xl'>
            {tip.icon}
           </div>
           
        <Card.Header className='space-y-2'>
          <Card.Title className='text-xl font-bold'>{tip.title}</Card.Title>
          <Card.Description>{tip.description}</Card.Description>
        </Card.Header>
      </Card> )
            }
        </div>
       </div>
    );
};

export default LearningTips;