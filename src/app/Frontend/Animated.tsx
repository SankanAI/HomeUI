import React from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  CodeXml, 
  Brain, 
  Rocket, 
  Globe,
  SmilePlus,
  Landmark
} from 'lucide-react';

// Card data with icons, titles, and descriptions
const cardData = [
  {
    icon: SmilePlus,
    title: 'Communication',
    description: 'Capture moments that last a lifetime.'
  },
  {
    icon: CodeXml,
    title: 'Programming',
    description: 'Explore the latest in digital innovation.'
  },
  {
    icon: Landmark,
    title: 'Finace',
    description: 'Immerse yourself in virtual worlds.'
  },
  {
    icon: Brain,
    title: 'Critical Thinking',
    description: 'Experience sound like never before.'
  },
  {
    icon: Rocket,
    title: 'Creativity',
    description: 'Discover new horizons and possibilities.'
  },
  {
    icon: Globe,
    title: 'Collaboration',
    description: 'Journey across the world\'s wonders.'
  }
];

const CardCollection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {cardData.map((card, index) => (
        <Card 
          key={index} 
          className="w-[300px] bg-[#0A0A0B] flex flex-col items-center p-4 rounded-[3vh] border-gray-950"
        >
          <CardHeader className="flex flex-col items-center text-white">
            <card.icon className="w-12 h-12 mb-4 text-white" />
            <CardTitle className="text-center">{card.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow text-center">
            <p className="text-muted-foreground">{card.description}</p>
          </CardContent>
          <div className="self-start mb-2 w-full">
            <Button size="icon" className="p-2 w-full bg-[#6d28d9] border-none text-white">
              {card.title}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CardCollection;