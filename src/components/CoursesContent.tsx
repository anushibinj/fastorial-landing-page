import { Calendar } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  status: string;
  startDate: string;
}

interface CoursesContentProps {
  courses: Course[];
}

export default function CoursesContent({ courses }: CoursesContentProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
          Upcoming Courses
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Be the first to know when new courses drop
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mt-6"></div>
      </div>

      <div className="space-y-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {course.status}
                  </span>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{course.startDate}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {course.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
