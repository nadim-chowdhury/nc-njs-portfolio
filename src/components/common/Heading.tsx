export default function Heading({ title }: { title: string }) {
  return (
    <h3 className="text-2xl font-bold text-center mb-4 text-tertiary transition-all duration-500 hover:tracking-widest">
      {title}
    </h3>
  );
}
