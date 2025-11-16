import { lazy, Suspense } from 'react';

const CoursesContent = lazy(() => import('./CoursesContent'));

interface Course {
  id: number;
  title: string;
  description: string;
  status: string;
  startDate: string;
}

interface CoursesProps {
  courses: Course[];
}

export default function Courses({ courses }: CoursesProps) {
  return (
    <section id="courses" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-12 bg-slate-200 rounded w-1/3 mx-auto mb-16"></div>
              <div className="h-64 bg-slate-200 rounded-xl"></div>
            </div>
          </div>
        }>
          <CoursesContent courses={courses} />
        </Suspense>
      </div>
    </section>
  );
}
