import { Input } from '@/components/ui/input/input';

export function Search() {
  return (
    <div className="hidden md:flex">
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  );
}
