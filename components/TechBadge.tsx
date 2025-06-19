// components/TechBadge.tsx
const TechBadge = ({ icon, label }: { icon: string, label: string }) => (
    <div className="flex flex-col items-center">
      <span className="text-2xl">{icon}</span>
      <span className="mt-1">{label}</span>
    </div>
  );

  export default TechBadge;