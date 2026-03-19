// components/ui/WaveBackground.tsx
export default function WaveBackground() {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-0 opacity-20 pointer-events-none">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFD700" fillOpacity="1" d="M0,160L48,154.7C96,149,192,139,288,154.7C384,171,480,213,576,213.3C672,213,768,171,864,160C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L0,320Z" />
        </svg>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#22c55e" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,229.3C840,235,960,213,1080,197.3C1200,181,1320,171,1380,165.3L1440,160L1440,320L0,320Z" />
        </svg>
      </div>
    </>
  );
}
