import React from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Camera, 
  Laptop, 
  Gamepad2, 
  Headphones, 
  Rocket, 
  Globe 
} from 'lucide-react';

// Card data with icons, titles, and descriptions
const cardData = [
  {
    icon: Camera,
    title: 'Photography',
    description: 'Capture moments that last a lifetime.'
  },
  {
    icon: Laptop,
    title: 'Technology',
    description: 'Explore the latest in digital innovation.'
  },
  {
    icon: Gamepad2,
    title: 'Gaming',
    description: 'Immerse yourself in virtual worlds.'
  },
  {
    icon: Headphones,
    title: 'Music',
    description: 'Experience sound like never before.'
  },
  {
    icon: Rocket,
    title: 'Exploration',
    description: 'Discover new horizons and possibilities.'
  },
  {
    icon: Globe,
    title: 'Travel',
    description: 'Journey across the world\'s wonders.'
  }
];

const CardCollection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {cardData.map((card, index) => (
        <Card 
          key={index} 
          className="w-[300px] h-[350px] flex flex-col items-center p-4"
        >
          <CardHeader className="flex flex-col items-center">
            <card.icon className="w-12 h-12 text-primary mb-4" />
            <CardTitle className="text-center">{card.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow text-center">
            <p className="text-muted-foreground">{card.description}</p>
          </CardContent>
          <div className="self-start mb-2 ml-2">
            <Button variant="outline" size="icon" className="w-8 h-8">
              <img 
                src="/api/placeholder/40/40" 
                alt="Small Button" 
                className="w-full h-full rounded-sm"
              />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CardCollection;