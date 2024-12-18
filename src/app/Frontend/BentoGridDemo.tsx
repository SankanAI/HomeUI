import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}


const items = [
  {
    title: "Gamified Learning",
    description: "A Game is more intresting than one sided learning",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 cursor-pointer overflow-hidden">
    <Image width="0" height="0" className="w-full h-full" src="https://images.pexels.com/photos/459762/pexels-photo-459762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Not found"/>
  </div>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Interactive Session",
    description: "Two way Interaction between various components",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 cursor-pointer overflow-hidden">
    <Image width="0" height="0" className="w-full h-full" src="https://images.pexels.com/photos/29803760/pexels-photo-29803760/free-photo-of-building-creativity-with-colorful-magnetic-blocks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Not found"/>
  </div>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Story Based",
    description: "A Story behind everything makes a boring things intresting",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 cursor-pointer overflow-hidden">
    <Image width="0" height="0" className="w-full h-full" src="https://images.pexels.com/photos/7494469/pexels-photo-7494469.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Not found"/>
  </div>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI Integration for Learning",
    description:
      "Stuck While Learning AI will help you.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 cursor-pointer overflow-hidden">
    <Image width="0" height="0" className="w-full h-full" src="https://images.pexels.com/photos/1269789/pexels-photo-1269789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Not found"/>
  </div>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Learn in Public",
    description: "Building or Learning in public invite more opportunities.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 cursor-pointer overflow-hidden">
    <Image width="0" height="0" className="w-full h-full" src="https://images.pexels.com/photos/3769706/pexels-photo-3769706.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Not found"/>
  </div>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Everything in one",
    description: "All of the learning and Integration at one place in Sankan AI",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 cursor-pointer overflow-hidden">
    <Image width="0" height="0" className="w-full h-full" src="https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Not found"/>
  </div>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Join Waitlist",
    description: "For more infromation and upcomming events please Join waitlist",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 cursor-pointer overflow-hidden">
    <Image width="0" height="0" className="w-full h-full" src="https://images.pexels.com/photos/3030268/pexels-photo-3030268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Not found"/>
  </div>,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
