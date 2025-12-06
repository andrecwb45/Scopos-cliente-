import { useParallax } from '@/react-app/hooks/useParallax';

export default function ParallaxBackground() {
  const offset = useParallax();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          transform: `translate3d(0, ${offset * 0.3}px, 0)`,
          background: 'radial-gradient(circle at 20% 50%, rgba(255, 107, 107, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)',
        }}
      />
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          transform: `translate3d(0, ${offset * 0.15}px, 0)`,
          background: 'radial-gradient(circle at 70% 30%, rgba(255, 142, 83, 0.08) 0%, transparent 60%)',
        }}
      />
    </div>
  );
}
