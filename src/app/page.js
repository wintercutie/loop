import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold font-montserrat">Welcome to Montserrat Fonts</h1>
      <p className="mt-4 text-lg font-medium">
        This text uses the "Medium" Montserrat font.
      </p>
      <p className="mt-2 text-sm font-light">
        This is lighter text with "Light" Montserrat font.
      </p>
      <p className="font-montserrat">This text is using Montserrat font.</p>
    </div>
  );
}
