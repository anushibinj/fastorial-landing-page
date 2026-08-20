import { Separator } from '@/components/ui/separator';
import { content } from '@/lib/content';

export function Courses() {
  return (
    <section id="courses" className="scroll-mt-12 bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-[980px] px-6">
        <h2 className="text-center text-[32px] font-semibold tracking-[-0.025em] text-foreground md:text-[48px]">
          Upcoming courses.
        </h2>
        <p className="mx-auto mt-4 max-w-[40ch] text-center text-[19px] leading-relaxed text-muted-foreground">
          What is being recorded next.
        </p>

        <ul className="mx-auto mt-16 max-w-[720px]">
          {content.courses.map((course, index) => (
            <li key={`${course.title}-${index}`}>
              {index > 0 && <Separator className="bg-border" />}
              <div className="grid gap-3 py-10 md:grid-cols-[1fr_auto] md:items-baseline md:gap-8">
                <div>
                  <h3 className="text-[24px] font-semibold tracking-[-0.02em] text-foreground">
                    {course.title}
                  </h3>
                  <p className="mt-2 max-w-[55ch] text-[17px] leading-relaxed text-muted-foreground">
                    {course.description}
                  </p>
                </div>
                <p className="text-[14px] text-muted-foreground md:text-right">
                  <span className="block text-foreground">{course.status}</span>
                  {course.startDate}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
