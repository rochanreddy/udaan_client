import { BookOpen } from 'lucide-react';

export const Footer = () => (
  <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-foreground">
    <div className="max-w-7xl mx-auto text-center">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary">
          <BookOpen className="w-6 h-6 text-primary-foreground" />
        </div>
        <span className="text-2xl font-bold text-background">Udaan</span>
      </div>
      <p className="text-background/70 mb-4">
        Empowering students to achieve their English language goals since 2018
      </p>
      <p className="text-background/50 text-sm">
        © 2024 Udaan English Training Center. All rights reserved.
      </p>
    </div>
  </footer>
);
