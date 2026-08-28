import { LineupCarousel } from '@/components/site/LineupCarousel';
import { content } from '@/lib/content';
import { optionalHref } from '@/lib/utils';

export function Projects() {
  const { current, past, upcoming } = content.projects;

  const items = [
    {
      id: `current-${current.name}`,
      kicker: current.status,
      title: current.name,
      description: current.description ?? '',
      status: current.status,
      url: current.url,
      githubUrl: optionalHref(current.githubUrl),
      image: current.image,
    },
    ...past.map((project) => ({
      id: `past-${project.name}`,
      kicker: project.status,
      title: project.name,
      description: project.description ?? '',
      status: project.status,
      url: project.url,
      githubUrl: optionalHref(project.githubUrl),
      image: project.image,
    })),
    ...upcoming.map((project) => ({
      id: `upcoming-${project.name}`,
      kicker: project.status,
      title: project.name,
      description: project.description ?? '',
      status: project.status,
      url: project.url,
      githubUrl: optionalHref(project.githubUrl),
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
