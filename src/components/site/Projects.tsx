import { LineupCarousel } from '@/components/site/LineupCarousel';
import { content } from '@/lib/content';

export function Projects() {
  const { current, past, upcoming } = content.projects;

  const items = [
    {
      id: `current-${current.name}`,
      kicker: current.status,
      title: current.name,
      description: current.description ?? '',
      url: current.url,
      image: current.image,
      ctaLabel: 'Watch live',
    },
    ...past.map((project) => ({
      id: `past-${project.name}`,
      kicker: project.status,
      title: project.name,
      description: project.description ?? '',
      url: project.url,
      image: project.image,
    })),
    ...upcoming.map((project) => ({
      id: `upcoming-${project.name}`,
      kicker: project.status,
      title: project.name,
      description: project.description ?? '',
      url: project.url,
      image: project.image,
    })),
  ];

  return (
    <LineupCarousel
      id="projects"
      className="bg-secondary"
      heading="Live projects."
      lede="Built in public as daily live streams. Swipe the line-up."
      label="Live projects"
      items={items}
    />
  );
}
