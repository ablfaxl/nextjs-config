import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';

export const Register = () => {
  const router = useRouter();
  const handleSendPhone = (e: any) => {
    e.preventDefault();
    const phone = '09109001137';
    router.push(`/verify?phone=${phone}`);
  };
  return (
    <Card className="w-[350px] space-y-5">
      <form>
        <CardHeader>
          <CardTitle>Sing Up | Sing in</CardTitle>
          <CardDescription>
            please enter your phone number to sign in
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-4">
              <Label htmlFor="phone">Phone</Label>
              <Input
                className="py-1.5"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            onClick={handleSendPhone}
            variant="default"
            size="lg"
            className="w-full"
          >
            Confirm
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
